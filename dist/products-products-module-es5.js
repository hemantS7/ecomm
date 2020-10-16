function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/add-product/add-product.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/add-product/add-product.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>{{(id) ? 'Edit' : 'Add New'}} Product</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" fxLayout=\"row wrap\">\n                <div fxFlex=\"40\" class=\"px-2\"> \n                    <p class=\"mt-1\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted px-1\">(max 8 images)</span></p>  \n                    <input-file formControlName=\"images\" fileLimit=\"8\" fileAccept=\"image/*\"></input-file>  \n                </div>\n                <div fxFlex=\"60\" class=\"px-2\">\n                    <div fxLayout=\"row wrap\">\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Name</mat-label>\n                                <input matInput formControlName=\"name\" required>\n                                <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error>\n                                <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Category</mat-label>\n                                <mat-select formControlName=\"categoryId\" required>\n                                    <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.id\">\n                                        <span>{{cat.name}}</span>\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"form.controls.categoryId.errors?.required\">Category is required</mat-error>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Old Price</mat-label>\n                                <input matInput formControlName=\"oldPrice\">\n                                <mat-error *ngIf=\"form.controls.oldPrice.errors?.required\">Old Price is required</mat-error>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>New Price</mat-label>\n                                <input matInput formControlName=\"newPrice\" required>\n                                <mat-error *ngIf=\"form.controls.newPrice.errors?.required\">New Price is required</mat-error>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Discount</mat-label>\n                                <input matInput formControlName=\"discount\" type=\"number\"> \n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Availibility Count</mat-label>\n                                <input matInput formControlName=\"availibilityCount\" type=\"number\"> \n                            </mat-form-field>\n                        </div> \n\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Color</mat-label>\n                                <mat-select formControlName=\"color\" multiple  (selectionChange)=\"onColorSelectionChange($event)\">\n                                    <mat-select-trigger>{{selectedColors}}</mat-select-trigger>\n                                    <mat-option *ngFor=\"let color of colors\" [value]=\"color\">\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                            <span>{{color}}</span>\n                                            <mat-icon [style.color]=\"color\">fiber_manual_record</mat-icon>\n                                        </div> \n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Size</mat-label>\n                                <mat-select formControlName=\"size\" multiple>\n                                    <mat-option *ngFor=\"let size of sizes\" [value]=\"size\">\n                                        <span>{{size}}</span>\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Weight</mat-label>\n                                <input matInput formControlName=\"weight\" type=\"number\"> \n                            </mat-form-field>\n                        </div> \n\n                        <div fxFlex=\"100\" class=\"px-1\">\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Description</mat-label> \n                                <textarea matInput formControlName=\"description\" rows=\"7\"></textarea> \n                            </mat-form-field> \n                        </div> \n                       \n\n\n                        <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\n                            <button mat-raised-button color=\"primary\" type=\"submit\">SUBMIT</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </mat-card-content>\n       \n       \n        \n    </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/categories.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/categories.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1\">\n    <mat-card class=\"p-0\"> \n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2\">\n            <h2>Category List</h2> \n            <button mat-raised-button color=\"primary\" (click)=\"openCategoryDialog(null)\">Add Category</button>\n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"mat-table admin-table\">\n            <div class=\"mat-header-row\">\n                <div class=\"mat-header-cell\">Name</div>\n                <div class=\"mat-header-cell\">Has SubCategory</div> \n                <div class=\"mat-header-cell\">Parent Category</div> \n                <div class=\"mat-header-cell\"></div>\n            </div>\n            <div *ngFor=\"let cat of categories | paginate: { itemsPerPage: count, currentPage: page }\" class=\"mat-row\">\n                <div class=\"mat-cell\">{{cat.name}}</div>\n                <div class=\"mat-cell\">\n                    <mat-icon class=\"text-muted\">{{ (cat.hasSubCategory) ? 'check_box' : 'check_box_outline_blank'}}</mat-icon> \n                </div>  \n                <div class=\"mat-cell\">\n                    {{ ( categories | filterById : cat.parentId )?.name }}\n                </div>   \n                <div class=\"mat-cell\">\n                    <div class=\"p-1 actions\">          \n                        <button mat-mini-fab color=\"primary\" matTooltip=\"Edit\" (click)=\"openCategoryDialog(cat)\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <button mat-mini-fab color=\"warn\" matTooltip=\"Delete\" class=\"mx-1\" (click)=\"remove(cat)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </div>\n                </div>      \n            </div>\n        </div>\n    </mat-card>\n\n    <div *ngIf=\"categories.length > 0\" fxLayout=\"row wrap\">\n        <div fxFlex=\"100\"> \n            <mat-card class=\"p-0 text-center\">           \n                <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/category-dialog/category-dialog.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/category-dialog/category-dialog.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsCategoriesCategoryDialogCategoryDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Category</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n    <div mat-dialog-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex=\"100\">\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                    <mat-label>Name</mat-label>\n                    <input matInput formControlName=\"name\" required>\n                    <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error> \n                </mat-form-field>\n            </div> \n            <div fxFlex=\"100\">\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                    <mat-label>Parent category</mat-label>\n                    <mat-select formControlName=\"parentId\">\n                        <mat-option *ngFor=\"let cat of data.categories\" [value]=\"cat.id\">\n                            <span>{{cat.name}}</span>\n                        </mat-option>\n                    </mat-select> \n                </mat-form-field>\n            </div> \n            <div fxFlex=\"100\" class=\"py-1\">    \n                <mat-checkbox formControlName=\"hasSubCategory\" color=\"primary\">Has SubCategory</mat-checkbox>\n            </div> \n        </div>\n    </div>\n    <div mat-dialog-actions>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\"> \n            <button mat-raised-button color=\"warn\" type=\"button\" mat-dialog-close>Close</button>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        </div> \n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-detail.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-detail.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsProductDetailProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" class=\"p-1\">\n    <div fxFlex=\"100\" fxFlex.gt-md=\"45\"> \n        <mat-card class=\"product-image\">\n            <mat-chip-list *ngIf=\"product?.discount\">\n                <mat-chip color=\"warn\" selected=\"true\">{{product?.discount}}% OFF</mat-chip>\n            </mat-chip-list>\n            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md><mat-icon>fullscreen</mat-icon></button>\n            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\"/>\n        </mat-card>  \n        <div class=\"small-carousel\"> \n            <div class=\"swiper-container\" [swiper]=\"config\">\n                <div class=\"swiper-wrapper\"> \n                    <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\n                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\n                            <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\"/>\n                            <div class=\"swiper-lazy-preloader\"></div>\n                        </mat-card>\n                    </div>                    \n                </div>\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \n            </div>\n        </div> \n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n        \n        <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\n            <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\n        </div>\n\n        <h2>{{product?.name}}</h2>\n        <div class=\"py-1 lh\">\n            <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product?.categoryId )?.name }}</span></p>\n            <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product?.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\n        </div>                 \n        <div class=\"py-1\">\n            <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\n        </div>\n        <p class=\"py-1 text-muted lh\">{{product?.description}}</p>\n\n        <div class=\"divider mt-1\"></div>\n        <div class=\"py-2\">\n            <h3 class=\"old-price text-muted\"><span *ngIf=\"product?.oldPrice\">${{product?.oldPrice | number : '1.2-2'}}</span></h3>\n            <h2 class=\"new-price\">${{product?.newPrice}}</h2>\n        </div>        \n\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"details text-muted py-1\">\n            <div *ngIf=\"product?.color\" class=\"color\">\n                <span class=\"fw-500\">Select Color:</span>\n                <button mat-raised-button *ngFor=\"let color of product?.color\" [style.background]=\"color\">&nbsp;</button>              \n            </div>\n            <div *ngIf=\"product?.size\" class=\"size\" ngClass.xs=\"mt-1\">\n                <span class=\"fw-500\">Select Size:</span>\n                <button mat-raised-button *ngFor=\"let size of product?.size\">{{size}}</button>\n            </div>\n        </div>\n\n        <div class=\"py-1\">\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls> \n        </div>\n\n        <div class=\"divider\"></div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\n            <button mat-button><mat-icon>mail_outline</mat-icon> Email to a Friend</button>\n            <button mat-icon-button><mat-icon>share</mat-icon></button>\n        </div>\n\n    </div>\n</div>\n\n<div fxLayout=\"row wrap\" class=\"p-1 mt-2\">\n    <div fxFlex=\"100\">\n        <mat-card> \n            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">       \n                <mat-tab label=\"Description\">\n                    <div class=\"full-desc lh\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla metus. Maecenas commodo turpis dui, porttitor tincidunt enim mollis a. Curabitur eu velit mi. Nullam congue turpis id metus sollicitudin, id cursus nulla laoreet. Proin commodo eu felis at malesuada. Nulla ac facilisis justo, eget vulputate ex. Nulla nec laoreet nulla. Cras auctor leo at diam congue, quis convallis urna pulvinar. Nunc ut mi nulla. Nunc ligula massa, vulputate sed scelerisque sit amet, dapibus semper est. Sed sed blandit turpis. Vestibulum id porttitor ligula, at iaculis ligula. Pellentesque vel tellus sit amet mauris aliquet bibendum id et lorem.</p>\n                        <ul class=\"px-2 mt-1\">\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\n                            <li>Nam sagittis augue at pretium pharetra.</li>\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\n                            <li>Duis aliquam urna in sapien cursus consequat.</li>\n                        </ul>\n                        <p class=\"mt-1\">Duis eu felis ultricies urna pharetra efficitur nec non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur posuere eu justo eget mollis. Sed semper accumsan urna vel rutrum. Nulla condimentum quis lacus ut semper. Quisque at massa pretium, porta ligula ut, rutrum elit. Pellentesque et orci sit amet dolor laoreet tempor sed eu sem. Morbi lacinia pellentesque tellus euismod eleifend.</p>\n                        <p class=\"mt-1\">Quisque fringilla eros id ligula luctus, a gravida augue sodales. Sed eget augue ut lectus condimentum volutpat. Morbi quis nunc viverra, gravida arcu quis, varius metus. Praesent tincidunt ipsum est, quis molestie ligula efficitur ut. Nunc interdum erat eu tortor maximus suscipit. Vivamus nec laoreet dui. Nullam dignissim laoreet metus quis pretium.</p>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Additional information\">\n                    <div class=\"full-desc lh\">\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                        <ul class=\"px-2 mt-1\">\n                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                            <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\n                            <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\n                            <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\n                            <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\n                            <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\n                        </ul>\n                        <ul class=\"px-2 mt-1\">\n                            <li>Phasellus eu justo dictum, varius eros ut, posuere sapien.</li>\n                            <li>Nulla eu erat sit amet enim lobortis rhoncus.</li>\n                            <li>Etiam eu mauris in massa convallis ornare non id ex.</li>\n                            <li>Nam sagittis augue at pretium pharetra.</li>\n                            <li>Sed a sem id massa egestas porta a sit amet felis.</li>\n                            <li>Duis aliquam urna in sapien cursus consequat. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\n                        </ul>\n                    </div>\n                \n\n                </mat-tab>\n                <mat-tab label=\"Reviews\">\n                    <div class=\"full-desc lh\">\n                        <mat-list class=\"reviews\">\n                            <mat-list-item class=\"h-100 py-1\">\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\n                                <p matLine fxLayoutAlign=\"start center\">\n                                    <span class=\"fw-500\">Bruno Vespa</span> \n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Dissatisfied\" matTooltipPosition=\"after\">sentiment_dissatisfied</mat-icon>\n                                </p>\n                                <p matLine class=\"text-muted\"><small>13 January, 2018 at 7:09</small></p>\n                                <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\n                            </mat-list-item>\n                            <mat-list-item class=\"h-100 py-1\">\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\n                                <p matLine fxLayoutAlign=\"start center\">\n                                    <span class=\"fw-500\">Julia Aniston</span> \n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Very Satisfied\" matTooltipPosition=\"after\">sentiment_very_satisfied</mat-icon>\n                                </p>\n                                <p matLine class=\"text-muted\"><small>04 February, 2018 at 10:22</small></p>\n                                <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\n                            </mat-list-item>\n                            <mat-list-item class=\"h-100 py-1\">\n                                <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\n                                <p matLine fxLayoutAlign=\"start center\">\n                                    <span class=\"fw-500\">Andy Warhol</span> \n                                    <mat-icon class=\"text-muted px-1\" matTooltip=\"Neutral\" matTooltipPosition=\"after\">sentiment_neutral</mat-icon>\n                                </p>\n                                <p matLine class=\"text-muted\"><small>14 February, 2018 at 11:10</small></p>\n                                <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\n                            </mat-list-item>\n                        </mat-list>\n                        \n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\n                        <div class=\"divider\"></div>\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\n                            <span>Your Rating:</span>\n                            <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon></button>\n                            <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon></button>\n                            <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon></button>\n                            <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon></button>\n                            <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\"><mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon></button>\n                        </h3>\n\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxLayout=\"row wrap\">\n                            <div fxFlex=\"100\" class=\"px-1 mt-1\">\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                    <mat-label>Your review</mat-label>\n                                    <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required rows=\"5\"></textarea>\n                                    <mat-error *ngIf=\"form.controls.review.errors?.required\">Review is required</mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                    <mat-label>Your name</mat-label>\n                                    <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\n                                    <mat-error *ngIf=\"form.controls.name.errors?.required\">Name is required</mat-error>\n                                    <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\n                                </mat-form-field> \n                            </div>\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                    <mat-label>Your email</mat-label>\n                                    <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\n                                    <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\n                                    <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n                                </mat-form-field> \n                            </div>\n                            <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\n                                <button mat-raised-button color=\"primary\" type=\"submit\">SUBMIT REVIEW</button>\n                            </div>\n                        </form>\n\n                        \n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </mat-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-zoom/product-zoom.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-zoom/product-zoom.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsProductDetailProductZoomProductZoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-list/product-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-list/product-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProductsProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\n    <div *ngFor=\"let product of products | paginate: { itemsPerPage: count, currentPage: page }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"p-1\">\n        <mat-card class=\"product-item text-center\">\n            <mat-chip-list *ngIf=\"product.discount\">\n                <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\n            </mat-chip-list> \n            <img [src]=\"product.images[0].medium\" alt=\"\"> \n            <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \n            <div class=\"title text-truncate\">\n                {{product.name}}\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                    <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\n                    <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\n                </div>\n                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\n            </div>                            \n            <div class=\"divider mt-2\"></div>\n            <div class=\"icons\">\n                <a [routerLink]=\"['/admin/products/add-product', product.id]\" mat-mini-fab color=\"primary\" matTooltip=\"Edit\"><mat-icon>edit</mat-icon></a>\n                <span class=\"px-1\"> <a [routerLink]=\"['/admin/products/product-detail', product.id]\" mat-mini-fab color=\"primary\" matTooltip=\"View\"><mat-icon>remove_red_eye</mat-icon></a></span>\n                <button mat-mini-fab color=\"warn\" matTooltip=\"Remove\" (click)=\"remove(product)\"><mat-icon>delete</mat-icon></button> \n            </div>\n        </mat-card>\n    </div>\n</div>\n\n<div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" class=\"p-1\"> \n        <mat-card class=\"p-0 text-center\">           \n            <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\n        </mat-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/admin/products/add-product/add-product.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/products/add-product/add-product.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsAddProductAddProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/products/add-product/add-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/products/add-product/add-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppAdminProductsAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(appService, formBuilder, activatedRoute) {
        _classCallCheck(this, AddProductComponent);

        this.appService = appService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#696969"];
        this.sizes = ["S", "M", "L", "XL", "2XL", "32", "36", "38", "46", "52", "13.3\"", "15.4\"", "17\"", "21\"", "23.4\""];
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.form = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
            'images': null,
            "oldPrice": null,
            "newPrice": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "discount": null,
            "description": null,
            "availibilityCount": null,
            "color": null,
            "size": null,
            "weight": null,
            "categoryId": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getCategories();
          this.sub = this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
              _this.id = params['id'];

              _this.getProductById();
            }
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this2 = this;

          this.appService.getCategories().subscribe(function (data) {
            _this2.categories = data;

            _this2.categories.shift();
          });
        }
      }, {
        key: "getProductById",
        value: function getProductById() {
          var _this3 = this;

          this.appService.getProductById(this.id).subscribe(function (data) {
            _this3.form.patchValue(data);

            _this3.selectedColors = data.color;
            var images = [];
            data.images.forEach(function (item) {
              var image = {
                link: item.medium,
                preview: item.medium
              };
              images.push(image);
            });

            _this3.form.controls.images.setValue(images);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.form.value);
        }
      }, {
        key: "onColorSelectionChange",
        value: function onColorSelectionChange(event) {
          if (event.value) {
            this.selectedColors = event.value.join();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    AddProductComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-product',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/add-product/add-product.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-product.component.scss */
      "./src/app/admin/products/add-product/add-product.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/categories/categories.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/products/categories/categories.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/products/categories/categories.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/products/categories/categories.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppAdminProductsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./category-dialog/category-dialog.component */
    "./src/app/admin/products/categories/category-dialog/category-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");

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

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent(appService, dialog, appSettings) {
        _classCallCheck(this, CategoriesComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.appSettings = appSettings;
        this.categories = [];
        this.count = 6;
        this.settings = this.appSettings.settings;
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this4 = this;

          this.appService.getCategories().subscribe(function (data) {
            _this4.categories = data;

            _this4.categories.shift();
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "openCategoryDialog",
        value: function openCategoryDialog(data) {
          var _this5 = this;

          var dialogRef = this.dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CategoryDialogComponent"], {
            data: {
              category: data,
              categories: this.categories
            },
            panelClass: ['theme-dialog'],
            autoFocus: false,
            direction: this.settings.rtl ? 'rtl' : 'ltr'
          });
          dialogRef.afterClosed().subscribe(function (category) {
            if (category) {
              var index = _this5.categories.findIndex(function (x) {
                return x.id == category.id;
              });

              if (index !== -1) {
                _this5.categories[index] = category;
              } else {
                var last_category = _this5.categories[_this5.categories.length - 1];
                category.id = last_category.id + 1;

                _this5.categories.push(category);
              }
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(category) {
          var _this6 = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want remove this category?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this6.categories.indexOf(category);

              if (index !== -1) {
                _this6.categories.splice(index, 1);
              }
            }
          });
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
      }];
    };

    CategoriesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-categories',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/categories.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./categories.component.scss */
      "./src/app/admin/products/categories/categories.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/categories/category-dialog/category-dialog.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/products/categories/category-dialog/category-dialog.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsCategoriesCategoryDialogCategoryDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXMvY2F0ZWdvcnktZGlhbG9nL2NhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/products/categories/category-dialog/category-dialog.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/products/categories/category-dialog/category-dialog.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CategoryDialogComponent */

  /***/
  function srcAppAdminProductsCategoriesCategoryDialogCategoryDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDialogComponent", function () {
      return CategoryDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

    var CategoryDialogComponent = /*#__PURE__*/function () {
      function CategoryDialogComponent(dialogRef, data, fb) {
        _classCallCheck(this, CategoryDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
      }

      _createClass(CategoryDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            id: 0,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hasSubCategory: false,
            parentId: 0
          });

          if (this.data.category) {
            this.form.patchValue(this.data.category);
          }

          ;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.form.value);

          if (this.form.valid) {
            this.dialogRef.close(this.form.value);
          }
        }
      }]);

      return CategoryDialogComponent;
    }();

    CategoryDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CategoryDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-category-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./category-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/categories/category-dialog/category-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./category-dialog.component.scss */
      "./src/app/admin/products/categories/category-dialog/category-dialog.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CategoryDialogComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/product-detail/product-detail.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/products/product-detail/product-detail.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsProductDetailProductDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card.product-image {\n  padding: 6px;\n  text-align: center;\n}\n.mat-card.product-image button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n}\n.mat-card.product-image img {\n  max-width: 100%;\n}\n.mat-card.product-image .mat-chip-list {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  pointer-events: none;\n}\n.small-carousel {\n  margin-top: 8px;\n}\n.small-carousel .swiper-container {\n  padding: 2px;\n}\n.small-carousel .swiper-container .swiper-slide {\n  text-align: center;\n}\n.small-carousel .swiper-container .swiper-slide img {\n  max-width: 100%;\n}\n.small-carousel .swiper-button-next.swiper-button-disabled,\n.small-carousel .swiper-button-prev.swiper-button-disabled {\n  opacity: 0;\n}\n.small-carousel .swiper-button-prev {\n  left: -10px;\n}\n.small-carousel .swiper-button-next {\n  right: -10px;\n}\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px;\n}\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0;\n}\n.full-desc {\n  padding: 30px 40px;\n}\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFBSTs7RUFFSSxVQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdBO0VBQ0ksa0JBQUE7QUFBSjtBQUlBO0VBQ0k7SUFDSSxlQUFBO0lBQ0Esc0NBQUE7RUFETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWF0LWNoaXAtbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4OyBcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGwtY2Fyb3VzZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgLnN3aXBlci1zbGlkZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsIFxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVke1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2e1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC56b29tLXZpZXdlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5tdC0xNntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC5yZXZpZXdze1xyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWF2YXRhci5yZXZpZXctYXV0aG9ye1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZS50ZXh0e1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuLmZ1bGwtZGVzY3tcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHsgIFxyXG4gICAgLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgaW1ne1xyXG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcclxuICAgICAgICBjdXJzb3I6dXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290aGVycy96b29tLnN2ZycpIDEwIDEwLCB6b29tLWluO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/products/product-detail/product-detail.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/products/product-detail/product-detail.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppAdminProductsProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
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


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-zoom/product-zoom.component */
    "./src/app/admin/products/product-detail/product-zoom/product-zoom.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

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

    var ProductDetailComponent = /*#__PURE__*/function () {
      function ProductDetailComponent(appService, activatedRoute, dialog, formBuilder) {
        _classCallCheck(this, ProductDetailComponent);

        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.config = {};
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sub = this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
              _this7.getProductById(params['id']);
            } else {
              _this7.getProductById(1);
            }
          });
          this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_7__["emailValidator"]])]
          });
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
          var _this8 = this;

          this.appService.getProductById(id).subscribe(function (data) {
            _this8.product = data;
            _this8.image = data.images[0].medium;
            _this8.zoomImage = data.images[0].big;
            setTimeout(function () {
              _this8.config.observer = true; // this.directiveRef.setIndex(0);
            });
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
          this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__["ProductZoomComponent"], {
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
        value: function onSubmit() {
          if (this.form.valid) {
            console.log(this.form.value);
          }
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    ProductDetailComponent.propDecorators = {
      zoomViewer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['zoomViewer']
      }],
      directiveRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]]
      }]
    };
    ProductDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-detail',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-detail.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product-detail.component.scss */
      "./src/app/admin/products/product-detail/product-detail.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/product-detail/product-zoom/product-zoom.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/products/product-detail/product-zoom/product-zoom.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsProductDetailProductZoomProductZoomComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.zoom-dialog .mat-dialog-container .controls {\n  position: relative;\n}\n.zoom-dialog .mat-dialog-container .controls button {\n  position: absolute;\n  top: -44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-in {\n  right: 44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-out {\n  right: 0;\n}\n.zoom-dialog .mat-dialog-container .controls .close {\n  right: -44px;\n}\n.zoom-dialog .mat-dialog-container .viewer {\n  width: 100%;\n  text-align: center;\n}\n.zoom-dialog .mat-dialog-container .viewer img {\n  max-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDRCQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtBQUVoQjtBQUFZO0VBQ0ksUUFBQTtBQUVoQjtBQUFZO0VBQ0ksWUFBQTtBQUVoQjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGNBQUE7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20tZGlhbG9ne1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRyb2xze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20taW57XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDRweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnpvb20tb3V0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDRweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZXdlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/products/product-detail/product-zoom/product-zoom.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/products/product-detail/product-zoom/product-zoom.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductZoomComponent */

  /***/
  function srcAppAdminProductsProductDetailProductZoomProductZoomComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-detail/product-zoom/product-zoom.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./product-zoom.component.scss */
      "./src/app/admin/products/product-detail/product-zoom/product-zoom.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])], ProductZoomComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/product-list/product-list.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/products/product-list/product-list.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProductsProductListProductListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/products/product-list/product-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/products/product-list/product-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppAdminProductsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(appService, dialog) {
        _classCallCheck(this, ProductListComponent);

        this.appService = appService;
        this.dialog = dialog;
        this.products = [];
        this.viewCol = 25;
        this.count = 12;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
          }

          ;
          this.getAllProducts();
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this9 = this;

          this.appService.getProducts("featured").subscribe(function (data) {
            _this9.products = data; //for show more product  

            for (var index = 0; index < 3; index++) {
              _this9.products = _this9.products.concat(_this9.products);
            }
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          window.scrollTo(0, 0);
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          window.innerWidth < 1280 ? this.viewCol = 33.3 : this.viewCol = 25;
        }
      }, {
        key: "remove",
        value: function remove(product) {
          var _this10 = this;

          var dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: {
              title: "Confirm Action",
              message: "Are you sure you want delete this product?"
            }
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var index = _this10.products.indexOf(product);

              if (index !== -1) {
                _this10.products.splice(index, 1);
              }
            }
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ProductListComponent.propDecorators = {
      onWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }]
    };
    ProductListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/products/product-list/product-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product-list.component.scss */
      "./src/app/admin/products/product-list/product-list.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/admin/products/products.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/products/products.module.ts ***!
    \***************************************************/

  /*! exports provided: routes, ProductsModule */

  /***/
  function srcAppAdminProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var ngx_input_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-input-file */
    "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/admin/products/product-list/product-list.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/admin/products/product-detail/product-detail.component.ts");
    /* harmony import */


    var _product_detail_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-detail/product-zoom/product-zoom.component */
    "./src/app/admin/products/product-detail/product-zoom/product-zoom.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/admin/products/add-product/add-product.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/admin/products/categories/categories.component.ts");
    /* harmony import */


    var _categories_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./categories/category-dialog/category-dialog.component */
    "./src/app/admin/products/categories/category-dialog/category-dialog.component.ts");

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
      redirectTo: 'product-list',
      pathMatch: 'full'
    }, {
      path: 'categories',
      component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
      data: {
        breadcrumb: 'Categories'
      }
    }, {
      path: 'product-list',
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
      data: {
        breadcrumb: 'Product List'
      }
    }, {
      path: 'product-detail',
      component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"],
      data: {
        breadcrumb: 'Product Detail'
      }
    }, {
      path: 'product-detail/:id',
      component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"],
      data: {
        breadcrumb: 'Product Detail'
      }
    }, {
      path: 'add-product',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"],
      data: {
        breadcrumb: 'Add Product'
      }
    }, {
      path: 'add-product/:id',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"],
      data: {
        breadcrumb: 'Edit Product'
      }
    }];

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"], _product_detail_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"], _categories_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"], ngx_input_file__WEBPACK_IMPORTED_MODULE_7__["InputFileModule"]]
    })], ProductsModule);
    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map