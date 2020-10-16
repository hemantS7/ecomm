import { Injectable, NgZone } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError } from "rxjs/operators";
import { throwError, BehaviorSubject, Subject } from "rxjs";
import { ENVIRONMENT, API } from "../common/restapi";
// import * as crypto from 'js-sha512';
declare global {
    interface Window {
        RTCPeerConnection: RTCPeerConnection;
        mozRTCPeerConnection: RTCPeerConnection;
        webkitRTCPeerConnection: RTCPeerConnection;
    }
}

@Injectable({ providedIn: "root" })

export class AuthService {
    localIp = sessionStorage.getItem('LOCAL_IP');
    public currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem("currentUser"));
    public currentUser = this.currentUserSubject.asObservable();
    authToken: string;
    status_data: any;
    headers: HttpHeaders;
    deviceInfo = null;
    currentUserData = new Subject<any>();
    public logoutDone: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);
    constructor(
        private http: HttpClient,
        private _router: Router)
        {}

    getAuthorizationToken() {
        this.authToken = localStorage.getItem("currentUser");
        return this.authToken;
    }

    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("An error occurred:", error.error.message);
        }
        return throwError({
            status: error.status,
            error: error.error,
            message: "REQUEST FAILED. PLEASE TRY AFTER SOMETIME."
        });
    }

    // Local IP Integration Start
    private ipRegex = new RegExp(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/);


    private getRTCPeerConnection() {
        return window.RTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.webkitRTCPeerConnection;
    }
    // Local IP Integration end


    login(form: any) {
        const payload = {"entityRows":[{"CATEGORY":"PATIENT","MOBILE":form.value.mobileno,"GCM_TOKEN":""}]};
        return this.http.post<any>(`${ENVIRONMENT.BASEURL}${API.LOGIN}`, payload,{headers:  this.setHeader()})
            .pipe(map(user => {
                if (user) {
            }
                return user;
            }),catchError(this.handleError));
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    logout() {
        if(localStorage.getItem('currentUser')){
            localStorage.removeItem('currentUser');
        }
        this._router.navigate(['/sign-in']);
    }

    logoutAgent() {
        localStorage.clear();
        document.cookie = "lu=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        this.currentUserSubject.next(null);
        this.logoutDone.next(false);
        this._router.navigate(['login']);
    }

    // HTTP Request and Response Code
    checkStatus(status: string) {
        if (status == "200") {
            this.status_data = {
                message: "OK",
                errorcode: 200
            };
        } else if (status == "400") {
            this.status_data = {
                message: "Bad Request",
                errorcode: 400
            };
        } else if (status == "401") {
            this.status_data = {
                message: "Unauthorized",
                errorcode: 401
            };
            this.logout();
            return this.status_data;
        } else if (status == "403") {
            this.status_data = {
                message: "Forbidden",
                errorcode: 403
            };
        } else if (status == "404") {
            this.status_data = {
                message: "Not Found",
                errorcode: 404
            };
        } else if (status == "500") {
            this.status_data = {
                message: "Internal Server Error",
                errorcode: 500
            };
        } else if (status == "201") {
            this.status_data = {
                message: "Created",
                errorcode: 201
            };
        } else if (status == "409") {
            this.status_data = {
                message: "conflict",
                errorcode: 409
            };
        }
        return this.status_data;
    }

    getCurrentUser() {
        if (localStorage.getItem("currentUser")) {
            return (this.currentUser = JSON.parse(
                window.atob(
                    window.atob(
                        window.atob(window.atob(localStorage.getItem("currentUser")))
                    )
                )
            ));
        }
    }

    setHeader() {
        // if (localStorage.getItem("currentUser")) {
            return (this.headers = new HttpHeaders()
                .set("Company-Code", "demotest")//changes made on 13-11
                .set("Authorization", "JOSMOBILE abcxyzsdfsdrwewer53345345sdwerwer234234")//changes made on 13-11
                .set("Content-Type", "application/json"))//changes made on 13-11
                // .set("authorization", this.getCurrentUser().accessToken));
        // }
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    createCookie(name, value, expires, path, domain) {
        var cookie = name + "=" + escape(value) + ";";

        if (expires) {
            // If it's a date
            if (expires instanceof Date) {
                // If it isn't a valid date
                if (isNaN(expires.getTime()))
                    expires = new Date();
            }
            else
                expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

            cookie += "expires=" + expires.toGMTString() + ";";
        }

        if (path)
            cookie += "path=" + path + ";";
        if (domain)
            cookie += "domain=" + domain + ";";

        document.cookie = cookie + ";SameSite=strict";
    }

}
