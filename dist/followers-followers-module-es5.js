function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followers-followers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/followers/followers.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/followers/followers.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFollowersFollowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Followers List</h2>   \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">  \n                <div class=\"mat-header-cell image\">Image</div>\n                <div class=\"mat-header-cell\">Name</div> \n                <div class=\"mat-header-cell\">Store</div>  \n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let follower of followers | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">  \n                <div class=\"mat-cell image\">\n                    <img [src]=\"follower.image\" alt=\"\" width=\"50\">\n                </div> \n                <div class=\"mat-cell\">{{follower.name}}</div>  \n                <div class=\"mat-cell\">{{ ( stores | filterById : follower.storeId )?.name }}</div>      \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\"> \n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(follower)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"followers.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/followers/followers.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/followers/followers.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFollowersFollowersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZvbGxvd2Vycy9mb2xsb3dlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/followers/followers.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/followers/followers.component.ts ***!
    \********************************************************/

  /*! exports provided: FollowersComponent */

  /***/
  function srcAppAdminFollowersFollowersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersComponent", function () {
      return FollowersComponent;
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

    var FollowersComponent = /*#__PURE__*/function () {
      function FollowersComponent(dialog) {
        _classCallCheck(this, FollowersComponent);

        this.dialog = dialog;
        this.followers = [{
          id: 1,
          image: 'assets/images/profile/michael.jpg',
          name: 'Michael Blair',
          storeId: 1
        }, {
          id: 2,
          image: 'assets/images/profile/tereza.jpg',
          name: 'Tereza Stiles',
          storeId: 2
        }, {
          id: 3,
          image: 'assets/images/profile/adam.jpg',
          name: 'Adam Sandler',
          storeId: 1
        }, {
          id: 4,
          image: 'assets/images/profile/julia.jpg',
          name: 'Julia Aniston',
          storeId: 2
        }, {
          id: 5,
          image: 'assets/images/profile/bruno.jpg',
          name: 'Bruno Vespa',
          storeId: 2
        }, {
          id: 6,
          image: 'assets/images/profile/ashley.jpg',
          name: 'Ashley Ahlberg',
          storeId: 1
        }, {
          id: 7,
          image: 'assets/images/avatars/avatar-5.png',
          name: 'Michelle Ormond',
          storeId: 1
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

      _createClass(FollowersComponent, [{
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
        value: function remove(follower) {
          var _this = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this follower?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this.followers.indexOf(follower);

              if (index !== -1) {
                _this.followers.splice(index, 1);
              }
            }
          });
        }
      }]);

      return FollowersComponent;
    }();

    FollowersComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }];
    };

    FollowersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-followers',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./followers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/followers/followers.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./followers.component.scss */
      "./src/app/admin/followers/followers.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])], FollowersComponent);
    /***/
  },

  /***/
  "./src/app/admin/followers/followers.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/followers/followers.module.ts ***!
    \*****************************************************/

  /*! exports provided: routes, FollowersModule */

  /***/
  function srcAppAdminFollowersFollowersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersModule", function () {
      return FollowersModule;
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


    var _followers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./followers.component */
    "./src/app/admin/followers/followers.component.ts");

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
      component: _followers_component__WEBPACK_IMPORTED_MODULE_5__["FollowersComponent"],
      pathMatch: 'full'
    }];

    var FollowersModule = function FollowersModule() {
      _classCallCheck(this, FollowersModule);
    };

    FollowersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_followers_component__WEBPACK_IMPORTED_MODULE_5__["FollowersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]]
    })], FollowersModule);
    /***/
  }
}]);
//# sourceMappingURL=followers-followers-module-es5.js.map