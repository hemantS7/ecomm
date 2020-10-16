function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reviews/reviews.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reviews/reviews.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminReviewsReviewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Store Reviews</h2>   \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\"> \n                <div class=\"mat-header-cell status\"></div> \n                <div class=\"mat-header-cell image\">Image</div>\n                <div class=\"mat-header-cell\">Author</div>\n                <div class=\"mat-header-cell\">Comment</div>\n                <div class=\"mat-header-cell ratings\">Rating</div> \n                <div class=\"mat-header-cell\">Store</div> \n                <div class=\"mat-header-cell\">Date</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let review of reviews | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\"> \n                <div class=\"mat-cell status\">\n                    <mat-icon [color]=\"(review.statusId == 1) ? 'primary' : 'warn'\" [matTooltip]=\"( statuses | filterById : review.statusId )?.name\">{{ (review.statusId == 1) ? 'check_circle' : 'access_time' }}</mat-icon>\n                </div> \n                <div class=\"mat-cell image\">\n                    <img [src]=\"review.image\" alt=\"\" width=\"50\">\n                </div> \n                <div class=\"mat-cell\">{{review.author}}</div>\n                <div class=\"mat-cell\">{{review.comment}}</div>\n                <div class=\"mat-cell ratings\">\n                    <app-rating [ratingsCount]=\"review?.ratingsCount\" [ratingsValue]=\"review?.ratingsValue\" [showText]=\"false\" [direction]=\"'row'\"></app-rating>\n                </div> \n                <div class=\"mat-cell\">{{ ( stores | filterById : review.storeId )?.name }}</div>  \n                <div class=\"mat-cell\">{{review.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">  \n                        <button *ngIf=\"review.statusId == 1\" mat-mini-fab color=\"primary\" matTooltip=\"UnApprove\" (click)=\"unApprove(review)\">\n                            <mat-icon>undo</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(review)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"reviews.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/reviews/reviews.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admin/reviews/reviews.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminReviewsReviewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/reviews/reviews.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/reviews/reviews.component.ts ***!
    \****************************************************/

  /*! exports provided: ReviewsComponent */

  /***/
  function srcAppAdminReviewsReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function () {
      return ReviewsComponent;
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

    var ReviewsComponent = /*#__PURE__*/function () {
      function ReviewsComponent(dialog) {
        _classCallCheck(this, ReviewsComponent);

        this.dialog = dialog;
        this.reviews = [{
          id: 1,
          statusId: 1,
          image: 'assets/images/profile/michael.jpg',
          author: 'Michael Blair',
          comment: 'lorem ipsum',
          ratingsCount: 4,
          ratingsValue: 350,
          storeId: 1,
          date: new Date(2020, 1, 15, 14, 30)
        }, {
          id: 2,
          statusId: 2,
          image: 'assets/images/profile/tereza.jpg',
          author: 'Tereza Stiles',
          comment: 'lorem ipsum',
          ratingsCount: 3,
          ratingsValue: 290,
          storeId: 2,
          date: new Date(2020, 2, 5, 22, 20)
        }, {
          id: 3,
          statusId: 2,
          image: 'assets/images/profile/adam.jpg',
          author: 'Adam Sandler',
          comment: 'lorem ipsum',
          ratingsCount: 5,
          ratingsValue: 450,
          storeId: 1,
          date: new Date(2020, 3, 29, 13, 15)
        }, {
          id: 4,
          statusId: 1,
          image: 'assets/images/profile/julia.jpg',
          author: 'Julia Aniston',
          comment: 'lorem ipsum',
          ratingsCount: 4,
          ratingsValue: 350,
          storeId: 2,
          date: new Date(2020, 4, 12, 11, 50)
        }, {
          id: 5,
          statusId: 2,
          image: 'assets/images/profile/bruno.jpg',
          author: 'Bruno Vespa',
          comment: 'lorem ipsum',
          ratingsCount: 3,
          ratingsValue: 300,
          storeId: 2,
          date: new Date(2020, 5, 5, 16, 25)
        }, {
          id: 6,
          statusId: 1,
          image: 'assets/images/profile/ashley.jpg',
          author: 'Ashley Ahlberg',
          comment: 'lorem ipsum',
          ratingsCount: 5,
          ratingsValue: 300,
          storeId: 1,
          date: new Date(2020, 6, 18, 12, 30)
        }, {
          id: 7,
          statusId: 1,
          image: 'assets/images/avatars/avatar-5.png',
          author: 'Michelle Ormond',
          comment: 'lorem ipsum',
          ratingsCount: 4,
          ratingsValue: 300,
          storeId: 1,
          date: new Date(2020, 6, 28, 17, 23)
        }];
        this.statuses = [{
          id: 1,
          name: 'Approved'
        }, {
          id: 2,
          name: 'Pending'
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

      _createClass(ReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "unApprove",
        value: function unApprove(review) {
          var index = this.reviews.findIndex(function (x) {
            return x.id == review.id;
          });

          if (index !== -1) {
            review.statusId = 2;
            this.reviews[index] = review;
          }
        }
      }, {
        key: "remove",
        value: function remove(review) {
          var _this = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this review?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this.reviews.indexOf(review);

              if (index !== -1) {
                _this.reviews.splice(index, 1);
              }
            }
          });
        }
      }]);

      return ReviewsComponent;
    }();

    ReviewsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }];
    };

    ReviewsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-reviews',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./reviews.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reviews/reviews.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./reviews.component.scss */
      "./src/app/admin/reviews/reviews.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])], ReviewsComponent);
    /***/
  },

  /***/
  "./src/app/admin/reviews/reviews.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/reviews/reviews.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, ReviewsModule */

  /***/
  function srcAppAdminReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsModule", function () {
      return ReviewsModule;
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


    var _reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reviews.component */
    "./src/app/admin/reviews/reviews.component.ts");

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
      component: _reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"],
      pathMatch: 'full'
    }];

    var ReviewsModule = function ReviewsModule() {
      _classCallCheck(this, ReviewsModule);
    };

    ReviewsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]]
    })], ReviewsModule);
    /***/
  }
}]);
//# sourceMappingURL=reviews-reviews-module-es5.js.map