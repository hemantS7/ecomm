function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"account-sidenav\" perfectScrollbar>\r\n        <mat-nav-list class=\"mat-elevation-z1 h-100\">\r\n            <mat-list-item *ngFor=\"let link of links\">              \r\n                <mat-icon matListIcon class=\"mat-icon-sm\">{{link.icon}}</mat-icon>\r\n                <a matLine [routerLink]=\"link.href\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">{{ link.name }}</a>\r\n            </mat-list-item>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"account-content\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"header-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <h3>My Account</h3>\r\n        </div>\r\n        <div class=\"account-wrapper mat-elevation-z1\">\r\n            <router-outlet></router-outlet>\r\n        </div>  \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/addresses/addresses.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/addresses/addresses.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAddressesAddressesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group >\r\n    <mat-tab label=\"Billing address\">\r\n        <div class=\"p-2 mt-1\">\r\n            <form [formGroup]=\"billingForm\" (ngSubmit)=\"onBillingFormSubmit(billingForm.value)\">     \r\n              <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.firstName.errors?.required\">First name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.lastName.errors?.required\">Last name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\r\n                          {{country.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"billingForm.controls.country.errors?.required\">Country is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.city.errors?.required\">City is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"State/Province\" formControlName=\"state\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Zip/Postal Code\" formControlName=\"zip\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.zip.errors?.required\">Zip/Postal Code is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Address (street, apartment, suite, unit etc.)\" formControlName=\"address\" required>\r\n                      <mat-error *ngIf=\"billingForm.controls.address.errors?.required\">Address is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"text-center mt-2\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"onBillingFormSubmit(billingForm.value)\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Shipping address\">\r\n        <div class=\"p-2 mt-1\">\r\n            <form [formGroup]=\"shippingForm\" (ngSubmit)=\"onShippingFormSubmit(shippingForm.value)\">     \r\n              <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.firstName.errors?.required\">First name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.lastName.errors?.required\">Last name is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <mat-select placeholder=\"Country\" formControlName=\"country\" required>\r\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country\">\r\n                          {{country.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"shippingForm.controls.country.errors?.required\">Country is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"City\" formControlName=\"city\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.city.errors?.required\">City is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"State/Province\" formControlName=\"state\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Zip/Postal Code\" formControlName=\"zip\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.zip.errors?.required\">Zip/Postal Code is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"px-1\">\r\n                  <mat-form-field class=\"w-100\">\r\n                      <input matInput placeholder=\"Address (street, apartment, suite, unit etc.)\" formControlName=\"address\" required>\r\n                      <mat-error *ngIf=\"shippingForm.controls.address.errors?.required\">Address is required</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"text-center mt-2\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"onShippingFormSubmit(shippingForm.value)\">Save</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"text-muted\">Hello, <b>Emilio Verdines!</b>\r\nFrom your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>\r\n\r\n<div fxLayout=\"row wrap\" class=\"flex-wrapper\">\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"50\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Account Information</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/information\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n              <p>Emilio Verdines</p>\r\n              <p>emilio.verdines@gmail.com</p>\r\n              <p><a routerLink=\"/account/information\" class=\"primary-text\">Change password</a></p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"50\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Addresses</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/addresses\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n            <p>Billing address</p>\r\n            <p>Shipping address</p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"col\">\r\n        <mat-card class=\"p-0\">\r\n          <mat-card-header class=\"p-1 account-card-title\" fxLayoutAlign=\"space-between center\">\r\n              <mat-card-title class=\"m-0\"><h3>Orders</h3></mat-card-title>\r\n              <a mat-icon-button routerLink=\"/account/orders\"><mat-icon class=\"text-muted\">edit</mat-icon></a>\r\n          </mat-card-header>\r\n          <div class=\"divider\"></div>\r\n          <mat-card-content class=\"p-2 text-muted account-card-content\">\r\n            <p class=\"\">Completed</p>\r\n            <mat-progress-bar value=\"75\" color=\"primary\"></mat-progress-bar>\r\n            <p class=\"mt-1\">Processing</p>\r\n            <mat-progress-bar value=\"25\" color=\"accent\"></mat-progress-bar>\r\n            <p class=\"mt-1\">On hold</p>\r\n            <mat-progress-bar value=\"65\" color=\"warn\"></mat-progress-bar>\r\n            <p class=\"mt-1\">Refunded</p>\r\n            <mat-progress-bar value=\"25\" color=\"primary\"></mat-progress-bar>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/information/information.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/information/information.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountInformationInformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n        <h2 class=\"text-muted text-center\">Account details</h2>\r\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\">\r\n            <mat-form-field class=\"w-100 mt-2\">\r\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.firstName.errors?.required\">First Name is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.firstName.hasError('minlength')\">First Name isn't long enough, minimum of 3 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.lastName.errors?.required\">Last Name is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.lastName.hasError('minlength')\">Last Name isn't long enough, minimum of 3 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error *ngIf=\"infoForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"onInfoFormSubmit(infoForm.value)\">Save</button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        <h2 class=\"text-muted text-center\">Password change</h2>\r\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \r\n            <mat-form-field class=\"w-100 mt-2\">\r\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required>\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"w-100 mt-1\">\r\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required>\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field> \r\n            <mat-form-field class=\"w-100 mt-1\">\r\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required>\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"onPasswordFormSubmit(passwordForm.value)\">Change</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div> \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/orders/orders.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/orders/orders.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-table orders-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Order</div>\r\n      <div class=\"mat-header-cell\">Date</div>\r\n      <div class=\"mat-header-cell\">Status</div>\r\n      <div class=\"mat-header-cell\">Total</div>\r\n      <div class=\"mat-header-cell\"></div>\r\n    </div>\r\n    <div *ngFor=\"let order of orders\" class=\"mat-row\">\r\n      <div class=\"mat-cell\"><span class=\"order\">{{order.number}}</span></div>\r\n      <div class=\"mat-cell\">{{order.date}}</div>\r\n      <div class=\"mat-cell\">{{order.status}}</div>\r\n      <div class=\"mat-cell\">{{order.total}}</div>     \r\n      <div class=\"mat-cell\">\r\n        <div class=\"p-1 actions\">          \r\n          <button mat-mini-fab color=\"primary\" matTooltip=\"View\">\r\n              <mat-icon>remove_red_eye</mat-icon>\r\n          </button>\r\n          <button *ngIf=\"order.invoice\" mat-mini-fab color=\"warn\" matTooltip=\"View invoice\" class=\"btn-invoice\">\r\n              <mat-icon>receipt</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>      \r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./src/app/pages/account/account.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/account/account.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".account-sidenav {\n  width: 280px;\n  padding: 2px;\n}\n.account-sidenav .mat-nav-list {\n  box-sizing: border-box;\n}\n.account-sidenav .mat-nav-list .mat-list-item {\n  height: 36px;\n  font-size: 14px;\n}\n.account-content {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.account-content.p-left {\n  padding-left: 16px;\n}\n.account-content .header-row {\n  background: #fff;\n  padding: 0 16px;\n  height: 56px;\n}\n.account-content .account-wrapper {\n  margin-top: 16px;\n  padding: 16px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksc0JBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFHWjtBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUdSO0FBREk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIC5tYXQtbmF2LWxpc3R7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAubWF0LWxpc3QtaXRlbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hY2NvdW50LWNvbnRlbnR7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXJvd3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC13cmFwcGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/account/account.component.ts ***!
    \****************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppPagesAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(router) {
        _classCallCheck(this, AccountComponent);

        this.router = router;
        this.sidenavOpen = true;
        this.links = [{
          name: 'Account Dashboard',
          href: 'dashboard',
          icon: 'dashboard'
        }, {
          name: 'Account Information',
          href: 'information',
          icon: 'info'
        }, {
          name: 'Addresses',
          href: 'addresses',
          icon: 'location_on'
        }, {
          name: 'Order History',
          href: 'orders',
          icon: 'add_shopping_cart'
        }, {
          name: 'Logout',
          href: '/sign-in',
          icon: 'power_settings_new'
        }];
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.innerWidth < 960) {
            this.sidenavOpen = false;
          }

          ;
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          window.innerWidth < 960 ? this.sidenavOpen = false : this.sidenavOpen = true;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (window.innerWidth < 960) {
                _this.sidenav.close();
              }
            }
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AccountComponent.propDecorators = {
      sidenav: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sidenav', {
          "static": true
        }]
      }],
      onWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }]
    };
    AccountComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-account',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./account.component.scss */
      "./src/app/pages/account/account.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AccountComponent);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, AccountModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account.component */
    "./src/app/pages/account/account.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/account/dashboard/dashboard.component.ts");
    /* harmony import */


    var _information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./information/information.component */
    "./src/app/pages/account/information/information.component.ts");
    /* harmony import */


    var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./addresses/addresses.component */
    "./src/app/pages/account/addresses/addresses.component.ts");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/pages/account/orders/orders.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        data: {
          breadcrumb: 'Dashboard'
        }
      }, {
        path: 'information',
        component: _information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"],
        data: {
          breadcrumb: 'Information'
        }
      }, {
        path: 'addresses',
        component: _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"],
        data: {
          breadcrumb: 'Addresses'
        }
      }, {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
        data: {
          breadcrumb: 'Orders'
        }
      }]
    }];

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"], _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/pages/account/addresses/addresses.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/account/addresses/addresses.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAddressesAddressesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/account/addresses/addresses.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/account/addresses/addresses.component.ts ***!
    \****************************************************************/

  /*! exports provided: AddressesComponent */

  /***/
  function srcAppPagesAccountAddressesAddressesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressesComponent", function () {
      return AddressesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddressesComponent = /*#__PURE__*/function () {
      function AddressesComponent(appService, formBuilder, snackBar) {
        _classCallCheck(this, AddressesComponent);

        this.appService = appService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.countries = [];
      }

      _createClass(AddressesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countries = this.appService.getCountries();
          this.billingForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'middleName': '',
            'company': '',
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'state': '',
            'zip': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.shippingForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'middleName': '',
            'company': '',
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'state': '',
            'zip': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onBillingFormSubmit",
        value: function onBillingFormSubmit(values) {
          if (this.billingForm.valid) {
            this.snackBar.open('Your billing address information updated successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }, {
        key: "onShippingFormSubmit",
        value: function onShippingFormSubmit(values) {
          if (this.shippingForm.valid) {
            this.snackBar.open('Your shipping address information updated successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }]);

      return AddressesComponent;
    }();

    AddressesComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    AddressesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-addresses',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./addresses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/addresses/addresses.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./addresses.component.scss */
      "./src/app/pages/account/addresses/addresses.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], AddressesComponent);
    /***/
  },

  /***/
  "./src/app/pages/account/dashboard/dashboard.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/account/dashboard/dashboard.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-wrapper {\n  margin: 8px -8px;\n}\n.flex-wrapper .col {\n  padding: 8px;\n}\n.account-card-content {\n  height: 134px;\n}\n.account-card-content a {\n  text-decoration: none;\n}\n.account-card-content a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQ0E7RUFDSSxhQUFBO0FBRUo7QUFESTtFQUNJLHFCQUFBO0FBR1I7QUFGUTtFQUNJLDBCQUFBO0FBSVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcbi5hY2NvdW50LWNhcmQtY29udGVudHtcclxuICAgIGhlaWdodDogMTM0cHg7XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/dashboard/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesAccountDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [];
    };

    DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-dashboard',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/account/dashboard/dashboard.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/account/information/information.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/account/information/information.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountInformationInformationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/account/information/information.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/account/information/information.component.ts ***!
    \********************************************************************/

  /*! exports provided: InformationComponent */

  /***/
  function srcAppPagesAccountInformationInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationComponent", function () {
      return InformationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var InformationComponent = /*#__PURE__*/function () {
      function InformationComponent(formBuilder, snackBar) {
        _classCallCheck(this, InformationComponent);

        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
      }

      _createClass(InformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.infoForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])]
          });
          this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confirmNewPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('newPassword', 'confirmNewPassword')
          });
        }
      }, {
        key: "onInfoFormSubmit",
        value: function onInfoFormSubmit(values) {
          if (this.infoForm.valid) {
            this.snackBar.open('Your account information updated successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }, {
        key: "onPasswordFormSubmit",
        value: function onPasswordFormSubmit(values) {
          if (this.passwordForm.valid) {
            this.snackBar.open('Your password changed successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }]);

      return InformationComponent;
    }();

    InformationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    InformationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-information',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./information.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/information/information.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./information.component.scss */
      "./src/app/pages/account/information/information.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], InformationComponent);
    /***/
  },

  /***/
  "./src/app/pages/account/orders/orders.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/account/orders/orders.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orders-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.orders-table.mat-table .mat-row, .orders-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.orders-table.mat-table .mat-cell, .orders-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.orders-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.orders-table.mat-table .mat-cell .order {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.orders-table.mat-table .mat-cell .btn-invoice {\n  margin-left: 8px;\n}\n.orders-table.mat-table .mat-cell .actions {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJzLXRhYmxlLm1hdC10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIC5tYXQtcm93LCAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NzBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICAub3JkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4taW52b2ljZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnN7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/account/orders/orders.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/account/orders/orders.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppPagesAccountOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent() {
        _classCallCheck(this, OrdersComponent);

        this.orders = [{
          number: '#3258',
          date: 'March 29, 2018',
          status: 'Completed',
          total: '$140.00 for 2 items',
          invoice: true
        }, {
          number: '#3145',
          date: 'February 14, 2018',
          status: 'On hold',
          total: '$255.99 for 1 item',
          invoice: false
        }, {
          number: '#2972',
          date: 'January 7, 2018',
          status: 'Processing',
          total: '$255.99 for 1 item',
          invoice: true
        }, {
          number: '#2971',
          date: 'January 5, 2018',
          status: 'Completed',
          total: '$73.00 for 1 item',
          invoice: true
        }, {
          number: '#1981',
          date: 'December 24, 2017',
          status: 'Pending Payment',
          total: '$285.00 for 2 items',
          invoice: false
        }, {
          number: '#1781',
          date: 'September 3, 2017',
          status: 'Refunded',
          total: '$49.00 for 2 items',
          invoice: false
        }];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [];
    };

    OrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-orders',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/orders/orders.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/pages/account/orders/orders.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], OrdersComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-account-account-module-es5.js.map