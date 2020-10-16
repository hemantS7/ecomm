(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/analytics.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/analytics.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" class=\"p-1\">\n        <app-sales-summary></app-sales-summary>\n    </div>\n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"p-1\">\n        <app-montly-sales></app-montly-sales>  \n    </div>  \n\n    <div fxFlex=\"100\" class=\"p-1\">\n        <app-daily-views-stats></app-daily-views-stats>\n    </div>\n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-1\">\n        <app-most-viewed-products></app-most-viewed-products>  \n    </div>  \n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-1\">\n        <app-transactions></app-transactions> \n    </div>  \n   \n    <div fxFlex=\"100\" class=\"p-1\">\n        <app-refunds></app-refunds>\n    </div>\n    \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center center\">                \n        <mat-card-subtitle><h2>Daily Views Stats</h2></mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"w-100 h-400p\">\n        <ngx-charts-line-chart\n            [scheme]=\"colorScheme\"\n            [results]=\"daily_views_stats\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            (select)=\"onSelect($event)\">\n        </ngx-charts-line-chart>                  \n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/montly-sales/montly-sales.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/montly-sales/montly-sales.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center\">                \n        <mat-card-subtitle><h2>Montly Sales</h2></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content> \n        <div class=\"w-100 h-300p\" #resizedDiv>\n            <ngx-charts-pie-chart\n                [scheme]=\"colorScheme\"\n                [results]=\"data\"\n                [legend]=\"showLegend\"\n                [explodeSlices]=\"explodeSlices\"\n                [labels]=\"showLabels\"\n                [doughnut]=\"doughnut\"\n                [gradient]=\"gradient\"\n                (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart>   \n        </div>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center\">                \n        <mat-card-subtitle><h2>Most Viewed Products</h2></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content> \n        <div class=\"w-100 h-300p\" #resizedDiv>\n            <ngx-charts-pie-chart\n                [scheme]=\"colorScheme\"\n                [results]=\"data\"\n                [legend]=\"showLegend\"\n                [explodeSlices]=\"explodeSlices\"\n                [labels]=\"showLabels\"\n                [doughnut]=\"doughnut\"\n                [gradient]=\"gradient\"\n                (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart>   \n        </div>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/refunds/refunds.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/refunds/refunds.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center center\">                \n        <mat-card-subtitle><h2>Refunds by Stores</h2></mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"w-100 h-300p\">\n        <ngx-charts-pie-grid\n            [scheme]=\"colorScheme\"\n            [results]=\"refunds\"\n            (select)=\"onSelect($event)\">\n        </ngx-charts-pie-grid>        \n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/sales-summary/sales-summary.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/sales-summary/sales-summary.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center center\">                \n        <mat-card-subtitle><h2>Sales Summary (Top Regions)</h2></mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"w-100 h-300p\">\n        <ngx-charts-bar-vertical-2d\n            [scheme]=\"colorScheme\"\n            [results]=\"sales_summary\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (select)=\"onSelect($event)\">\n        </ngx-charts-bar-vertical-2d>        \n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/transactions/transactions.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/transactions/transactions.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header fxLayoutAlign=\"center center\">                \n        <mat-card-subtitle><h2>Transactions</h2></mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"w-100 h-300p\">\n        <ngx-charts-bar-horizontal\n            [scheme]=\"colorScheme\"\n            [results]=\"transactions\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"yAxisLabel\"\n            [yAxisLabel]=\"xAxisLabel\"\n            (select)=\"onSelect($event)\">\n        </ngx-charts-bar-horizontal>         \n    </div>\n</mat-card>");

/***/ }),

/***/ "./src/app/admin/analytics/analytics.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/analytics/analytics.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/analytics/analytics.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/analytics/analytics.component.ts ***!
  \********************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
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

let AnalyticsComponent = class AnalyticsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AnalyticsComponent.ctorParameters = () => [];
AnalyticsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-analytics',
        template: __importDefault(__webpack_require__(/*! raw-loader!./analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/analytics.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./analytics.component.scss */ "./src/app/admin/analytics/analytics.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);



/***/ }),

