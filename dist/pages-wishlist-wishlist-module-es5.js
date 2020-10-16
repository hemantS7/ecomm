function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWishlistWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-chip-list *ngIf=\"appService.Data.wishList.length == 0\">\r\n    <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN WISH LIST.</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card *ngIf=\"appService.Data.wishList?.length > 0\" class=\"p-0\">\r\n\r\n  <div class=\"mat-table wishlist-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Product</div>\r\n      <div class=\"mat-header-cell\">Name</div>\r\n      <div class=\"mat-header-cell\">Price</div>\r\n      <div class=\"mat-header-cell\">Availability</div>\r\n      <div class=\"mat-header-cell\">Quantity</div>\r\n      <div class=\"mat-header-cell\">\r\n        <div class=\"px-1\">\r\n          <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let product of appService.Data.wishList\" class=\"mat-row\">\r\n      <div class=\"mat-cell\"><img [src]=\"product.images[0].small\"></div>\r\n      <div class=\"mat-cell\"><a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a></div>\r\n      <div class=\"mat-cell\">${{product.newPrice | number : '1.2-2'}}</div>\r\n      <div class=\"mat-cell\">{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</div>\r\n      <div class=\"mat-cell text-muted\">\r\n        <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getQuantity($event)\"></app-controls>\r\n      </div>\r\n      <div class=\"mat-cell\">\r\n        <div class=\"p-1\">          \r\n          <button mat-mini-fab color=\"primary\" (click)=\"addToCart(product)\" matTooltip=\"Add to cart\">\r\n              <mat-icon>add_shopping_cart</mat-icon>\r\n          </button>\r\n          <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" class=\"remove\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n</mat-card>";
    /***/
  },

  /***/
  "./src/app/pages/wishlist/wishlist.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/wishlist/wishlist.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWishlistWishlistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wishlist-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.wishlist-table.mat-table .mat-row, .wishlist-table.mat-table .mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  min-width: 870px;\n}\n.wishlist-table.mat-table .mat-row {\n  min-height: 100px;\n}\n.wishlist-table.mat-table .mat-cell, .wishlist-table.mat-table .mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n.wishlist-table.mat-table .mat-header-cell {\n  font-size: 14px;\n}\n.wishlist-table.mat-table .mat-cell img {\n  width: 100px;\n}\n.wishlist-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n}\n.wishlist-table.mat-table .mat-cell .remove {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFBSTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNRO0VBQ0ksWUFBQTtBQUNaO0FBQ1E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxnQkFBQTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgLm1hdC1yb3csIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDg3MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yb3d7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGx7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZW1vdmV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/wishlist/wishlist.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
    \******************************************************/

  /*! exports provided: WishlistComponent */

  /***/
  function srcAppPagesWishlistWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistComponent", function () {
      return WishlistComponent;
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


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
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

    var WishlistComponent = /*#__PURE__*/function () {
      function WishlistComponent(appService, snackBar) {
        _classCallCheck(this, WishlistComponent);

        this.appService = appService;
        this.snackBar = snackBar;
        this.quantity = 1;
      }

      _createClass(WishlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.appService.Data.cartList.forEach(function (cartProduct) {
            _this.appService.Data.wishList.forEach(function (product) {
              if (cartProduct.id == product.id) {
                product.cartCount = cartProduct.cartCount;
              }
            });
          });
        }
      }, {
        key: "remove",
        value: function remove(product) {
          var index = this.appService.Data.wishList.indexOf(product);

          if (index !== -1) {
            this.appService.Data.wishList.splice(index, 1);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.appService.Data.wishList.length = 0;
        }
      }, {
        key: "getQuantity",
        value: function getQuantity(val) {
          this.quantity = val.soldQuantity;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var currentProduct = this.appService.Data.cartList.filter(function (item) {
            return item.id == product.id;
          })[0];

          if (currentProduct) {
            if (currentProduct.cartCount + this.quantity <= product.availibilityCount) {
              product.cartCount = currentProduct.cartCount + this.quantity;
            } else {
              this.snackBar.open('You can not add more items than available. In stock ' + product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                duration: 5000
              });
              return false;
            }
          } else {
            product.cartCount = this.quantity;
          }

          this.appService.addToCart(product);
        }
      }]);

      return WishlistComponent;
    }();

    WishlistComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    WishlistComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-wishlist',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./wishlist.component.scss */
      "./src/app/pages/wishlist/wishlist.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], WishlistComponent);
    /***/
  },

  /***/
  "./src/app/pages/wishlist/wishlist.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
    \***************************************************/

  /*! exports provided: routes, WishlistModule */

  /***/
  function srcAppPagesWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistModule", function () {
      return WishlistModule;
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


    var _wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./wishlist.component */
    "./src/app/pages/wishlist/wishlist.component.ts");

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
      component: _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"],
      pathMatch: 'full'
    }];

    var WishlistModule = function WishlistModule() {
      _classCallCheck(this, WishlistModule);
    };

    WishlistModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [_wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"]]
    })], WishlistModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-wishlist-wishlist-module-es5.js.map