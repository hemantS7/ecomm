function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compare-compare-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCompareCompareComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-chip-list *ngIf=\"appService.Data.compareList.length == 0\">\r\n    <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS TO COMPARE.</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card *ngIf=\"appService.Data.compareList?.length > 0\" class=\"p-0\">\r\n\r\n  <div class=\"mat-table compare-table\">\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n          product       \r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-icon-button color=\"accent\" class=\"remove\" (click)=\"remove(product)\"><mat-icon>close</mat-icon></button>\r\n        <img [src]=\"product.images[0].small\" alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        name\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        price\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <b class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        availability\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n          <b class=\"text-muted\">{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        rating\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\"></app-rating>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        description\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span class=\"text-muted lh\">{{product.description}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        color\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-raised-button *ngFor=\"let color of product.color\" [style.background]=\"color\" class=\"color\">&nbsp;</button>              \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        size\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span *ngFor=\"let size of product.size\" class=\"size\">{{size}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        weight\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <span *ngIf=\"product.weight\">{{product.weight}} g</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"clear()\">Clear All</button>\r\n      </div>\r\n      <div class=\"mat-cell\" *ngFor=\"let product of appService.Data.compareList\">\r\n        <button mat-raised-button color=\"primary\" class=\"add\" (click)=\"addToCart(product)\">\r\n          <mat-icon>shopping_cart</mat-icon>Add to cart</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  \r\n</mat-card>";
    /***/
  },

  /***/
  "./src/app/pages/compare/compare.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/compare/compare.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCompareCompareComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".compare-table.mat-table {\n  display: block;\n  overflow-x: auto;\n}\n.compare-table.mat-table .mat-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  min-width: 920px;\n}\n.compare-table.mat-table .mat-row:last-child .mat-cell {\n  padding: 20px 16px;\n}\n.compare-table.mat-table .mat-cell {\n  position: relative;\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n  align-items: center;\n  min-height: 36px;\n  padding: 8px 16px;\n  justify-content: center;\n}\n.compare-table.mat-table .mat-cell img {\n  max-width: 100%;\n}\n.compare-table.mat-table .mat-cell:first-child {\n  width: 100px;\n  flex: unset;\n  justify-content: flex-end;\n  text-transform: capitalize;\n  background: rgba(0, 0, 0, 0.03);\n  font-weight: 500;\n  color: #757575;\n}\n.compare-table.mat-table .mat-cell .product-name {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n}\n.compare-table.mat-table .mat-cell .new-price {\n  font-size: 16px;\n}\n.compare-table.mat-table .mat-cell button.color {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell button.remove {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.compare-table.mat-table .mat-cell button.add .mat-icon {\n  margin-right: 6px;\n}\n.compare-table.mat-table .mat-cell .size {\n  margin-left: 6px;\n}\n.compare-table.mat-table .mat-cell .size:after {\n  content: \",\";\n}\n.compare-table.mat-table .mat-cell .size:last-child:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFZO0VBQ0ksa0JBQUE7QUFFaEI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQ1E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBRVk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQWhCO0FBRVk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBQWhCO0FBRVk7RUFDSSxpQkFBQTtBQUFoQjtBQUdRO0VBQ0ksZ0JBQUE7QUFEWjtBQUVZO0VBQ0ksWUFBQTtBQUFoQjtBQUVZO0VBQ0ksYUFBQTtBQUFoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYXJlLXRhYmxlLm1hdC10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIC5tYXQtcm93eyAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7ICAgICAgICBcclxuICAgICAgICBtaW4td2lkdGg6IDkyMHB4O1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgLm1hdC1jZWxse1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1jZWxse1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBmbGV4OiB1bnNldDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1uYW1le1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uZXctcHJpY2V7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAmLmNvbG9ye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLnJlbW92ZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWRkIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaXple1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJywnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/compare/compare.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/compare/compare.component.ts ***!
    \****************************************************/

  /*! exports provided: CompareComponent */

  /***/
  function srcAppPagesCompareCompareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompareComponent", function () {
      return CompareComponent;
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

    var CompareComponent = /*#__PURE__*/function () {
      function CompareComponent(appService, snackBar) {
        _classCallCheck(this, CompareComponent);

        this.appService = appService;
        this.snackBar = snackBar;
      }

      _createClass(CompareComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.appService.Data.cartList.forEach(function (cartProduct) {
            _this.appService.Data.compareList.forEach(function (product) {
              if (cartProduct.id == product.id) {
                product.cartCount = cartProduct.cartCount;
              }
            });
          });
        }
      }, {
        key: "remove",
        value: function remove(product) {
          var index = this.appService.Data.compareList.indexOf(product);

          if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.appService.Data.compareList.length = 0;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          product.cartCount = product.cartCount + 1;

          if (product.cartCount <= product.availibilityCount) {
            this.appService.addToCart(product);
          } else {
            product.cartCount = product.availibilityCount;
            this.snackBar.open('You can not add more items than available. In stock ' + product.availibilityCount + ' items and you already added ' + product.cartCount + ' item to your cart', '×', {
              panelClass: 'error',
              verticalPosition: 'top',
              duration: 5000
            });
          }
        }
      }]);

      return CompareComponent;
    }();

    CompareComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    CompareComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-compare',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./compare.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./compare.component.scss */
      "./src/app/pages/compare/compare.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], CompareComponent);
    /***/
  },

  /***/
  "./src/app/pages/compare/compare.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/compare/compare.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, CompareModule */

  /***/
  function srcAppPagesCompareCompareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompareModule", function () {
      return CompareModule;
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


    var _compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./compare.component */
    "./src/app/pages/compare/compare.component.ts");

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
      component: _compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"],
      pathMatch: 'full'
    }];

    var CompareModule = function CompareModule() {
      _classCallCheck(this, CompareModule);
    };

    CompareModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [_compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"]]
    })], CompareModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-compare-compare-module-es5.js.map