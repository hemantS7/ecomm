(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refund-refund-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refund/refund.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refund/refund.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Refund Requests</h2>  \n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\"> \n                <div class=\"mat-header-cell\">Request ID</div>\n                <div class=\"mat-header-cell\">Order ID</div> \n                <div class=\"mat-header-cell\">Store</div>\n                <div class=\"mat-header-cell\">Amount</div>  \n                <div class=\"mat-header-cell\">Type</div>  \n                <div class=\"mat-header-cell\">Reason</div>  \n                <div class=\"mat-header-cell\">Date</div>\n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let item of refunds | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\"> \n                <div class=\"mat-cell\">{{item.requestId}}</div> \n                <div class=\"mat-cell primary-text\">{{item.orderId}}</div> \n                <div class=\"mat-cell\">{{ ( stores | filterById : item.storeId )?.name }}</div> \n                <div class=\"mat-cell\">${{item.amount.toFixed(2)}}</div> \n                <div class=\"mat-cell\">{{item.type}}</div> \n                <div class=\"mat-cell\">{{item.reason}}</div>  \n                <div class=\"mat-cell\">{{item.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</div>     \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"Approve\">\n                            <mat-icon>check</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Reject\">\n                            <mat-icon>clear</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"refunds.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/admin/refund/refund.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/refund/refund.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZnVuZC9yZWZ1bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/refund/refund.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/refund/refund.component.ts ***!
  \**************************************************/
/*! exports provided: RefundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundComponent", function() { return RefundComponent; });
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

let RefundComponent = class RefundComponent {
    constructor() {
        this.refunds = [
            { id: 1, requestId: '#0045', orderId: '#2485', storeId: 1, amount: 20, type: 'Full refund', reason: 'Not happy', date: new Date(2020, 1, 15, 10, 45) },
            { id: 2, requestId: '#5288', orderId: '#7455', storeId: 2, amount: 45, type: 'Full refund', reason: 'Bad package', date: new Date(2020, 3, 20, 12, 15) },
            { id: 3, requestId: '#6318', orderId: '#6122', storeId: 2, amount: 30, type: 'Full refund', reason: 'Product broken', date: new Date(2020, 4, 5, 18, 25) }
        ];
        this.stores = [
            { id: 1, name: 'Store 1' },
            { id: 2, name: 'Store 2' }
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
RefundComponent.ctorParameters = () => [];
RefundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-refund',
        template: __importDefault(__webpack_require__(/*! raw-loader!./refund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refund/refund.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./refund.component.scss */ "./src/app/admin/refund/refund.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], RefundComponent);



/***/ }),

/***/ "./src/app/admin/refund/refund.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/refund/refund.module.ts ***!
  \***********************************************/
/*! exports provided: routes, RefundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundModule", function() { return RefundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _refund_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refund.component */ "./src/app/admin/refund/refund.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _refund_component__WEBPACK_IMPORTED_MODULE_5__["RefundComponent"], pathMatch: 'full' }
];
let RefundModule = class RefundModule {
};
RefundModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _refund_component__WEBPACK_IMPORTED_MODULE_5__["RefundComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
        ]
    })
], RefundModule);



/***/ })

}]);
//# sourceMappingURL=refund-refund-module-es2015.js.map