import { AuthService } from '../http-interceptors/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    let authToken = this.authService.getAuthorizationToken();
    if(authToken){
      return true;
    }
    else{
      this.router.navigate(['/sign-in']);
      // this.router.navigate(['/sign-in'],{queryParams :{returnUrl :state.url}});
       return false;
    }
  }

}
