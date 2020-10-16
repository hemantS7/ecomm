function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSupportSupportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Support Tickets</h2>   \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\"> \n                <div class=\"mat-header-cell\">Ticket</div>\n                <div class=\"mat-header-cell\">Category</div>\n                <div class=\"mat-header-cell\">Issue</div>\n                <div class=\"mat-header-cell\">Item</div>\n                <div class=\"mat-header-cell\">Customer</div> \n                <div class=\"mat-header-cell\">Store</div>\n                <div class=\"mat-header-cell\">Status</div>  \n                <div class=\"mat-header-cell\">Date</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let ticket of tickets | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\"> \n                <div class=\"mat-cell\">{{ticket.code}}</div> \n                <div class=\"mat-cell\">{{ ( spportCategories | filterById : ticket.supportCategoryId )?.name }}</div> \n                <div class=\"mat-cell\">{{ticket.issue}}</div>\n                <div class=\"mat-cell\">Order {{ticket.order}}</div>\n                <div class=\"mat-cell\">{{ticket.customer}}</div> \n                <div class=\"mat-cell\">{{ ( stores | filterById : ticket.storeId )?.name }}</div> \n                <div class=\"mat-cell\">{{ ( statuses | filterById : ticket.statusId )?.name}}</div> \n                <div class=\"mat-cell\">{{ticket.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"Reply\">\n                            <mat-icon>reply_all</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(ticket)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"tickets.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/support/support.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admin/support/support.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSupportSupportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/support/support.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/support/support.component.ts ***!
    \****************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function srcAppAdminSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
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


    var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");

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

    var SupportComponent = /*#__PURE__*/function () {
      function SupportComponent(dialog) {
        _classCallCheck(this, SupportComponent);

        this.dialog = dialog;
        this.tickets = [{
          id: 1,
          statusId: 1,
          code: '#000625',
          supportCategoryId: 1,
          issue: 'lorem ipsum',
          order: '#1556',
          customer: 'Andy Warhol',
          storeId: 1,
          date: new Date(2020, 1, 15, 10, 45)
        }, {
          id: 2,
          statusId: 2,
          code: '#002350',
          supportCategoryId: 2,
          issue: 'lorem ipsum',
          order: '#5214',
          customer: 'Luisa Styles',
          storeId: 2,
          date: new Date(2020, 2, 8, 22, 12)
        }, {
          id: 3,
          statusId: 3,
          code: '#007852',
          supportCategoryId: 3,
          issue: 'lorem ipsum',
          order: '#4285',
          customer: 'Michael Blair',
          storeId: 2,
          date: new Date(2020, 3, 29, 14, 30)
        }, {
          id: 4,
          statusId: 4,
          code: '#009621',
          supportCategoryId: 4,
          issue: 'lorem ipsum',
          order: '#3658',
          customer: 'Julia Aniston',
          storeId: 1,
          date: new Date(2020, 4, 18, 8, 20)
        }];
        this.statuses = [{
          id: 1,
          name: 'In Progress'
        }, {
          id: 2,
          name: 'Pending'
        }, {
          id: 3,
          name: 'Solved'
        }, {
          id: 4,
          name: 'Closed'
        }];
        this.spportCategories = [{
          id: 1,
          name: 'Pre-Sale Question'
        }, {
          id: 2,
          name: 'Order Question'
        }, {
          id: 3,
          name: 'Shipping'
        }, {
          id: 4,
          name: 'Product Availability'
        }];
        this.stores = [{
          id: 1,
          name: 'Store 1'
        }, {
          id: 2,
          name: 'Store 2'
        }];
        this.count = 6;
      }

      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "remove",
        value: function remove(ticket) {
          var _this = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this ticket?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this.tickets.indexOf(ticket);

              if (index !== -1) {
                _this.tickets.splice(index, 1);
              }
            }
          });
        }
      }]);

      return SupportComponent;
    }();

    SupportComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }];
    };

    SupportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-support',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./support.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/support/support.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./support.component.scss */
      "./src/app/admin/support/support.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])], SupportComponent);
    /***/
  },

  /***/
  "./src/app/admin/support/support.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/support/support.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, SupportModule */

  /***/
  function srcAppAdminSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
      return SupportModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support.component */
    "./src/app/admin/support/support.component.ts");

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
      component: _support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"],
      pathMatch: 'full'
    }];

    var SupportModule = function SupportModule() {
      _classCallCheck(this, SupportModule);
    };

    SupportModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]]
    })], SupportModule);
    /***/
  }
}]);
//# sourceMappingURL=support-support-module-es5.js.map