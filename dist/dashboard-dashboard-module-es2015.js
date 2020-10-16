(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/analytics/analytics.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/analytics/analytics.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center\">                \n        <mat-card-subtitle><h2>Analytics</h2></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <div class=\"w-100 h-300p\" #resizedDiv>\n            <ngx-charts-line-chart\n                [scheme]=\"colorScheme\"\n                [results]=\"analytics\"\n                [gradient]=\"gradient\"\n                [xAxis]=\"showXAxis\"\n                [yAxis]=\"showYAxis\"\n                [legend]=\"showLegend\"\n                [showXAxisLabel]=\"showXAxisLabel\"\n                [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\"\n                [yAxisLabel]=\"yAxisLabel\"\n                [autoScale]=\"autoScale\"\n                [roundDomains]=\"roundDomains\"\n                (select)=\"onSelect($event)\">\n            </ngx-charts-line-chart>             \n        </div>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-tiles></app-tiles>\n<app-info-cards></app-info-cards>\n\n<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"45\" class=\"p-1\"> \n        <app-montly-sales></app-montly-sales>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"55\" class=\"p-1\"> \n        <app-latest-orders></app-latest-orders>\n    </div>\n</div>\n\n<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"70\" class=\"p-1\"> \n        <app-analytics></app-analytics>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\">\n        <div fxFlex=\"100\" class=\"p-1\">\n            <mat-card>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\n                    <mat-icon class=\"mat-icon-xlg\">monetization_on</mat-icon>\n                    <div>\n                        <h1>$ 35700</h1>\n                        <h2 class=\"fw-400\">Profit</h2>\n                    </div>                \n                </div>            \n            </mat-card>\n        </div>\n        <div fxFlex=\"100\" class=\"p-1\">\n            <mat-card>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\n                    <mat-icon class=\"mat-icon-xlg\">cloud_download</mat-icon>\n                    <div>\n                        <h1>187230</h1>\n                        <h2 class=\"fw-400\">Downloads</h2>\n                    </div>                \n                </div>            \n            </mat-card>\n        </div>       \n        <div fxFlex=\"100\" class=\"p-1\">\n            <mat-card>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\n                    <mat-icon class=\"mat-icon-xlg\">shopping_cart</mat-icon>\n                    <div>\n                        <h1>78,25 %</h1>\n                        <h2 class=\"fw-400\">Sales</h2>\n                    </div>                \n                </div>            \n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/info-cards/info-cards.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/info-cards/info-cards.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" #resizedDiv>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-1\"> \n        <mat-card class=\"p-0 gradient-purple\">\n            <div class=\"p-1\" fxLayoutAlign=\"space-between center\">\n                <p>Products profit</p>\n                <div fxLayoutAlign=\"center center\">\n                    <mat-icon class=\"icon-sm px-1\">trending_up</mat-icon>\n                    <span>38%</span>\n                </div>\n            </div>         \n            <div class=\"w-100 h-100p\">\n                <ngx-charts-bar-vertical\n                    [scheme]=\"colorScheme\"\n                    [results]=\"products\"                      \n                    (select)=\"onSelect($event)\">\n                </ngx-charts-bar-vertical>                   \n            </div>\n        </mat-card>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-1\"> \n        <mat-card class=\"p-0 gradient-teal\">\n            <div class=\"p-1\" fxLayoutAlign=\"space-between center\">\n                <p>Total orders</p>\n                <div fxLayoutAlign=\"center center\">\n                    <mat-icon class=\"icon-sm px-1\">trending_up</mat-icon>\n                    <span>16%</span>\n                </div>\n            </div>          \n            <div class=\"w-100 h-100p\">\n                <ngx-charts-line-chart\n                    [scheme]=\"colorScheme\"\n                    [results]=\"orders\"                      \n                    [autoScale]=\"autoScale\"\n                    (select)=\"onSelect($event)\">\n                </ngx-charts-line-chart>                  \n            </div>\n        </mat-card>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-1\"> \n        <mat-card class=\"p-0 gradient-indigo\">\n            <div class=\"p-1\" fxLayoutAlign=\"space-between center\">\n                <p>Refunds</p>\n                <div fxLayoutAlign=\"center center\">\n                    <mat-icon class=\"icon-sm px-1\">trending_down</mat-icon>\n                    <span>-11%</span>\n                </div>\n            </div>          \n            <div class=\"w-100 h-100p\">\n                <ngx-charts-bar-vertical\n                    [scheme]=\"colorScheme\"\n                    [results]=\"refunds\"                      \n                    (select)=\"onSelect($event)\">\n                </ngx-charts-bar-vertical>                     \n            </div>\n        </mat-card>\n    </div>    \n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-1\"> \n        <mat-card class=\"p-0 gradient-amber\">\n            <div class=\"p-1\" fxLayoutAlign=\"space-between center\">\n                <p>Customers</p>\n                <div fxLayoutAlign=\"center center\">\n                    <mat-icon class=\"icon-sm px-1\">trending_up</mat-icon>\n                    <span>17%</span>\n                </div>\n            </div>         \n            <div class=\"w-100 h-100p\">\n                <ngx-charts-line-chart\n                    [scheme]=\"colorScheme\"\n                    [results]=\"customers\"                      \n                    [autoScale]=\"autoScale\"\n                    (select)=\"onSelect($event)\">\n                </ngx-charts-line-chart>                    \n            </div>\n        </mat-card>\n    </div>    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/latest-orders/latest-orders.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/latest-orders/latest-orders.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"p-0\">\n    <div class=\"mat-table admin-table header-sm truncated\">\n        <div class=\"mat-header-row\">\n            <div class=\"mat-header-cell\">Order</div>\n            <div class=\"mat-header-cell\">Date</div>\n            <div class=\"mat-header-cell\">Status</div>\n            <div class=\"mat-header-cell\">Total</div>\n            <div class=\"mat-header-cell\"></div>\n        </div>\n        <div *ngFor=\"let order of orders\" class=\"mat-row\">\n            <div class=\"mat-cell\"><span class=\"order\">{{order.number}}</span></div>\n            <div class=\"mat-cell\">{{order.date}}</div>\n            <div class=\"mat-cell\">{{order.status}}</div>\n            <div class=\"mat-cell\">{{order.total}}</div>     \n            <div class=\"mat-cell\">\n                <div class=\"p-1 actions\">          \n                    <button mat-mini-fab color=\"primary\" matTooltip=\"View\">\n                        <mat-icon>remove_red_eye</mat-icon>\n                    </button>\n                    <button *ngIf=\"order.invoice\" mat-mini-fab color=\"warn\" matTooltip=\"View invoice\" class=\"btn-invoice\">\n                        <mat-icon>receipt</mat-icon>\n                    </button>\n                </div>\n            </div>      \n        </div>\n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/montly-sales/montly-sales.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/montly-sales/montly-sales.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center\">                \n        <mat-card-subtitle><h2>Montly Sales</h2></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">Explode Slices</mat-checkbox>\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">Show Labels</mat-checkbox>\n        </div>\n        <div class=\"w-100 h-300p\" #resizedDiv>\n            <ngx-charts-pie-chart\n                [scheme]=\"colorScheme\"\n                [results]=\"data\"\n                [legend]=\"showLegend\"\n                [explodeSlices]=\"explodeSlices\"\n                [labels]=\"showLabels\"\n                [doughnut]=\"doughnut\"\n                [gradient]=\"gradient\"\n                (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart>   \n        </div>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/tiles/tiles.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/tiles/tiles.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">        \n        <mat-card class=\"gradient-green tile p-1\"> \n            <mat-icon>monetization_on</mat-icon> \n            <h2>$33500</h2>         \n            <p>profit</p>            \n        </mat-card>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">        \n        <mat-card class=\"gradient-red tile p-1\"> \n            <mat-icon>thumb_up_alt</mat-icon> \n            <h2>5300</h2>         \n            <p>likes</p>            \n        </mat-card>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">\n        <mat-card class=\"gradient-orange tile p-1\">\n            <mat-icon>group</mat-icon> \n            <h2>14280</h2>         \n            <p>users</p> \n        </mat-card>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">\n        <mat-card class=\"gradient-pink tile p-1\">\n            <mat-icon>shopping_cart</mat-icon> \n            <h2>7520</h2>         \n            <p>orders</p> \n        </mat-card>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">\n        <mat-card class=\"gradient-gray tile p-1\">\n            <mat-icon>pie_chart</mat-icon> \n            <h2>$2700</h2>         \n            <p>tax</p> \n        </mat-card>\n    </div>  \n    <div fxFlex=\"50\" fxFlex.xl=\"16.6\" fxFlex.lg=\"16.6\" fxFlex.md=\"33.3\" fxFlex.sm=\"33.3\" class=\"p-1\">\n        <mat-card class=\"gradient-brown tile p-1\">\n            <mat-icon>save_alt</mat-icon> \n            <h2>12700</h2>         \n            <p>downloads</p> \n        </mat-card>\n    </div>      \n</div>");

/***/ }),

