import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd,NavigationStart } from '@angular/router';
import { Settings, AppSettings } from './app.settings';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  public settings: Settings;
  routerSubscription: any;
  constructor(public appSettings:AppSettings, public router: Router, public appService:AppService){
    this.settings = this.appSettings.settings;
    if(JSON.parse(localStorage.getItem('cartInfo'))){
      this.appService.Data = JSON.parse(localStorage.getItem('cartInfo'));
    }  
  }

  ngOnInit() {
   // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh    
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          window.scrollTo(0,0);
      }
    })  
  
  }
}
