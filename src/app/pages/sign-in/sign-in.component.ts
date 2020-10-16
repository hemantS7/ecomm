import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import {AuthService} from '../../http-interceptors/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  otpForm: FormGroup;
  loginForm: FormGroup;
  registerForm: FormGroup;
  otpVerification:boolean = false;
  actualOtp;
  user:any;

  constructor(public formBuilder: FormBuilder, 
    public router:Router, public snackBar: MatSnackBar, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.otpForm = this.formBuilder.group({
      'otp': ['', Validators.required],
    });

    this.loginForm = this.formBuilder.group({
      'mobileno': ['', Validators.required],
      //'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])] 
    });

    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});

  }

  verifyOtp(values){
    console.log('otp',values);
    if(values.otp == this.actualOtp){
      localStorage.setItem('currentUser', window.btoa(window.btoa(window.btoa(window.btoa(JSON.stringify(this.user))))));
      this.router.navigate(['/checkout']);
    }
    else{
      this.snackBar.open('Invalid OTP!', 'Mismatch', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  }

  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm).subscribe(data=>{
        if(data && data.status == 'SUCCESS'){
          console.log('login result',data)
          this.otpVerification = true;
          this.user = data;
          this.actualOtp = data.result.OTP[0].OTP;
        }
      }); 
    }
  }

  public onRegisterFormSubmit(values:Object):void {
    if (this.registerForm.valid) {
      this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }

}