/***/ "./src/app/admin/dashboard/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/dashboard/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/admin/dashboard/dashboard.data.ts");
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


let AnalyticsComponent = class AnalyticsComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Profit';
        this.colorScheme = {
            domain: ['#283593', '#039BE5', '#FF5252']
        };
        this.autoScale = true;
        this.roundDomains = true;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.analytics = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["analytics"];
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            this.analytics = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["analytics"]];
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
};
AnalyticsComponent.ctorParameters = () => [];
AnalyticsComponent.propDecorators = {
    resizedDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['resizedDiv',] }]
};
AnalyticsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-analytics',
        template: __importDefault(__webpack_require__(/*! raw-loader!./analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/analytics/analytics.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.data.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.data.ts ***!
  \***************************************************/
/*! exports provided: orders, products, customers, refunds, montly_sales, analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders", function() { return orders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customers", function() { return customers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refunds", function() { return refunds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "montly_sales", function() { return montly_sales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analytics", function() { return analytics; });
const orders = [
    {
        name: 'Orders',
        series: [
            {
                name: "1980",
                value: 21632
            }
        ]
    }
];
const products = [
    {
        "name": "Product-1",
        "value": 69400
    },
    {
        "name": "Product-2",
        "value": 59400
    },
    {
        "name": "Product-3",
        "value": 82400
    },
    {
        "name": "Product-4",
        "value": 73400
    },
    {
        "name": "Product-5",
        "value": 25400
    },
    {
        "name": "Product-6",
        "value": 23400
    },
    {
        "name": "Product-7",
        "value": 49300
    },
    {
        "name": "Product-8",
        "value": 55400
    },
    {
        "name": "Product-9",
        "value": 37400
    },
    {
        "name": "Product-10",
        "value": 65220
    },
    {
        "name": "Product-11",
        "value": 79400
    },
    {
        "name": "Product-12",
        "value": 58400
    },
    {
        "name": "Product-13",
        "value": 41400
    },
    {
        "name": "Product-14",
        "value": 37400
    },
    {
        "name": "Product-15",
        "value": 33700
    },
    {
        "name": "Product-16",
        "value": 42700
    },
    {
        "name": "Product-17",
        "value": 52700
    },
    {
        "name": "Product-18",
        "value": 62700
    }
];
const customers = [
    {
        name: 'Customers',
        series: [
            {
                name: "2000",
                value: 34502
            }
        ]
    }
];
const refunds = [
    {
        "name": "Item-1",
        "value": 23701
    },
    {
        "name": "Item-2",
        "value": 33701
    },
    {
        "name": "Item-3",
        "value": 63701
    },
    {
        "name": "Item-4",
        "value": 52701
    },
    {
        "name": "Item-5",
        "value": 73701
    },
    {
        "name": "Item-6",
        "value": 43701
    },
    {
        "name": "Item-7",
        "value": 83701
    },
    {
        "name": "Item-8",
        "value": 29701
    },
    {
        "name": "Item-9",
        "value": 69701
    },
    {
        "name": "Item-10",
        "value": 58701
    },
    {
        "name": "Item-11",
        "value": 65701
    },
    {
        "name": "Item-12",
        "value": 47701
    },
    {
        "name": "Item-13",
        "value": 41701
    },
    {
        "name": "Item-14",
        "value": 25701
    },
    {
        "name": "Item-15",
        "value": 35701
    }
];
const montly_sales = [
    {
        "name": "Offline Stores",
        "value": 178
    },
    {
        "name": "Digital Stores",
        "value": 340
    },
    {
        "name": "Others",
        "value": 280
    }
];
const analytics = [
    {
        name: 'Company 1',
        series: [
            {
                name: '2010',
                value: 31632
            },
            {
                name: '2011',
                value: 42589
            },
            {
                name: '2012',
                value: 52458
            },
            {
                name: '2013',
                value: 69632
            },
            {
                name: '2014',
                value: 52305
            },
            {
                name: '2015',
                value: 72412
            },
            {
                name: '2016',
                value: 66285
            },
            {
                name: '2017',
                value: 49855
            }
        ]
    },
    {
        name: 'Company 2',
        series: [
            {
                name: '2010',
                value: 61632
            },
            {
                name: '2011',
                value: 68589
            },
            {
                name: '2012',
                value: 55458
            },
            {
                name: '2013',
                value: 62632
            },
            {
                name: '2014',
                value: 38305
            },
            {
                name: '2015',
                value: 41412
            },
            {
                name: '2016',
                value: 32285
            },
            {
                name: '2017',
                value: 31855
            }
        ]
    },
    {
        name: 'Company 3',
        series: [
            {
                name: '2010',
                value: 55632
            },
            {
                name: '2011',
                value: 63589
            },
            {
                name: '2012',
                value: 70458
            },
            {
                name: '2013',
                value: 79632
            },
            {
                name: '2014',
                value: 59305
            },
            {
                name: '2015',
                value: 56412
            },
            {
                name: '2016',
                value: 49285
            },
            {
                name: '2017',
                value: 38855
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiles/tiles.component */ "./src/app/admin/dashboard/tiles/tiles.component.ts");
/* harmony import */ var _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-cards/info-cards.component */ "./src/app/admin/dashboard/info-cards/info-cards.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/admin/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./montly-sales/montly-sales.component */ "./src/app/admin/dashboard/montly-sales/montly-sales.component.ts");
/* harmony import */ var _latest_orders_latest_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./latest-orders/latest-orders.component */ "./src/app/admin/dashboard/latest-orders/latest-orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], pathMatch: 'full' }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_6__["TilesComponent"],
            _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_7__["InfoCardsComponent"],
            _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"],
            _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_9__["MontlySalesComponent"],
            _latest_orders_latest_orders_component__WEBPACK_IMPORTED_MODULE_10__["LatestOrdersComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/admin/dashboard/info-cards/info-cards.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/info-cards/info-cards.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-chip.info-chip {\n  padding: 4px 8px;\n}\n.mat-chip.info-chip .mat-icon {\n  margin-right: 4px;\n}\n.h-100p {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2luZm8tY2FyZHMvaW5mby1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFDQTtFQUNJLGFBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9pbmZvLWNhcmRzL2luZm8tY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNoaXAuaW5mby1jaGlwe1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxufVxyXG4uaC0xMDBwe1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/dashboard/info-cards/info-cards.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/info-cards/info-cards.component.ts ***!
  \********************************************************************/
/*! exports provided: InfoCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardsComponent", function() { return InfoCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/admin/dashboard/dashboard.data.ts");
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


let InfoCardsComponent = class InfoCardsComponent {
    constructor() {
        this.colorScheme = {
            domain: ['rgba(255,255,255,0.8)']
        };
        this.autoScale = true;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.orders = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["orders"];
        this.products = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["products"];
        this.customers = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["customers"];
        this.refunds = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["refunds"];
        this.orders = this.addRandomValue('orders');
        this.customers = this.addRandomValue('customers');
    }
    onSelect(event) {
        console.log(event);
    }
    addRandomValue(param) {
        switch (param) {
            case 'orders':
                for (let i = 1; i < 30; i++) {
                    this.orders[0].series.push({ "name": 1980 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.orders;
            case 'customers':
                for (let i = 1; i < 15; i++) {
                    this.customers[0].series.push({ "name": 2000 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.customers;
            default:
                return this.orders;
        }
    }
    ngOnDestroy() {
        this.orders[0].series.length = 0;
        this.customers[0].series.length = 0;
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.orders = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["orders"]]);
            setTimeout(() => this.products = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["products"]]);
            setTimeout(() => this.customers = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["customers"]]);
            setTimeout(() => this.refunds = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["refunds"]]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
};
InfoCardsComponent.ctorParameters = () => [];
InfoCardsComponent.propDecorators = {
    resizedDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['resizedDiv',] }]
};
InfoCardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-info-cards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./info-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/info-cards/info-cards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./info-cards.component.scss */ "./src/app/admin/dashboard/info-cards/info-cards.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], InfoCardsComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/latest-orders/latest-orders.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/dashboard/latest-orders/latest-orders.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9sYXRlc3Qtb3JkZXJzL2xhdGVzdC1vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/dashboard/latest-orders/latest-orders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/dashboard/latest-orders/latest-orders.component.ts ***!
  \**************************************************************************/
/*! exports provided: LatestOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestOrdersComponent", function() { return LatestOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let LatestOrdersComponent = class LatestOrdersComponent {
    constructor() {
        this.orders = [
            { number: '#3258', date: 'March 29, 2018', status: 'Completed', total: '$140.00 for 2 items', invoice: true },
            { number: '#3145', date: 'February 14, 2018', status: 'On hold', total: '$255.99 for 1 item', invoice: false },
            { number: '#2972', date: 'January 7, 2018', status: 'Processing', total: '$255.99 for 1 item', invoice: true },
            { number: '#2971', date: 'January 5, 2018', status: 'Completed', total: '$73.00 for 1 item', invoice: true },
            { number: '#1981', date: 'December 24, 2017', status: 'Pending Payment', total: '$285.00 for 2 items', invoice: false },
            { number: '#1781', date: 'September 3, 2017', status: 'Refunded', total: '$49.00 for 2 items', invoice: false }
        ];
    }
    ngOnInit() {
    }
};
LatestOrdersComponent.ctorParameters = () => [];
LatestOrdersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-latest-orders',
        template: __importDefault(__webpack_require__(/*! raw-loader!./latest-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/latest-orders/latest-orders.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./latest-orders.component.scss */ "./src/app/admin/dashboard/latest-orders/latest-orders.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], LatestOrdersComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/montly-sales/montly-sales.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/dashboard/montly-sales/montly-sales.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9tb250bHktc2FsZXMvbW9udGx5LXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/dashboard/montly-sales/montly-sales.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/montly-sales/montly-sales.component.ts ***!
  \************************************************************************/
/*! exports provided: MontlySalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontlySalesComponent", function() { return MontlySalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.data */ "./src/app/admin/dashboard/dashboard.data.ts");
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


let MontlySalesComponent = class MontlySalesComponent {
    constructor() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.data = _dashboard_data__WEBPACK_IMPORTED_MODULE_1__["montly_sales"];
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [..._dashboard_data__WEBPACK_IMPORTED_MODULE_1__["montly_sales"]]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
};
MontlySalesComponent.ctorParameters = () => [];
MontlySalesComponent.propDecorators = {
    resizedDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['resizedDiv',] }]
};
MontlySalesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-montly-sales',
        template: __importDefault(__webpack_require__(/*! raw-loader!./montly-sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/montly-sales/montly-sales.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./montly-sales.component.scss */ "./src/app/admin/dashboard/montly-sales/montly-sales.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], MontlySalesComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/tiles/tiles.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/dashboard/tiles/tiles.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tile {\n  text-align: right;\n}\n.tile .mat-icon {\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  line-height: 0;\n  font-size: 54px;\n  opacity: 0.3;\n}\n.tile h2 {\n  font-weight: 500;\n}\n.tile p {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBQUk7RUFDSSx5QkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/dashboard/tiles/tiles.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/tiles/tiles.component.ts ***!
  \**********************************************************/
/*! exports provided: TilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesComponent", function() { return TilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let TilesComponent = class TilesComponent {
    constructor() { }
    ngOnInit() {
    }
};
TilesComponent.ctorParameters = () => [];
TilesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tiles',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tiles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/tiles/tiles.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./tiles.component.scss */ "./src/app/admin/dashboard/tiles/tiles.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], TilesComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map