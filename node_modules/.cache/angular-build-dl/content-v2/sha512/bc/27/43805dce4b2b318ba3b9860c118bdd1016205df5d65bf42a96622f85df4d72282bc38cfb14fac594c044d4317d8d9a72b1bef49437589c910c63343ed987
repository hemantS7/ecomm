(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/orders/orders.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/orders/orders.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Orders List</h2>  \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">\n                <div class=\"mat-header-cell\">Order</div>\n                <div class=\"mat-header-cell\">Date</div>\n                <div class=\"mat-header-cell\">Status</div>\n                <div class=\"mat-header-cell\">Total</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let order of orders | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">\n                <div class=\"mat-cell\"><span class=\"order\">{{order.number}}</span></div>\n                <div class=\"mat-cell\">{{order.date}}</div>\n                <div class=\"mat-cell\">{{order.status}}</div>\n                <div class=\"mat-cell\">{{order.total}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"View\">\n                            <mat-icon>remove_red_eye</mat-icon>\n                        </button>\n                        <button *ngIf=\"order.invoice\" mat-mini-fab color=\"warn\" matTooltip=\"View invoice\" class=\"btn-invoice\">\n                            <mat-icon>receipt</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"orders.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/transactions/transactions.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/transactions/transactions.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Transactions List</h2>  \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">\n                <div class=\"mat-header-cell\">OrderId</div>\n                <div class=\"mat-header-cell\">TransactionId</div>\n                <div class=\"mat-header-cell\">Date</div>\n                <div class=\"mat-header-cell\">Payment Method</div>\n                <div class=\"mat-header-cell\">Status</div>\n                <div class=\"mat-header-cell\">Amount</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let tran of transactions | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">\n                <div class=\"mat-cell\"><span class=\"order\">{{tran.orderId}}</span></div>\n                <div class=\"mat-cell\">{{tran.transactionId}}</div>\n                <div class=\"mat-cell\">{{tran.date}}</div>\n                <div class=\"mat-cell\">{{tran.paymentMethod}}</div>\n                <div class=\"mat-cell\">{{tran.status}}</div>\n                <div class=\"mat-cell\">{{tran.amount}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"View\">\n                            <mat-icon>remove_red_eye</mat-icon>\n                        </button> \n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"transactions.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/admin/sales/orders/orders.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/sales/orders/orders.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NhbGVzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/sales/orders/orders.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/sales/orders/orders.component.ts ***!
  \********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
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

let OrdersComponent = class OrdersComponent {
    constructor() {
        this.orders = [
            { number: '#3258', date: 'March 29, 2018', status: 'Completed', total: '$140.00 for 2 items', invoice: true },
            { number: '#3145', date: 'February 14, 2018', status: 'On hold', total: '$255.99 for 1 item', invoice: false },
            { number: '#2972', date: 'January 7, 2018', status: 'Processing', total: '$255.99 for 1 item', invoice: true },
            { number: '#2971', date: 'January 5, 2018', status: 'Completed', total: '$73.00 for 1 item', invoice: true },
            { number: '#1981', date: 'December 24, 2017', status: 'Pending Payment', total: '$285.00 for 2 items', invoice: false },
            { number: '#1781', date: 'September 3, 2017', status: 'Refunded', total: '$49.00 for 2 items', invoice: false },
            { number: '#3981', date: 'December 24, 2017', status: 'Pending Payment', total: '$285.00 for 2 items', invoice: false },
            { number: '#5781', date: 'September 3, 2017', status: 'Refunded', total: '$49.00 for 2 items', invoice: false },
            { number: '#6258', date: 'March 22, 2019', status: 'Completed', total: '$140.00 for 2 items', invoice: true },
            { number: '#7145', date: 'February 14, 2020', status: 'On hold', total: '$255.99 for 1 item', invoice: false },
            { number: '#1972', date: 'January 10, 2018', status: 'Processing', total: '$255.99 for 1 item', invoice: true },
            { number: '#8971', date: 'October 3, 2019', status: 'Completed', total: '$73.00 for 1 item', invoice: true }
        ];
        this.count = 6;
    }
    ngOnInit() {
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
};
OrdersComponent.ctorParameters = () => [];
OrdersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-orders',
        template: __importDefault(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/orders/orders.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./orders.component.scss */ "./src/app/admin/sales/orders/orders.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);



/***/ }),

/***/ "./src/app/admin/sales/sales.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/sales/sales.module.ts ***!
  \*********************************************/
/*! exports provided: routes, SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/admin/sales/orders/orders.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/admin/sales/transactions/transactions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], data: { breadcrumb: 'Orders' } },
    { path: 'transactions', component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"], data: { breadcrumb: 'Transactions' } }
];
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
            _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        ]
    })
], SalesModule);



/***/ }),

/***/ "./src/app/admin/sales/transactions/transactions.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/sales/transactions/transactions.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NhbGVzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/sales/transactions/transactions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/sales/transactions/transactions.component.ts ***!
  \********************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
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

let TransactionsComponent = class TransactionsComponent {
    constructor() {
        this.transactions = [
            { orderId: '#2121', transactionId: '#78245214510', date: 'March 29, 2018', paymentMethod: 'Stripe', status: 'Process', amount: '$140.00' },
            { orderId: '#7255', transactionId: '#58272854525', date: 'January 7, 2018', paymentMethod: 'Paypal', status: 'Pending', amount: '$855.00' },
            { orderId: '#4122', transactionId: '#48266987452', date: 'December 24, 2017', paymentMethod: 'Paypal', status: 'Delivered', amount: '$420.00' },
            { orderId: '#4534', transactionId: '#43567578223', date: 'March 29, 2018', paymentMethod: 'Stripe', status: 'Process', amount: '$140.00' },
            { orderId: '#6512', transactionId: '#54129964355', date: 'October 7, 2018', paymentMethod: 'Paypal', status: 'Pending', amount: '$952.00' },
            { orderId: '#2345', transactionId: '#75208924544', date: 'December 24, 2017', paymentMethod: 'Stripe', status: 'Delivered', amount: '$45.00' },
            { orderId: '#1255', transactionId: '#72113456734', date: 'October 2, 2019', paymentMethod: 'Stripe', status: 'Delivered', amount: '$140.00' },
            { orderId: '#8854', transactionId: '#96455673452', date: 'January 7, 2018', paymentMethod: 'Paypal', status: 'Pending', amount: '$225.00' },
            { orderId: '#9712', transactionId: '#85643112647', date: 'December 24, 2017', paymentMethod: 'Stripe', status: 'Delivered', amount: '$540.00' },
            { orderId: '#7342', transactionId: '#95534768943', date: 'March 29, 2018', paymentMethod: 'Stripe', status: 'Pending', amount: '$140.00' },
            { orderId: '#5414', transactionId: '#34861354666', date: 'October 7, 2018', paymentMethod: 'Paypal', status: 'Pending', amount: '$475.00' },
            { orderId: '#8906', transactionId: '#23756748667', date: 'November 2, 2017', paymentMethod: 'Paypal', status: 'Delivered', amount: '$420.00' }
        ];
        this.count = 6;
    }
    ngOnInit() {
    }
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
};
TransactionsComponent.ctorParameters = () => [];
TransactionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-transactions',
        template: __importDefault(__webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sales/transactions/transactions.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./transactions.component.scss */ "./src/app/admin/sales/transactions/transactions.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], TransactionsComponent);



/***/ })

}]);
//# sourceMappingURL=sales-sales-module-es2015.js.map