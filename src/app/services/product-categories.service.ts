import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { catchError, map } from "rxjs/operators";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
import { ENVIRONMENT, API } from '../common/restapi';
import { AuthService } from '../http-interceptors/auth.service';
import { Category, Product } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  public headers: HttpHeaders;
  baseUrl = ENVIRONMENT.BASEURL;
  valuesToDerive: any;
  gettingData = new Subject<any>();
  gettingupdatedphrases = new Subject<any>();
  phraseAllData = new Subject<any>()
  this: any;
  browserDetail: RegExpMatchArray;

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>("123")
  public currentUser = this.currentUserSubject.asObservable();
  updateProfileData(user) {
    this.currentUserSubject.next(user);
  }

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) {
    this.headers = this.authService.setHeader();
  }
  

  getCategoryDetails():Observable<any> {
    let payload = '{"entityRows":[{"PA_ID":11189,"LOGIN_PA_ID":11189}]}';
    return this.http.post<any>(this.baseUrl + `${API.PRODUCT_CATEGORY}`, payload, { headers: this.headers })
      .pipe(map(res => res),
        catchError(this.authService.handleError)
      );
  }

}