/***/ "./src/app/admin/analytics/analytics.data.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/analytics/analytics.data.ts ***!
  \***************************************************/
/*! exports provided: sales_summary, daily_views_stats, montly_sales, most_viewed_products, transactions, refunds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sales_summary", function() { return sales_summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daily_views_stats", function() { return daily_views_stats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "montly_sales", function() { return montly_sales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "most_viewed_products", function() { return most_viewed_products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactions", function() { return transactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refunds", function() { return refunds; });
const sales_summary = [
    {
        name: 'Germany',
        series: [
            {
                name: '2017',
                value: 71632
            },
            {
                name: '2010',
                value: 40632
            },
            {
                name: '2000',
                value: 76953
            },
            {
                name: '1990',
                value: 31476
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2017',
                value: 82632
            },
            {
                name: '2010',
                value: 49737
            },
            {
                name: '2000',
                value: 55986
            },
            {
                name: '1990',
                value: 37060
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2017',
                value: 51732
            },
            {
                name: '2010',
                value: 36745
            },
            {
                name: '2000',
                value: 34774
            },
            {
                name: '1990',
                value: 29476
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2017',
                value: 95652
            },
            {
                name: '2010',
                value: 36240
            },
            {
                name: '2000',
                value: 32543
            },
            {
                name: '1990',
                value: 26424
            }
        ]
    }
];
const daily_views_stats = [
    {
        name: 'Store 1',
        series: [
            {
                name: 'Day 1',
                value: 71632
            },
            {
                name: 'Day 2',
                value: 50632
            },
            {
                name: 'Day 3',
                value: 66953
            },
            {
                name: 'Day 4',
                value: 31476
            },
            {
                name: 'Day 5',
                value: 31632
            },
            {
                name: 'Day 6',
                value: 40632
            },
            {
                name: 'Day 7',
                value: 56953
            },
            {
                name: 'Day 8',
                value: 31476
            },
            {
                name: 'Day 9',
                value: 71632
            },
            {
                name: 'Day 10',
                value: 40632
            },
            {
                name: 'Day 11',
                value: 16953
            },
            {
                name: 'Day 12',
                value: 31476
            },
            {
                name: 'Day 13',
                value: 41632
            },
            {
                name: 'Day 14',
                value: 40632
            },
            {
                name: 'Day 15',
                value: 76953
            }
        ]
    },
    {
        name: 'Store 2',
        series: [
            {
                name: 'Day 1',
                value: 61632
            },
            {
                name: 'Day 2',
                value: 40632
            },
            {
                name: 'Day 3',
                value: 86953
            },
            {
                name: 'Day 4',
                value: 51476
            },
            {
                name: 'Day 5',
                value: 41632
            },
            {
                name: 'Day 6',
                value: 50632
            },
            {
                name: 'Day 7',
                value: 36953
            },
            {
                name: 'Day 8',
                value: 21476
            },
            {
                name: 'Day 9',
                value: 61632
            },
            {
                name: 'Day 10',
                value: 40632
            },
            {
                name: 'Day 11',
                value: 26953
            },
            {
                name: 'Day 12',
                value: 35476
            },
            {
                name: 'Day 13',
                value: 46632
            },
            {
                name: 'Day 14',
                value: 40632
            },
            {
                name: 'Day 15',
                value: 76953
            }
        ]
    },
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
const most_viewed_products = [
    {
        "name": "Product 1",
        "value": 178
    },
    {
        "name": "Product 2",
        "value": 340
    },
    {
        "name": "Product 3",
        "value": 280
    },
    {
        "name": "Product 4",
        "value": 310
    },
    {
        "name": "Product 5",
        "value": 385
    },
    {
        "name": "Product 6",
        "value": 240
    }
];
const transactions = [
    {
        name: 'Store 1',
        value: 40632
    },
    {
        name: 'Store 2',
        value: 49737
    },
    {
        name: 'Store 3',
        value: 36745
    },
    {
        name: 'Store 4',
        value: 36240
    },
    {
        name: 'Store 5',
        value: 33000
    },
    {
        name: 'Store 6',
        value: 35800
    }
];
const refunds = [
    {
        name: 'Store 1',
        value: 31632
    },
    {
        name: 'Store 2',
        value: 42737
    },
    {
        name: 'Store 3',
        value: 33745
    },
    {
        name: 'Store 4',
        value: 29240
    },
    {
        name: 'Store 5',
        value: 28250
    },
    {
        name: 'Store 6',
        value: 31800
    }
];


/***/ }),

