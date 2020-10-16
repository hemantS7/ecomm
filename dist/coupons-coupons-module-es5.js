function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupons-coupons-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCouponsCouponDialogCouponDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Coupon</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" class=\"user-form\">\n    <div mat-dialog-content> \n        <mat-tab-group class=\"tab-content-wrapped\">\n            <mat-tab label=\"General Info\"> \n                <div fxLayout=\"row wrap\" class=\"mt-2\">\n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Title</mat-label>\n                            <input matInput formControlName=\"title\" required>\n                            <mat-error *ngIf=\"form.controls.title.errors?.required\">Title is required</mat-error>   \n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Code</mat-label>\n                            <input matInput formControlName=\"code\" required>\n                            <mat-error *ngIf=\"form.controls.code.errors?.required\">Code is required</mat-error>\n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Discount Type</mat-label>\n                            <mat-select formControlName=\"discountType\">\n                                <mat-option [value]=\"\">-</mat-option>\n                                <mat-option *ngFor=\"let type of data.discountTypes\" [value]=\"type.id\">\n                                    <span>{{type.name}}</span>\n                                </mat-option>\n                            </mat-select> \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Amount</mat-label>\n                            <input matInput formControlName=\"amount\"> \n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\"> \n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Coupon expiry date</mat-label>\n                            <input matInput [matDatepicker]=\"expiryDate\" formControlName=\"expiryDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"expiryDate\"></mat-datepicker-toggle>\n                            <mat-datepicker #expiryDate></mat-datepicker>\n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Store</mat-label>\n                            <mat-select formControlName=\"storeId\">\n                                <mat-option [value]=\"\">-</mat-option>\n                                <mat-option *ngFor=\"let store of data.stores\" [value]=\"store.id\">\n                                    <span>{{store.name}}</span>\n                                </mat-option>\n                            </mat-select> \n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <div class=\"py-1\">\n                            <mat-checkbox formControlName=\"allowFreeShipping\" color=\"primary\"> \n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <span class=\"mr-1\">Allow free shipping</span>\n                                    <mat-icon class=\"mat-icon-sm\" color=\"primary\" matTooltip=\"Check this box if the coupon grants free shipping. The free shipping method must be enabled and be set to require.\">live_help</mat-icon>\n                                </div>\n                            </mat-checkbox> \n                        </div>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <div class=\"py-1\">\n                            <mat-checkbox formControlName=\"showOnStore\" color=\"primary\"> \n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <span class=\"mr-1\">Show on store</span>\n                                    <mat-icon class=\"mat-icon-sm\" color=\"primary\" matTooltip=\"Check this box if you want to show this coupon in store page.\">live_help</mat-icon>\n                                </div>\n                            </mat-checkbox> \n                        </div>\n                    </div> \n                    <div fxFlex=\"100\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Description</mat-label>\n                            <input matInput formControlName=\"desc\">\n                        </mat-form-field>\n                    </div> \n                </div>  \n            </mat-tab>\n            <mat-tab label=\"Restriction\" formGroupName=\"restriction\">\n                <div fxLayout=\"row wrap\" class=\"mt-2\"> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Minimum Spend</mat-label>\n                            <input matInput formControlName=\"minimumSpend\" required>\n                            <mat-error *ngIf=\"form.get('restriction')['controls'].minimumSpend.errors?.required\">Minimum Spend is required</mat-error>   \n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Maximum Spend</mat-label>\n                            <input matInput formControlName=\"maximumSpend\">\n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-chip-list #productsChipList>\n                                <mat-chip *ngFor=\"let product of products\" [selectable]=\"true\" [removable]=\"true\" (removed)=\"removeProduct(product)\">\n                                    {{product}}\n                                    <mat-icon matChipRemove>cancel</mat-icon>\n                                </mat-chip>\n                                <input placeholder=\"Add products...\"\n                                     [matChipInputFor]=\"productsChipList\"\n                                     [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                     [matChipInputAddOnBlur]=\"true\"\n                                     (matChipInputTokenEnd)=\"addProduct($event)\">\n                            </mat-chip-list>\n                        </mat-form-field>\n                    </div>  \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Product categories</mat-label>\n                            <mat-select formControlName=\"categories\" multiple> \n                                <mat-option *ngFor=\"let cat of data.categories\" [value]=\"cat.id\">\n                                    <span>{{cat.name}}</span>\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>  \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\">\n                        <div class=\"py-1\">\n                            <mat-checkbox formControlName=\"individualUseOnly\" color=\"primary\"> \n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <span class=\"mr-1\">Individual use only</span>\n                                    <mat-icon class=\"mat-icon-sm\" color=\"primary\" matTooltip=\"Check this box if the coupon cannot be used in conjunction with other coupons.\">live_help</mat-icon>\n                                </div>\n                            </mat-checkbox> \n                        </div>\n                    </div>  \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" class=\"px-1\"> \n                        <div class=\"py-1\">\n                            <mat-checkbox formControlName=\"excludeSaleItems\" color=\"primary\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <span class=\"mr-1\">Exclude sale items</span>\n                                    <mat-icon class=\"mat-icon-sm\" color=\"primary\" matTooltip=\"Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are no sale items in the cart.\">live_help</mat-icon>\n                                </div> \n                            </mat-checkbox>\n                        </div> \n                    </div>   \n                </div>\n            </mat-tab> \n            <mat-tab label=\"Limit\" formGroupName=\"limit\">\n                <div fxLayout=\"row wrap\" class=\"mt-2\"> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Usage limit per coupon</mat-label>\n                            <input matInput formControlName=\"perCoupon\" type=\"number\"> \n                        </mat-form-field>\n                    </div>  \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Limit usage to X items</mat-label>\n                            <input matInput formControlName=\"perItems\" type=\"number\"> \n                        </mat-form-field>\n                    </div> \n                    <div fxFlex=\"100\" fxFlex.gt-md=\"33.3\" class=\"px-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Usage limit per user</mat-label>\n                            <input matInput formControlName=\"perUser\" type=\"number\"> \n                        </mat-form-field>\n                    </div> \n                </div>\n            </mat-tab>\n        </mat-tab-group> \n    </div>\n    <div mat-dialog-actions>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\"> \n            <button mat-raised-button color=\"warn\" type=\"button\" mat-dialog-close>Close</button>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        </div> \n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupons.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupons.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCouponsCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Coupons List</h2>  \n            <button mat-raised-button color=\"primary\" (click)=\"openCouponDialog(null)\">Add Coupon</button>\n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">\n                <div class=\"mat-header-cell\">Title</div>\n                <div class=\"mat-header-cell\">Code</div> \n                <div class=\"mat-header-cell\">Discount Type</div>\n                <div class=\"mat-header-cell\">Amount</div>\n                <div class=\"mat-header-cell\">Store</div>\n                <div class=\"mat-header-cell\">Usage Limit</div>\n                <div class=\"mat-header-cell\">Expiry Date</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let coupon of coupons | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">\n                <div class=\"mat-cell\">{{coupon.title}}</div>\n                <div class=\"mat-cell\"> Discount <span class=\"primary-text\">{{coupon.code}}</span></div>\n                <div class=\"mat-cell\">{{ ( discountTypes | filterById : coupon.discountType )?.name }}</div>\n                <div class=\"mat-cell\">{{coupon.amount}}</div>\n                <div class=\"mat-cell\">{{ ( stores | filterById : coupon.storeId )?.name }}</div> \n                <div class=\"mat-cell\">{{coupon.limit.perCoupon}}</div>\n                <div class=\"mat-cell\">{{coupon.expiryDate | date:\"dd MMMM, yyyy\"}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"Edit\" (click)=\"openCouponDialog(coupon)\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(coupon)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"coupons.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCouponsCouponDialogCouponDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdXBvbnMvY291cG9uLWRpYWxvZy9jb3Vwb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.ts ***!
    \************************************************************************/

  /*! exports provided: CouponDialogComponent */

  /***/
  function srcAppAdminCouponsCouponDialogCouponDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponDialogComponent", function () {
      return CouponDialogComponent;
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
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");

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

    var CouponDialogComponent = /*#__PURE__*/function () {
      function CouponDialogComponent(dialogRef, data, fb) {
        _classCallCheck(this, CouponDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.products = [];
      }

      _createClass(CouponDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            id: 0,
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desc: null,
            discountType: null,
            amount: null,
            expiryDate: null,
            allowFreeShipping: false,
            storeId: null,
            showOnStore: false,
            restriction: this.fb.group({
              minimumSpend: null,
              maximumSpend: null,
              individualUseOnly: false,
              excludeSaleItems: false,
              products: [[]],
              categories: [[]]
            }),
            limit: this.fb.group({
              perCoupon: null,
              perItems: null,
              perUser: null
            })
          });

          if (this.data.coupon) {
            this.form.patchValue(this.data.coupon);
            this.products = this.data.coupon.restriction.products;
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
        key: "addProduct",
        value: function addProduct(event) {
          var input = event.input;
          var value = event.value;

          if ((value || '').trim()) {
            this.products.push(value.trim());
          }

          if (input) {
            input.value = '';
          }

          this.form['controls'].restriction['controls'].products.patchValue(this.products);
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(fruit) {
          var index = this.products.indexOf(fruit);

          if (index >= 0) {
            this.products.splice(index, 1);
          }

          this.form['controls'].restriction['controls'].products.patchValue(this.products);
        }
      }]);

      return CouponDialogComponent;
    }();

    CouponDialogComponent.ctorParameters = function () {
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

    CouponDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-coupon-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./coupon-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./coupon-dialog.component.scss */
      "./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CouponDialogComponent);
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupons.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admin/coupons/coupons.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCouponsCouponsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdXBvbnMvY291cG9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupons.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/coupons/coupons.component.ts ***!
    \****************************************************/

  /*! exports provided: CouponsComponent */

  /***/
  function srcAppAdminCouponsCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsComponent", function () {
      return CouponsComponent;
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


    var _coupons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coupons */
    "./src/app/admin/coupons/coupons.ts");
    /* harmony import */


    var _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./coupon-dialog/coupon-dialog.component */
    "./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.ts");
    /* harmony import */


    var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
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

    var CouponsComponent = /*#__PURE__*/function () {
      function CouponsComponent(appService, dialog, appSettings) {
        _classCallCheck(this, CouponsComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.coupons = [];
        this.stores = [{
          id: 1,
          name: 'Store 1'
        }, {
          id: 2,
          name: 'Store 2'
        }];
        this.discountTypes = [{
          id: 1,
          name: 'Percentage discount'
        }, {
          id: 2,
          name: 'Fixed Cart Discount'
        }, {
          id: 3,
          name: 'Fixed Product Discount'
        }];
        this.count = 6;
        this.settings = this.appSettings.settings;
      }

      _createClass(CouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.coupons = _coupons__WEBPACK_IMPORTED_MODULE_3__["coupons"];
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this = this;

          this.appService.getCategories().subscribe(function (data) {
            _this.categories = data;

            _this.categories.shift();
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "openCouponDialog",
        value: function openCouponDialog(data) {
          var _this2 = this;

          var dialogRef = this.dialog.open(_coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CouponDialogComponent"], {
            data: {
              coupon: data,
              stores: this.stores,
              categories: this.categories,
              discountTypes: this.discountTypes
            },
            panelClass: ['theme-dialog'],
            autoFocus: false,
            direction: this.settings.rtl ? 'rtl' : 'ltr'
          });
          dialogRef.afterClosed().subscribe(function (coupon) {
            if (coupon) {
              var index = _this2.coupons.findIndex(function (x) {
                return x.id == coupon.id;
              });

              if (index !== -1) {
                _this2.coupons[index] = coupon;
              } else {
                var last_coupon = _this2.coupons[_this2.coupons.length - 1];
                coupon.id = last_coupon.id + 1;

                _this2.coupons.push(coupon);
              }
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(coupon) {
          var _this3 = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this coupon?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this3.coupons.indexOf(coupon);

              if (index !== -1) {
                _this3.coupons.splice(index, 1);
              }
            }
          });
        }
      }]);

      return CouponsComponent;
    }();

    CouponsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]
      }];
    };

    CouponsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-coupons',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coupons/coupons.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./coupons.component.scss */
      "./src/app/admin/coupons/coupons.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]])], CouponsComponent);
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupons.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/coupons/coupons.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, CouponsModule */

  /***/
  function srcAppAdminCouponsCouponsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsModule", function () {
      return CouponsModule;
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


    var _coupons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coupons.component */
    "./src/app/admin/coupons/coupons.component.ts");
    /* harmony import */


    var _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./coupon-dialog/coupon-dialog.component */
    "./src/app/admin/coupons/coupon-dialog/coupon-dialog.component.ts");

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
      component: _coupons_component__WEBPACK_IMPORTED_MODULE_6__["CouponsComponent"],
      pathMatch: 'full'
    }];

    var CouponsModule = function CouponsModule() {
      _classCallCheck(this, CouponsModule);
    };

    CouponsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_coupons_component__WEBPACK_IMPORTED_MODULE_6__["CouponsComponent"], _coupon_dialog_coupon_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CouponDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]]
    })], CouponsModule);
    /***/
  },

  /***/
  "./src/app/admin/coupons/coupons.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/coupons/coupons.ts ***!
    \******************************************/

  /*! exports provided: coupons */

  /***/
  function srcAppAdminCouponsCouponsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coupons", function () {
      return coupons;
    });

    var coupons = [{
      id: 1,
      title: '10% Off',
      code: '#2491',
      desc: 'lorem ipsum',
      discountType: 1,
      amount: 10,
      expiryDate: new Date(2020, 11, 15),
      allowFreeShipping: false,
      storeId: 1,
      showOnStore: false,
      restriction: {
        minimumSpend: 10,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: ["Keyboard", "Headset"],
        categories: [30, 31, 32]
      },
      limit: {
        perCoupon: 1,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 2,
      title: '20% Off',
      code: '#3274',
      desc: 'lorem ipsum',
      discountType: 2,
      amount: 20,
      expiryDate: new Date(2020, 8, 5),
      allowFreeShipping: false,
      storeId: 2,
      showOnStore: false,
      restriction: {
        minimumSpend: 20,
        maximumSpend: 50,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 3,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 3,
      title: '10% Off',
      code: '#5247',
      desc: 'lorem ipsum',
      discountType: 3,
      amount: 10,
      expiryDate: new Date(2021, 11, 25),
      allowFreeShipping: false,
      storeId: 1,
      showOnStore: false,
      restriction: {
        minimumSpend: 10,
        maximumSpend: 50,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 1,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 4,
      title: '10% Off',
      code: '#9585',
      desc: 'lorem ipsum',
      discountType: 2,
      amount: 10,
      expiryDate: new Date(2020, 4, 22),
      allowFreeShipping: false,
      storeId: 1,
      showOnStore: false,
      restriction: {
        minimumSpend: 10,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 2,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 5,
      title: '5% Off',
      code: '#3258',
      desc: 'lorem ipsum',
      discountType: 2,
      amount: 30,
      expiryDate: new Date(2020, 5, 12),
      allowFreeShipping: false,
      storeId: 2,
      showOnStore: false,
      restriction: {
        minimumSpend: 5,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 4,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 6,
      title: '25% Off',
      code: '#7425',
      desc: 'lorem ipsum',
      discountType: 3,
      amount: 25,
      expiryDate: new Date(2020, 3, 29),
      allowFreeShipping: false,
      storeId: 1,
      showOnStore: false,
      restriction: {
        minimumSpend: 25,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 2,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 7,
      title: '15% Off',
      code: '#5688',
      desc: 'lorem ipsum',
      discountType: 1,
      amount: 20,
      expiryDate: new Date(2020, 12, 24),
      allowFreeShipping: false,
      storeId: 2,
      showOnStore: false,
      restriction: {
        minimumSpend: 15,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 6,
        perItems: 1,
        perUser: 1
      }
    }, {
      id: 8,
      title: '10% Off',
      code: '#5962',
      desc: 'lorem ipsum',
      discountType: 1,
      amount: 30,
      expiryDate: new Date(2020, 8, 12),
      allowFreeShipping: false,
      storeId: 2,
      showOnStore: false,
      restriction: {
        minimumSpend: 10,
        maximumSpend: 30,
        individualUseOnly: true,
        excludeSaleItems: false,
        products: [],
        categories: []
      },
      limit: {
        perCoupon: 3,
        perItems: 1,
        perUser: 1
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=coupons-coupons-module-es5.js.map