(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-brands-brands-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brand/brand.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brand/brand.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        \r\n        <mat-accordion displayMode=\"flat\" multi=\"true\">\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Categories</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Price</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                    <span>From: <b>${{priceFrom}}</b></span>\r\n                    <span>To: <b>${{priceTo}}</b></span>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n                    <mat-slider color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n                    <mat-slider color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Color</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let color of colors\" [style.background]=\"color\">&nbsp;</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Size</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let size of sizes\">{{size}}</button>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Condition</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"column\">\r\n                    <mat-checkbox color=\"primary\">New</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Used</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Not Specified</mat-checkbox>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Now starting at $1379</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                   <a [routerLink]=\"['/products/electronics']\"><img src=\"assets/images/products/probook/2-medium.png\" alt=\"\" class=\"mw-100\"></a>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.discount\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                        <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                    <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                            <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                        </div>\r\n                        <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                    </div>                            \r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div  *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                                <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                </div>\r\n                                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                            </div>                            \r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\"> \r\n                <mat-card class=\"p-0 text-center\">           \r\n                    <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n    <h3 class=\"py-1 text-center\">We've Got The Brands You're Looking For</h3>    \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-form-field  fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"w-100 brand-search\">\r\n            <input matInput placeholder=\"Search For Brands...\" [(ngModel)]=\"searchText\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\" appearance=\"legacy\" value=\"all\" class=\"letters mt-2\">\r\n            <mat-button-toggle value=\"all\" class=\"letter\">\r\n              Show All Brands\r\n            </mat-button-toggle>\r\n            <mat-button-toggle *ngFor=\"let letter of letters\" [value]=\"letter\" class=\"letter\">\r\n              {{letter}}\r\n            </mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"brands-container\">\r\n    <div class=\"brand-block text-center\" *ngFor=\"let brand of brands | brandSearchPipe : searchText  | filterBrands: group.value\">\r\n        <a [routerLink]=\"['/brands', brand.name]\" class=\"brand mat-elevation-z3\">\r\n            <img [src]=\"brand.image\">\r\n        </a>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/brands/brand/brand.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/brands/brand/brand.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmRzL2JyYW5kL2JyYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUZJO0VBQ0ksa0JBQUE7QUFJUjtBQUFBO0VBQ0ksZ0JBQUE7QUFHSjtBQUZJO0VBQ0ksWUFBQTtBQUlSO0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUFFUjtBQUdJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5kcy9icmFuZC9icmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/brands/brand/brand.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/brands/brand/brand.component.ts ***!
  \*******************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let BrandComponent = class BrandComponent {
    constructor(appSettings, activatedRoute, appService, dialog, router) {
        this.appSettings = appSettings;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.products = [];
        this.brands = [];
        this.priceFrom = 750;
        this.priceTo = 1599;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#000000"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.sub = this.activatedRoute.params.subscribe(params => {
            // console.log(params['name']);
        });
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
        this.getCategories();
        this.getAllProducts();
    }
    getAllProducts() {
        this.appService.getProducts("brand").subscribe(data => {
            this.products = data;
            //for show more product  
            for (var index = 0; index < 3; index++) {
                this.products = this.products.concat(this.products);
            }
        });
    }
    getCategories() {
        if (this.appService.Data.categories.length == 0) {
            this.appService.getCategories().subscribe(data => {
                this.categories = data;
                this.appService.Data.categories = data;
            });
        }
        else {
            this.categories = this.appService.Data.categories;
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }
    changeCount(count) {
        this.count = count;
        this.getAllProducts();
    }
    changeSorting(sort) {
        this.sort = sort;
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
            direction: (this.settings.rtl) ? 'rtl' : 'ltr'
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.getAllProducts();
        window.scrollTo(0, 0);
    }
    onChangeCategory(event) {
        if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
        }
    }
};
BrandComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
BrandComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav', { static: true },] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
BrandComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-brand',
        template: __importDefault(__webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brand/brand.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./brand.component.scss */ "./src/app/pages/brands/brand/brand.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], BrandComponent);



/***/ }),

/***/ "./src/app/pages/brands/brands.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/brands/brands.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letters {\n  display: inline-block !important;\n  white-space: unset !important;\n  background: #fff;\n}\n\n.letter {\n  display: inline-block !important;\n}\n\n.brand-search.mat-form-field {\n  text-align: center;\n}\n\n.brands-container {\n  -moz-column-count: 1;\n       column-count: 1;\n  -moz-column-gap: 16px;\n       column-gap: 16px;\n  margin-top: 30px;\n}\n\n.brands-container .brand-block {\n  display: block;\n}\n\n.brands-container .brand-block .brand {\n  background-color: #fff;\n  padding: 16px;\n  display: inline-block;\n  margin: 8px 0;\n}\n\n.brands-container .brand-block .brand img {\n  max-width: 100%;\n}\n\n@media only screen and (min-width: 320px) {\n  .brands-container {\n    -moz-column-count: 2;\n    column-count: 2;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .brands-container {\n    -moz-column-count: 3;\n    column-count: 3;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .brands-container {\n    -moz-column-count: 4;\n    column-count: 4;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .brands-container {\n    -moz-column-count: 5;\n    column-count: 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBRUE7RUFDSSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFEUTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUdaOztBQUZZO0VBQ0ksZUFBQTtBQUloQjs7QUFFQTtFQUNJO0lBQ0ksb0JBQUE7SUFFQSxlQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksb0JBQUE7SUFFQSxlQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksb0JBQUE7SUFFQSxlQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksb0JBQUE7SUFFQSxlQUFBO0VBSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0dGVyc3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5sZXR0ZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyYW5kLXNlYXJjaC5tYXQtZm9ybS1maWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5icmFuZHMtY29udGFpbmVyIHtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgLmJyYW5kLWJsb2Nre1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC5icmFuZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgIC5icmFuZHMtY29udGFpbmVyIHtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcclxuICAgICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5icmFuZHMtY29udGFpbmVyIHtcclxuICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogMztcclxuICAgICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICAuYnJhbmRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XHJcbiAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgLmJyYW5kcy1jb250YWluZXIge1xyXG4gICAgICAgIC1tb3otY29sdW1uLWNvdW50OiA1O1xyXG4gICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA1O1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/brands/brands.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/brands/brands.component.ts ***!
  \**************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let BrandsComponent = class BrandsComponent {
    constructor(appService) {
        this.appService = appService;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
        this.brands = [];
    }
    ngOnInit() {
        this.brands = this.appService.getBrands();
        // this.brands.sort((a, b)=>{
        //   if(a.name < b.name) return -1;
        //   if(a.name > b.name) return 1;
        //   return 0;
        // });
    }
};
BrandsComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
BrandsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-brands',
        template: __importDefault(__webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./brands.component.scss */ "./src/app/pages/brands/brands.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], BrandsComponent);



/***/ }),

/***/ "./src/app/pages/brands/brands.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.module.ts ***!
  \***********************************************/
/*! exports provided: routes, BrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands.component */ "./src/app/pages/brands/brands.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/pages/brands/brand/brand.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const routes = [
    { path: '', component: _brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"], pathMatch: 'full' },
    { path: ':name', component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__["BrandComponent"] }
];
let BrandsModule = class BrandsModule {
};
BrandsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ],
        declarations: [
            _brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"],
            _brand_brand_component__WEBPACK_IMPORTED_MODULE_8__["BrandComponent"]
        ]
    })
], BrandsModule);



/***/ })

}]);
//# sourceMappingURL=pages-brands-brands-module-es2015.js.map