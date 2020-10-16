function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductProductZoomProductZoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n        \r\n        <mat-card class=\"product-image\">\r\n            <mat-chip-list *ngIf=\"product?.discount\">\r\n                <mat-chip color=\"warn\" selected=\"true\">{{product?.discount}}% OFF</mat-chip>\r\n            </mat-chip-list>\r\n            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md><mat-icon>fullscreen</mat-icon></button>\r\n            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\"/>\r\n        </mat-card>       \r\n\r\n        <div class=\"small-carousel\"> \r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\"> \r\n                    <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                            <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                            <div class=\"swiper-lazy-preloader\"></div>\r\n                        </mat-card>\r\n                    </div>                    \r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        \r\n        <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n            <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n        </div>\r\n\r\n        <h2>{{product?.name}}</h2>\r\n        <div class=\"py-1 lh\">\r\n            <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product?.categoryId )?.name }}</span></p>\r\n            <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product?.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\r\n        </div>                 \r\n        <div class=\"py-1\">\r\n            <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n        </div>\r\n        <p class=\"py-1 text-muted lh\">{{product?.description}}</p>\r\n\r\n        <div class=\"divider mt-1\"></div>\r\n        <div class=\"py-2\">\r\n            <h3 class=\"old-price text-muted\"><span *ngIf=\"product?.oldPrice\">${{product?.oldPrice | number : '1.2-2'}}</span></h3>\r\n            <h2 class=\"new-price\">${{product?.newPrice}}</h2>\r\n        </div>        \r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"details text-muted py-1\">\r\n            <div *ngIf=\"product?.color\" class=\"color\">\r\n                <span class=\"fw-500\">Select Color:</span>\r\n                <button mat-raised-button *ngFor=\"let color of product?.color\" [style.background]=\"color\">&nbsp;</button>              \r\n            </div>\r\n            <div *ngIf=\"product?.size\" class=\"size\" ngClass.xs=\"mt-1\">\r\n                <span class=\"fw-500\">Select Size:</span>\r\n                <button mat-raised-button *ngFor=\"let size of product?.size\">{{size}}</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"py-1\">\r\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls> \r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\r\n            <button mat-button><mat-icon>mail_outline</mat-icon> Email to a Friend</button>\r\n            <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxHide fxShow.gt-md> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>BONUS PLUS</p> \r\n                        <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n                    </div> \r\n                </mat-card> \r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>FREE SHIPPING</p> \r\n                        <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\"fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>MONEY BACK GUARANTEE</p> \r\n                        <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\"> \r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p>ONLINE SUPPORT 24/7</p> \r\n                        <span class=\"text-muted m-0\">Call us: (+100) 123 456 7890</span>\r\n                    </div> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" class=\"mt-2\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"78\" fxFlex.md=\"74\">\r\n        <mat-card> \r\n            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">       \r\n                <mat-tab label=\"Description\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat.</li>\r\n                        </ul>\r\n                        <p class=\"mt-1\">Duis eu felis ultricies urna pharetra efficitur nec non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur posuere eu justo eget mollis. Sed semper accumsan urna vel rutrum. Nulla condimentum quis lacus ut semper. Quisque at massa pretium, porta ligula ut, rutrum elit. Pellentesque et orci sit amet dolor laoreet tempor sed eu sem. Morbi lacinia pellentesque tellus euismod eleifend.</p>\r\n                        <p class=\"mt-1\">Quisque fringilla eros id ligula luctus, a gravida augue sodales. Sed eget augue ut lectus condimentum volutpat. Morbi quis nunc viverra, gravida arcu quis, varius metus. Praesent tincidunt ipsum est, quis molestie ligula efficitur ut. Nunc interdum erat eu tortor maximus suscipit. Vivamus nec laoreet dui. Nullam dignissim laoreet metus quis pretium.</p>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Additional information\">\r\n                    <div class=\"full-desc lh\">\r\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                            <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                            <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                            <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                            <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                        </ul>\r\n                        <ul class=\"px-2 mt-1\">\r\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\r\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\r\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\r\n                            <li>Nam sagittis augue at pretium pharetra.</li>\r\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\r\n                            <li>Duis aliquam urna in sapien cursus consequat. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        </ul>\r\n                    </div>\r\n                \r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Reviews\">\r\n                    <div class=\"full-desc lh\">\r\n                        <mat-list class=\"reviews\">\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Bruno Vespa</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Dissatisfied\" matTooltipPosition=\"after\">sentiment_dissatisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>13 January, 2018 at 7:09</small></p>\r\n                                <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Julia Aniston</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Very Satisfied\" matTooltipPosition=\"after\">sentiment_very_satisfied</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>04 February, 2018 at 10:22</small></p>\r\n                                <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\r\n                            </mat-list-item>\r\n                            <mat-list-item class=\"h-100 py-1\">\r\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\r\n                                <p matLine fxLayoutAlign=\"start center\">\r\n                                    <span class=\"fw-500\">Andy Warhol</span> \r\n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Neutral\" matTooltipPosition=\"after\">sentiment_neutral</mat-icon>\r\n                                </p>\r\n                                <p matLine class=\"text-muted\"><small>14 February, 2018 at 11:10</small></p>\r\n                                <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        \r\n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                        <div class=\"divider\"></div>\r\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                            <span>Your Rating:</span>\r\n                            <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon></button>\r\n                            <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon></button>\r\n                        </h3>\r\n\r\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row wrap\">\r\n                            <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your review</mat-label>\r\n                                    <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required rows=\"5\"></textarea>\r\n                                    <mat-error *ngIf=\"form.controls.review.errors?.required\">Review is required</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your name</mat-label>\r\n                                    <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\r\n                                    <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Your email</mat-label>\r\n                                    <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\r\n                                    <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                                    <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\">SUBMIT REVIEW</button>\r\n                            </div>\r\n                        </form>\r\n\r\n                        \r\n                    </div>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"22\" fxFlex.md=\"26\" ngClass.gt-sm=\"pl-3\" fxHide fxShow.gt-sm>\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%201\" alt=\"\" class=\"mw-100 d-block\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%202\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n        <img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%203\" alt=\"\" class=\"mw-100 d-block mt-3\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-2 mt-2\">\r\n    <h2>Related Products</h2>\r\n    <div class=\"divider\"></div>\r\n    <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        \r\n        <mat-accordion displayMode=\"flat\" multi=\"true\">\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Categories</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n                    <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"onChangeCategory($event)\"></app-category-list>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Price</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                    <span>From: <b>${{priceFrom}}</b></span>\r\n                    <span>To: <b>${{priceTo}}</b></span>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n                    <mat-slider color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n                    <mat-slider color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <!-- <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Color</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let color of colors\" [style.background]=\"color.name\" (click)=\"color.selected = !color.selected\">\r\n                        <span *ngIf=\"!color.selected\">&nbsp;</span>\r\n                        <mat-icon *ngIf=\"color.selected\">check</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel> -->\r\n\r\n            <!-- <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Size</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n                    <button mat-raised-button *ngFor=\"let size of sizes\" (click)=\"size.selected = !size.selected\" [class.selected]=\"size.selected\">\r\n                        {{size.name}}                      \r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel> -->\r\n\r\n            <!-- <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Condition</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"column\">\r\n                    <mat-checkbox color=\"primary\">New</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Used</mat-checkbox>\r\n                    <mat-checkbox color=\"primary\">Not Specified</mat-checkbox>\r\n                </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Brands</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">                  \r\n                    <button mat-raised-button *ngFor=\"let brand of brands\" (click)=\"brand.selected = !brand.selected\" [class.selected]=\"brand.selected\">\r\n                        <img [src]=\"brand.image\"/>\r\n                    </button>\r\n                </div>\r\n            </mat-expansion-panel> -->\r\n\r\n            <!-- <mat-expansion-panel expanded>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Now starting at $1379</h4>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                   <a [routerLink]=\"['/products/electronics']\"><img src=\"assets/images/products/probook/2-medium.png\" alt=\"\" class=\"mw-100\"></a>\r\n                </div>\r\n            </mat-expansion-panel> -->\r\n\r\n        </mat-accordion>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\">\r\n                    <mat-chip-list *ngIf=\"product.DISC_PERCENT\">\r\n                        <mat-chip color=\"warn\" selected=\"true\">{{product.DISC_PERCENT}}% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <a [routerLink]=\"['/products', product.ITEM_ID, product.ITEM_NAME]\" class=\"image-link\">\r\n                        <!-- <img [src]=\"product.images[0].medium\" alt=\"\"> -->\r\n                        <img src=\"http://localhost:4200/assets/images/products/keyboard/1-medium.png\" alt=\"\">\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                    <a [routerLink]=\"['/products', product.ITEM_ID, product.ITEM_NAME]\" class=\"title text-truncate\">\r\n                        {{product.ITEM_NAME}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <!-- <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p> -->\r\n                            <p class=\"new-price\">${{product.MRP_RATE | number : '1.2-2'}}</p>\r\n                        </div>\r\n                        <!-- <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating> -->\r\n                    </div>                            \r\n                    <!-- <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div> -->\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div  *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <mat-chip-list *ngIf=\"product.discount\" class=\"list-view\">\r\n                                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                                <img [src]=\"product.images[0].medium\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                            <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                </div>\r\n                                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                            </div>                            \r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div> -->\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\"> \r\n                <mat-card class=\"p-0 text-center\">           \r\n                    <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./src/app/pages/products/product/product-zoom/product-zoom.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductProductZoomProductZoomComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.zoom-dialog .mat-dialog-container .controls {\n  position: relative;\n}\n.zoom-dialog .mat-dialog-container .controls button {\n  position: absolute;\n  top: -44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-in {\n  right: 44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-out {\n  right: 0;\n}\n.zoom-dialog .mat-dialog-container .controls .close {\n  right: -44px;\n}\n.zoom-dialog .mat-dialog-container .viewer {\n  width: 100%;\n  text-align: center;\n}\n.zoom-dialog .mat-dialog-container .viewer img {\n  max-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNEJBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUFZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRWhCO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBQVk7RUFDSSxRQUFBO0FBRWhCO0FBQVk7RUFDSSxZQUFBO0FBRWhCO0FBQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUFZO0VBQ0ksY0FBQTtBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56b29tLWRpYWxvZ3tcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jb250cm9sc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLWlue1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ0cHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLW91dHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTQ0cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWV3ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/products/product/product-zoom/product-zoom.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ProductZoomComponent */

  /***/
  function srcAppPagesProductsProductProductZoomProductZoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function () {
      return ProductZoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

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

    var ProductZoomComponent = /*#__PURE__*/function () {
      function ProductZoomComponent(dialogRef, image) {
        _classCallCheck(this, ProductZoomComponent);

        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
      }

      _createClass(ProductZoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
          }
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
          }
        }
      }]);

      return ProductZoomComponent;
    }();

    ProductZoomComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ProductZoomComponent.propDecorators = {
      zoomImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['zoomImage', {
          "static": true
        }]
      }]
    };
    ProductZoomComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-zoom',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-zoom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./product-zoom.component.scss */
      "./src/app/pages/products/product/product-zoom/product-zoom.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])], ProductZoomComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/product/product.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/products/product/product.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center;\n}\n.mat-card.product-image button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n}\n.mat-card.product-image img {\n  max-width: 100%;\n}\n.mat-card.product-image .mat-chip-list {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  pointer-events: none;\n}\n.small-carousel {\n  margin-top: 8px;\n}\n.small-carousel .swiper-container {\n  padding: 2px;\n}\n.small-carousel .swiper-container .swiper-slide {\n  text-align: center;\n}\n.small-carousel .swiper-container .swiper-slide img {\n  max-width: 100%;\n}\n.small-carousel .swiper-button-next.swiper-button-disabled,\n.small-carousel .swiper-button-prev.swiper-button-disabled {\n  opacity: 0;\n}\n.small-carousel .swiper-button-prev {\n  left: -10px;\n}\n.small-carousel .swiper-button-next {\n  right: -10px;\n}\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px;\n}\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0;\n}\n.full-desc {\n  padding: 30px 40px;\n}\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRVI7QUFFQTtFQUNJLGVBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBQUk7O0VBRUksVUFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFJQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLHNDQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tYXQtY2hpcC1saXN0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7IFxyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC1jYXJvdXNlbHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwgXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLnpvb20tdmlld2Vye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm10LTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmRldGFpbHMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1saXN0LnJldmlld3N7XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtYXZhdGFyLnJldmlldy1hdXRob3J7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHR7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxufVxyXG4uZnVsbC1kZXNje1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgeyAgXHJcbiAgICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWd7XHJcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xyXG4gICAgICAgIGN1cnNvcjp1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL3pvb20uc3ZnJykgMTAgMTAsIHpvb20taW47XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/products/product/product.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/products/product/product.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppPagesProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");
    /* harmony import */


    var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product-zoom/product-zoom.component */
    "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");

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

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(appService, activatedRoute, dialog, formBuilder) {
        _classCallCheck(this, ProductComponent);

        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.config = {};
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.getProductById(params['id']);
          });
          this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])]
          });
          this.getRelatedProducts();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 2
              },
              600: {
                slidesPerView: 3
              }
            }
          };
        }
      }, {
        key: "getProductById",
        value: function getProductById(id) {
          var _this2 = this;

          this.appService.getProductById(id).subscribe(function (data) {
            _this2.product = data;
            _this2.image = data.images[0].medium;
            _this2.zoomImage = data.images[0].big;
            setTimeout(function () {
              _this2.config.observer = true; // this.directiveRef.setIndex(0);
            });
          });
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          var _this3 = this;

          this.appService.getProducts('related').subscribe(function (data) {
            _this3.relatedProducts = data;
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(image) {
          this.image = image.medium;
          this.zoomImage = image.big;
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];

            if (zoomer) {
              zoomer.style.backgroundPosition = x + '% ' + y + '%';
              zoomer.style.display = "block";
              zoomer.style.height = image.height + 'px';
              zoomer.style.width = image.width + 'px';
            }
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave(event) {
          this.zoomViewer.nativeElement.children[0].style.display = "none";
        }
      }, {
        key: "openZoomViewer",
        value: function openZoomViewer() {
          this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(values) {
          if (this.form.valid) {//email sent
          }
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ProductComponent.propDecorators = {
      zoomViewer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['zoomViewer', {
          "static": true
        }]
      }],
      directiveRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"], {
          "static": true
        }]
      }]
    };
    ProductComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product/product.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product.component.scss */
      "./src/app/pages/products/product/product.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/products.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/products/products.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden;\n}\n.filter-brands button img {\n  width: 66px;\n  height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdKO0FBRkk7RUFDSSxrQkFBQTtBQUlSO0FBQUE7RUFDSSxnQkFBQTtBQUdKO0FBRkk7RUFDSSxZQUFBO0FBSVI7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUVSO0FBR0k7RUFDSSxnQkFBQTtBQUFSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZSO0FBR1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG4uZmlsdGVyLXJvd3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4uYWxsLXByb2R1Y3Rze1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi5wLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdHMtd3JhcHBlcntcclxuICAgIG1hcmdpbjogOHB4IC04cHg7XHJcbiAgICAuY29se1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhdGVnb3JpZXMtd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWJ1dHRvbnN7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHggMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXItcHJpY2V7XHJcbiAgICAubWF0LXNsaWRlci1ob3Jpem9udGFse1xyXG4gICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXItYnJhbmRze1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDY2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/products/products.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/products/products.component.ts ***!
    \******************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppPagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/products-carousel/product-dialog/product-dialog.component */
    "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var src_app_services_product_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/product-categories.service */
    "./src/app/services/product-categories.service.ts");

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

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(appSettings, activatedRoute, appService, dialog, router, productCategoriesService) {
        _classCallCheck(this, ProductsComponent);

        this.appSettings = appSettings;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.productCategoriesService = productCategoriesService;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
        this.products = [];
        this.categories = [];
        this.brands = [];
        this.priceFrom = 750;
        this.priceTo = 1599;
        this.colors = [{
          name: "#5C6BC0",
          selected: false
        }, {
          name: "#66BB6A",
          selected: false
        }, {
          name: "#EF5350",
          selected: false
        }, {
          name: "#BA68C8",
          selected: false
        }, {
          name: "#FF4081",
          selected: false
        }, {
          name: "#9575CD",
          selected: false
        }, {
          name: "#90CAF9",
          selected: false
        }, {
          name: "#B2DFDB",
          selected: false
        }, {
          name: "#DCE775",
          selected: false
        }, {
          name: "#FFD740",
          selected: false
        }, {
          name: "#00E676",
          selected: false
        }, {
          name: "#FBC02D",
          selected: false
        }, {
          name: "#FF7043",
          selected: false
        }, {
          name: "#F5F5F5",
          selected: false
        }, {
          name: "#696969",
          selected: false
        }];
        this.sizes = [{
          name: "S",
          selected: false
        }, {
          name: "M",
          selected: false
        }, {
          name: "L",
          selected: false
        }, {
          name: "XL",
          selected: false
        }, {
          name: "2XL",
          selected: false
        }, {
          name: "32",
          selected: false
        }, {
          name: "36",
          selected: false
        }, {
          name: "38",
          selected: false
        }, {
          name: "46",
          selected: false
        }, {
          name: "52",
          selected: false
        }, {
          name: "13.3\"",
          selected: false
        }, {
          name: "15.4\"",
          selected: false
        }, {
          name: "17\"",
          selected: false
        }, {
          name: "21\"",
          selected: false
        }, {
          name: "23.4\"",
          selected: false
        }];
        this.settings = this.appSettings.settings;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.count = this.counts[0];
          this.sort = this.sortings[0]; // let catgKey = this.activatedRoute.snapshot.params.name;
          // console.log(catgKey);// OUTPUT red

          this.getCategories();
          this.getBrands();
          this.getAllProducts();
          this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this4.catgKey = params['name'];
            console.log(_this4.catgKey);

            var prData = _this4.categories.filter(function (x) {
              return x.categoryName === _this4.catgKey;
            });

            if (prData[0] == undefined) console.log('undefined');else _this4.products = prData[0].products;
          });

          if (window.innerWidth < 960) {
            this.sidenavOpen = false;
          }

          ;

          if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
          }

          ;
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this5 = this;

          this.appService.getProducts("featured").subscribe(function (data) {
            _this5.products = data; //for show more product  

            for (var index = 0; index < 3; index++) {
              _this5.products = _this5.products.concat(_this5.products);
            }
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this6 = this;

          // console.log(this.productCategoriesService)
          // if(this.appService.Data.categories.length == 0) { 
          this.productCategoriesService.getCategoryDetails().subscribe(function (data) {
            // console.log(data.result.catrgoryWiseItems)
            _this6.categories = data.result.catrgoryWiseItems; // this.appService.Data.categories = data;
          }); // alert('if')
          // }
          // else{
          //   this.categories = this.appService.Data.categories;
          //   // console.log(this.categories)
          //   // alert('else')
          // }
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          this.brands = this.appService.getBrands();
          this.brands.forEach(function (brand) {
            brand.selected = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          window.innerWidth < 960 ? this.sidenavOpen = false : this.sidenavOpen = true;
          window.innerWidth < 1280 ? this.viewCol = 33.3 : this.viewCol = 25;
        }
      }, {
        key: "changeCount",
        value: function changeCount(count) {
          this.count = count;
          this.getAllProducts();
        }
      }, {
        key: "changeSorting",
        value: function changeSorting(sort) {
          this.sort = sort;
        }
      }, {
        key: "changeViewType",
        value: function changeViewType(viewType, viewCol) {
          this.viewType = viewType;
          this.viewCol = viewCol;
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this7 = this;

          var dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
            direction: this.settings.rtl ? 'rtl' : 'ltr'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this7.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          this.getAllProducts();
          window.scrollTo(0, 0);
        }
      }, {
        key: "onChangeCategory",
        value: function onChangeCategory(event) {
          if (event.target) {
            this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
          }
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_product_categories_service__WEBPACK_IMPORTED_MODULE_6__["ProductCategoriesService"]
      }];
    };

    ProductsComponent.propDecorators = {
      sidenav: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sidenav', {
          "static": true
        }]
      }],
      onWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }]
    };
    ProductsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-products',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/pages/products/products.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_product_categories_service__WEBPACK_IMPORTED_MODULE_6__["ProductCategoriesService"]])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/products.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.module.ts ***!
    \***************************************************/

  /*! exports provided: routes, ProductsModule */

  /***/
  function srcAppPagesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/pages/products/product/product.component.ts");
    /* harmony import */


    var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product/product-zoom/product-zoom.component */
    "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");

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
      component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
      pathMatch: 'full'
    }, {
      path: ':name',
      component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"]
    }, {
      path: ':id/:name',
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"]
    }];

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]],
      entryComponents: [_product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]]
    })], ProductsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-products-products-module-es5.js.map