/***/ "./src/app/admin/analytics/analytics.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/analytics/analytics.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analytics.component */ "./src/app/admin/analytics/analytics.component.ts");
/* harmony import */ var _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./montly-sales/montly-sales.component */ "./src/app/admin/analytics/montly-sales/montly-sales.component.ts");
/* harmony import */ var _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-summary/sales-summary.component */ "./src/app/admin/analytics/sales-summary/sales-summary.component.ts");
/* harmony import */ var _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./daily-views-stats/daily-views-stats.component */ "./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.ts");
/* harmony import */ var _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./most-viewed-products/most-viewed-products.component */ "./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/admin/analytics/transactions/transactions.component.ts");
/* harmony import */ var _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refunds/refunds.component */ "./src/app/admin/analytics/refunds/refunds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: '', component: _analytics_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsComponent"], pathMatch: 'full' }
];
let AnalyticsModule = class AnalyticsModule {
};
AnalyticsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _analytics_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsComponent"],
            _montly_sales_montly_sales_component__WEBPACK_IMPORTED_MODULE_6__["MontlySalesComponent"],
            _sales_summary_sales_summary_component__WEBPACK_IMPORTED_MODULE_7__["SalesSummaryComponent"],
            _daily_views_stats_daily_views_stats_component__WEBPACK_IMPORTED_MODULE_8__["DailyViewsStatsComponent"],
            _most_viewed_products_most_viewed_products_component__WEBPACK_IMPORTED_MODULE_9__["MostViewedProductsComponent"],
            _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsComponent"],
            _refunds_refunds_component__WEBPACK_IMPORTED_MODULE_11__["RefundsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"]
        ]
    })
], AnalyticsModule);



/***/ }),

/***/ "./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9kYWlseS12aWV3cy1zdGF0cy9kYWlseS12aWV3cy1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DailyViewsStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyViewsStatsComponent", function() { return DailyViewsStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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


let DailyViewsStatsComponent = class DailyViewsStatsComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Days';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Views';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        Object.assign(this, { daily_views_stats: _analytics_data__WEBPACK_IMPORTED_MODULE_1__["daily_views_stats"] });
    }
    onSelect(event) {
        console.log(event);
    }
};
DailyViewsStatsComponent.ctorParameters = () => [];
DailyViewsStatsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-daily-views-stats',
        template: __importDefault(__webpack_require__(/*! raw-loader!./daily-views-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./daily-views-stats.component.scss */ "./src/app/admin/analytics/daily-views-stats/daily-views-stats.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], DailyViewsStatsComponent);



/***/ }),

/***/ "./src/app/admin/analytics/montly-sales/montly-sales.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/analytics/montly-sales/montly-sales.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9tb250bHktc2FsZXMvbW9udGx5LXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/analytics/montly-sales/montly-sales.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/analytics/montly-sales/montly-sales.component.ts ***!
  \************************************************************************/
/*! exports provided: MontlySalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontlySalesComponent", function() { return MontlySalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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
        this.explodeSlices = false;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.data = _analytics_data__WEBPACK_IMPORTED_MODULE_1__["montly_sales"];
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [..._analytics_data__WEBPACK_IMPORTED_MODULE_1__["montly_sales"]]);
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./montly-sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/montly-sales/montly-sales.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./montly-sales.component.scss */ "./src/app/admin/analytics/montly-sales/montly-sales.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], MontlySalesComponent);



/***/ }),

