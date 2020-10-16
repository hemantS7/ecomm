function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-dialog/customer-dialog.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-dialog/customer-dialog.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomersCustomerDialogCustomerDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Customer</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n    <div mat-dialog-content> \n        <mat-tab-group class=\"tab-content-wrapped\">\n            <mat-tab label=\"General Info\"> \n                <div fxLayout=\"row wrap\" class=\"mt-2\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>First name</mat-label>\n                            <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                            <mat-error *ngIf=\"form.controls.firstName.errors?.required\">First name is required</mat-error>   \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Last name</mat-label>\n                            <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                            <mat-error *ngIf=\"form.controls.lastName.errors?.required\">Last name is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Middle Name/Initial</mat-label>\n                            <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Username</mat-label>\n                            <input matInput placeholder=\"Username\" formControlName=\"username\" required> \n                            <mat-error *ngIf=\"form.controls.username.errors?.required\">Username is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"email\"> \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Store</mat-label>\n                            <mat-select formControlName=\"storeId\">\n                                <mat-option [value]=\"\">-</mat-option>\n                                <mat-option *ngFor=\"let store of data.stores\" [value]=\"store.id\">\n                                    <span>{{store.name}}</span>\n                                </mat-option>\n                            </mat-select> \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Wallet Balance ($)</mat-label>\n                            <input matInput formControlName=\"walletBalance\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Revenue ($)</mat-label>\n                            <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                    </div>\n                </div>  \n            </mat-tab>\n            <mat-tab label=\"Billing\" formGroupName=\"billing\">\n                <div fxLayout=\"row wrap\" class=\"mt-2\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>First name</mat-label>\n                          <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].firstName.errors?.required\">First name is required</mat-error>   \n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Last name</mat-label>\n                          <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].lastName.errors?.required\">Last name is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Middle Name/Initial</mat-label>\n                          <input matInput placeholder=\"Middle Name/Initial\" formControlName=\"middleName\">\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Company</mat-label>\n                          <input matInput placeholder=\"Company\" formControlName=\"company\">\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Email</mat-label>\n                          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].email.errors?.required\">Email is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Phone</mat-label>\n                          <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].phone.errors?.required\">Phone is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Country</mat-label>\n                            <mat-select placeholder=\"Country\" formControlName=\"country\" required [compareWith]=\"compareFunction\">\n                                <mat-option [value]=\"\">-</mat-option>\n                                <mat-option *ngFor=\"let country of data.countries\" [value]=\"country\">\n                                    {{country.name}}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"form.get('billing')['controls'].country.errors?.required\">Country is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>City</mat-label>\n                          <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].city.errors?.required\">City is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>State/Province</mat-label>\n                          <input matInput placeholder=\"State/Province\" formControlName=\"state\">\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Zip/Postal Code</mat-label>\n                          <input matInput placeholder=\"Zip/Postal Code\" formControlName=\"zip\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].zip.errors?.required\">Zip/Postal Code is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" class=\"px-1\">\n                      <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Address</mat-label>\n                          <input matInput placeholder=\"Address (street, apartment, suite, unit etc.)\" formControlName=\"address\" required>\n                          <mat-error *ngIf=\"form.get('billing')['controls'].address.errors?.required\">Address is required</mat-error>\n                      </mat-form-field>\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group> \n    </div>\n    <div mat-dialog-actions>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\"> \n            <button mat-raised-button color=\"warn\" type=\"button\" mat-dialog-close>Close</button>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        </div> \n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Customers List</h2>  \n            <button mat-raised-button color=\"primary\" (click)=\"openCustomerDialog(null)\">Add Customer</button>\n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">\n                <div class=\"mat-header-cell\">Full Name</div>\n                <div class=\"mat-header-cell\">Username</div> \n                <div class=\"mat-header-cell\">Email</div>\n                <div class=\"mat-header-cell\">Store</div>\n                <div class=\"mat-header-cell\">Wallet Balance</div>\n                <div class=\"mat-header-cell\">Revenue</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let customer of customers | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">\n                <div class=\"mat-cell\">{{customer.firstName}} {{customer.lastName}}</div>\n                <div class=\"mat-cell\">{{customer.username}}</div>\n                <div class=\"mat-cell\">{{customer.email}}</div>\n                <div class=\"mat-cell\">{{ ( stores | filterById : customer.storeId )?.name }}</div> \n                <div class=\"mat-cell\">${{customer.walletBalance.toFixed(2)}}</div>\n                <div class=\"mat-cell\">${{customer.revenue.toFixed(2)}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"Edit\" (click)=\"openCustomerDialog(customer)\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(customer)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"customers.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/customers/customer-dialog/customer-dialog.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/customers/customer-dialog/customer-dialog.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomersCustomerDialogCustomerDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lci1kaWFsb2cvY3VzdG9tZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/customers/customer-dialog/customer-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/customers/customer-dialog/customer-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CustomerDialogComponent */

  /***/
  function srcAppAdminCustomersCustomerDialogCustomerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDialogComponent", function () {
      return CustomerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

    var CustomerDialogComponent = /*#__PURE__*/function () {
      function CustomerDialogComponent(dialogRef, data, fb) {
        _classCallCheck(this, CustomerDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
      }

      _createClass(CustomerDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            id: 0,
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: null,
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: null,
            storeId: null,
            walletBalance: null,
            revenue: null,
            billing: this.fb.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              middleName: '',
              company: '',
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              state: '',
              zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });

          if (this.data.customer) {
            this.form.patchValue(this.data.customer);
          }

          ;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.form.value);

          if (this.form.valid) {
            this.dialogRef.close(this.form.value);
          }
        }
      }, {
        key: "compareFunction",
        value: function compareFunction(o1, o2) {
          return o1.name == o2.name && o1.code == o2.code;
        }
      }]);

      return CustomerDialogComponent;
    }();

    CustomerDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CustomerDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customer-dialog/customer-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./customer-dialog.component.scss */
      "./src/app/admin/customers/customer-dialog/customer-dialog.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CustomerDialogComponent);
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/customers/customers.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustomersCustomersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/customers/customers.component.ts ***!
    \********************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppAdminCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-dialog/customer-dialog.component */
    "./src/app/admin/customers/customer-dialog/customer-dialog.component.ts");
    /* harmony import */


    var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _customers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customers */
    "./src/app/admin/customers/customers.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");

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

    var CustomersComponent = /*#__PURE__*/function () {
      function CustomersComponent(appService, dialog, appSettings) {
        _classCallCheck(this, CustomersComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.customers = [];
        this.stores = [{
          id: 1,
          name: 'Store 1'
        }, {
          id: 2,
          name: 'Store 2'
        }];
        this.countries = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countries = this.appService.getCountries();
          this.customers = _customers__WEBPACK_IMPORTED_MODULE_5__["customers"];
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "openCustomerDialog",
        value: function openCustomerDialog(data) {
          var _this = this;

          var dialogRef = this.dialog.open(_customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CustomerDialogComponent"], {
            data: {
              customer: data,
              stores: this.stores,
              countries: this.countries
            },
            panelClass: ['theme-dialog'],
            autoFocus: false,
            direction: this.settings.rtl ? 'rtl' : 'ltr'
          });
          dialogRef.afterClosed().subscribe(function (customer) {
            if (customer) {
              var index = _this.customers.findIndex(function (x) {
                return x.id == customer.id;
              });

              if (index !== -1) {
                _this.customers[index] = customer;
              } else {
                var last_customer = _this.customers[_this.customers.length - 1];
                customer.id = last_customer.id + 1;

                _this.customers.push(customer);
              }
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(customer) {
          var _this2 = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this customer?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this2.customers.indexOf(customer);

              if (index !== -1) {
                _this2.customers.splice(index, 1);
              }
            }
          });
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]
      }];
    };

    CustomersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customers',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customers/customers.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./customers.component.scss */
      "./src/app/admin/customers/customers.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]])], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/customers/customers.module.ts ***!
    \*****************************************************/

  /*! exports provided: routes, CustomersModule */

  /***/
  function srcAppAdminCustomersCustomersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersModule", function () {
      return CustomersModule;
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


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customers.component */
    "./src/app/admin/customers/customers.component.ts");
    /* harmony import */


    var _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customer-dialog/customer-dialog.component */
    "./src/app/admin/customers/customer-dialog/customer-dialog.component.ts");

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
      component: _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
      pathMatch: 'full'
    }];

    var CustomersModule = function CustomersModule() {
      _classCallCheck(this, CustomersModule);
    };

    CustomersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]]
    })], CustomersModule);
    /***/
  },

  /***/
  "./src/app/admin/customers/customers.ts":
  /*!**********************************************!*\
    !*** ./src/app/admin/customers/customers.ts ***!
    \**********************************************/

  /*! exports provided: customers */

  /***/
  function srcAppAdminCustomersCustomersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customers", function () {
      return customers;
    });

    var customers = [{
      id: 1,
      username: 'bruno.v',
      email: 'bruno@company.com',
      firstName: 'Bruno',
      lastName: 'Vespa',
      middleName: '',
      storeId: 2,
      walletBalance: 5255,
      revenue: 3450,
      billing: {
        firstName: 'Bruno',
        lastName: 'Vespa',
        middleName: '',
        company: 'Company 1',
        email: 'bruno@company.com',
        phone: '(415) 231-0332',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 2,
      username: 'andy.79',
      email: 'warhol@gmail.com',
      firstName: 'Andy',
      lastName: 'Warhol',
      middleName: '',
      storeId: 1,
      walletBalance: 8055,
      revenue: 7200,
      billing: {
        firstName: 'Andy',
        lastName: 'Warhol',
        middleName: '',
        company: 'Company 1',
        email: 'warhol@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 3,
      username: 'pretty',
      email: 'ashley@gmail.com',
      firstName: 'Ashley',
      lastName: 'Ahlberg',
      middleName: '',
      storeId: 1,
      walletBalance: 17200,
      revenue: 2200,
      billing: {
        firstName: 'Ashley',
        lastName: 'Ahlberg',
        middleName: '',
        company: 'Company 5',
        email: 'ashley@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 4,
      username: 'julia.a',
      email: 'julia@gmail.com',
      firstName: 'Julia',
      lastName: 'Aniston',
      middleName: '',
      storeId: 2,
      walletBalance: 9480,
      revenue: 1470,
      billing: {
        firstName: 'Julia',
        lastName: 'Aniston',
        middleName: '',
        company: 'Company 5',
        email: 'julia@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 5,
      username: 'lusia.m',
      email: 'lusia@gmail.com',
      firstName: 'Lusia',
      lastName: 'Manuel',
      middleName: '',
      storeId: 1,
      walletBalance: 6200,
      revenue: 3250,
      billing: {
        firstName: 'Lusia',
        lastName: 'Manuel',
        middleName: '',
        company: 'Company 4',
        email: 'lusia@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 6,
      username: 'adam.s',
      email: 'adam@gmail.com',
      firstName: 'Adam',
      lastName: 'Sandler',
      middleName: '',
      storeId: 2,
      walletBalance: 7580,
      revenue: 2950,
      billing: {
        firstName: 'Adam',
        lastName: 'Sandler',
        middleName: '',
        company: 'Company 1',
        email: 'adam@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 7,
      username: 'tereza.s',
      email: 'tereza@gmail.com',
      firstName: 'Tereza',
      lastName: 'Stiles',
      middleName: '',
      storeId: 2,
      walletBalance: 5240,
      revenue: 1095,
      billing: {
        firstName: 'Tereza',
        lastName: 'Stiles',
        middleName: '',
        company: 'Company 3',
        email: 'tereza@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }, {
      id: 8,
      username: 'michael.b',
      email: 'michael@gmail.com',
      firstName: 'Michael',
      lastName: 'Blair',
      middleName: '',
      storeId: 2,
      walletBalance: 7340,
      revenue: 4580,
      billing: {
        firstName: 'Michael',
        lastName: 'Blair',
        middleName: '',
        company: 'Company 3',
        email: 'michael@gmail.com',
        phone: '(212) 457-2308',
        country: {
          name: 'United States',
          code: 'US'
        },
        city: 'Los Angeles',
        state: 'California',
        zip: '90201',
        address: 'Palos Verdes Peninsula'
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=customers-customers-module-es5.js.map