/***/ "./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9tb3N0LXZpZXdlZC1wcm9kdWN0cy9tb3N0LXZpZXdlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MostViewedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostViewedProductsComponent", function() { return MostViewedProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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


let MostViewedProductsComponent = class MostViewedProductsComponent {
    constructor() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#42A5F5', '#7E57C2', '#AFB42B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    ngOnInit() {
        this.data = _analytics_data__WEBPACK_IMPORTED_MODULE_1__["most_viewed_products"];
    }
    onSelect(event) {
        console.log(event);
    }
    ngAfterViewChecked() {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(() => this.data = [..._analytics_data__WEBPACK_IMPORTED_MODULE_1__["most_viewed_products"]]);
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    }
};
MostViewedProductsComponent.ctorParameters = () => [];
MostViewedProductsComponent.propDecorators = {
    resizedDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['resizedDiv',] }]
};
MostViewedProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-most-viewed-products',
        template: __importDefault(__webpack_require__(/*! raw-loader!./most-viewed-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./most-viewed-products.component.scss */ "./src/app/admin/analytics/most-viewed-products/most-viewed-products.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], MostViewedProductsComponent);



/***/ }),

/***/ "./src/app/admin/analytics/refunds/refunds.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/analytics/refunds/refunds.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9yZWZ1bmRzL3JlZnVuZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/analytics/refunds/refunds.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/analytics/refunds/refunds.component.ts ***!
  \**************************************************************/
/*! exports provided: RefundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundsComponent", function() { return RefundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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


let RefundsComponent = class RefundsComponent {
    constructor() {
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        Object.assign(this, { refunds: _analytics_data__WEBPACK_IMPORTED_MODULE_1__["refunds"] });
    }
    onSelect(event) {
        console.log(event);
    }
};
RefundsComponent.ctorParameters = () => [];
RefundsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-refunds',
        template: __importDefault(__webpack_require__(/*! raw-loader!./refunds.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/refunds/refunds.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./refunds.component.scss */ "./src/app/admin/analytics/refunds/refunds.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], RefundsComponent);



/***/ }),

/***/ "./src/app/admin/analytics/sales-summary/sales-summary.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/analytics/sales-summary/sales-summary.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy9zYWxlcy1zdW1tYXJ5L3NhbGVzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/analytics/sales-summary/sales-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/analytics/sales-summary/sales-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalesSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummaryComponent", function() { return SalesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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


let SalesSummaryComponent = class SalesSummaryComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sales';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        Object.assign(this, { sales_summary: _analytics_data__WEBPACK_IMPORTED_MODULE_1__["sales_summary"] });
    }
    ngOnInit() {
    }
    onSelect(event) {
        console.log(event);
    }
};
SalesSummaryComponent.ctorParameters = () => [];
SalesSummaryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sales-summary',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sales-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/sales-summary/sales-summary.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sales-summary.component.scss */ "./src/app/admin/analytics/sales-summary/sales-summary.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], SalesSummaryComponent);



/***/ }),

/***/ "./src/app/admin/analytics/transactions/transactions.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/analytics/transactions/transactions.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FuYWx5dGljcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/analytics/transactions/transactions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/analytics/transactions/transactions.component.ts ***!
  \************************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analytics_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics.data */ "./src/app/admin/analytics/analytics.data.ts");
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


let TransactionsComponent = class TransactionsComponent {
    constructor() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Store';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Transactions';
        this.colorScheme = {
            domain: ['#3F51B5', '#E91E63', '#43A047', '#FDD835', '#F4511E', '#606060']
        };
        Object.assign(this, { transactions: _analytics_data__WEBPACK_IMPORTED_MODULE_1__["transactions"] });
    }
    onSelect(event) {
        console.log(event);
    }
};
TransactionsComponent.ctorParameters = () => [];
TransactionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-transactions',
        template: __importDefault(__webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/analytics/transactions/transactions.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./transactions.component.scss */ "./src/app/admin/analytics/transactions/transactions.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], TransactionsComponent);



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module-es2015.js.map