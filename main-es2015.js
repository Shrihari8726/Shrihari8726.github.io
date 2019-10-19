(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/Driverinfo/Driverinfo.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/Driverinfo/Driverinfo.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Driver Info</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"driverform\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Driver Name*\" formControlName=\"drivername\"/>\n        </mat-form-field>\n      </p>\n      <!-- <div *ngIf=\"custname.touched && custname.invalid\">Name is invalid</div> -->\n\n\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Driver Licence Number*\" formControlName=\"driverlicence\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Adhar Number*\" formControlName=\"adharno\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Date of Birth*\" formControlName=\"dob\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Phone Number*\" formControlName=\"phone\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Driver Address1*\" formControlName=\"driverAddress1\"></textarea>\n        </mat-form-field>\n      </p>\n\n      <p>\n          <mat-form-field>\n            <textarea matInput placeholder=\"Driver Address2*\" formControlName=\"driverAddress2\"></textarea>\n          </mat-form-field>\n      </p>\n\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content> \n</mat-card> \n\n<!-- <p>Customer Working</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/consignment/consignment.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/consignment/consignment.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Consignment Info</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"consignform\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"From*\" aria-label=\"State\" [matAutocomplete]=\"auto\" formControlName=\"consignor\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let vendor of vendorList\" [value]=\"vendor.name\">\n              <span>{{vendor.name}}</span> \n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>  \n      </p>\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"To*\" aria-label=\"State\" [matAutocomplete]=\"auto\" formControlName=\"consignee\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let customer of customerList\" [value]=\"customer._id\">\n              <span>{{customer._id}}</span> \n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> \n      </p>\n      <!-- <div *ngIf=\"custname.touched && custname.invalid\">Name is invalid</div> -->\n      <p>\n        <mat-radio-group formControlName=\"deliverytype\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let dtype of dtypes\" [value]=\"dtype\">\n            {{dtype}}\n          </mat-radio-button>\n        </mat-radio-group>\n      </p>\n\n      <div formArrayName=\"goods\">\n        <h3>Goods</h3> <button (click)=\"this.consignform.get('goods').push(addGoods())\">Add Goods</button>\n    \n        <div *ngFor=\"let item of consignform.get('goods').controls; let i=index\" [formGroup]=\"item\">\n          <!-- The repeated alias template -->\n          <label>\n            Goods:\n\n            <input type=\"text\" [attr.id]=\"'description'+i\" placeholder=\"description\" formControlName=\"description\">\n            <input type=\"number\" [attr.id]=\"'capacity'+i\" placeholder=\"capacity\" formControlName=\"capacity\">\n            <input type=\"number\" [attr.id]=\"'price'+i\" placeholder=\"price\" formControlName=\"price\">\n            <input type=\"number\" [attr.id]=\"'frieght_charges'+i\" placeholder=\"frieght_charges\" formControlName=\"frieght_charges\">\n            \n          </label>\n        </div>\n      </div>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Additonal Charges*\" formControlName=\"additonal_charges\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Handling Charges*\" formControlName=\"handling_charges\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Statiscal Charges*\" formControlName=\"statiscal_charges\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Other Charges*\" formControlName=\"other_charges\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Total Cost*\" formControlName=\"total_cost\" />\n        </mat-form-field>\n      </p>\n\n\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content> \n</mat-card> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/customer/customer.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/customer/customer.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Customer Info</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"custform\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Name*\" formControlName=\"custname\"/>\n        </mat-form-field>\n      </p>\n      <!-- <div *ngIf=\"custname.touched && custname.invalid\">Name is invalid</div> -->\n      <p>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Address*\" formControlName=\"custaddress\"></textarea>\n      </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"GST Number*\" formControlName=\"gstno\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Phone Number*\" formControlName=\"phone\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"email\" matInput placeholder=\"Email*\" formControlName=\"email\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Contact Person*\" formControlName=\"contactperson\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Contact Person Phone Number*\" formControlName=\"contactpersonphone\" />\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content> \n</mat-card> \n\n<!-- <p>Customer Working</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"headbox\">\n    <div class=\"logoimg\"></div>\n\n    <i class=\"material-icons\" *ngIf=\"!menulistbanner\" (click)=\"toggleMenu()\">\n        list\n    </i>\n    <!-- <div class=\"logout\" (click)=\"callLogout()\">\n      <i class=\"material-icons\">power_settings_new</i>\n      <span>Logout</span>\n    </div> -->\n  </div>\n</header>\n<div *ngIf=\"menulistbanner\" class=\"menulistbox\">\n  <div  *ngFor=\"let link of links;\" class=\"menulist\">\n    <a matLine (click)=\"showInfo(link)\">{{ link.name }}</a>\n  </div>\n  </div>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" *ngIf=\"!menuToggle\" opened class=\"example-sidenav\" [fixedInViewport]=\"false\" \n    [fixedTopGap]=\"0\" [fixedBottomGap]=\"0\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let link of links;\">\n         <a matLine (click)=\"showInfo(link)\">{{ link.name }}</a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!-- <div class=\"example-container\" >\n    <mat-sidenav #sidenav mode=\"side\" *ngIf=\"!menuToggle\" >\n      <div>\n        <div *ngFor=\"let link of links;\">\n           <a matLine (click)=\"showInfo(link)\">{{ link.name }}</a>\n        </div>\n      </mat-nav-list>\n    </div> -->\n\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n<footer></footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-customer/manage-customer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-customer/manage-customer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addNewCust\">\n  <button mat-button color=\"primary\" (click)=\"addCustomer()\">Add New Customer</button>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"custname\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.custname}} </td>\n  </ng-container>\n\n  <!-- Phone Column -->\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef> Phone </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n  </ng-container>\n\n  <!-- Email Column -->\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef> Email </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td class=\"editclass\" mat-cell *matCellDef=\"let element\" (click)=\"editCustomer(element)\"><a> Edit</a></td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vehicleinfo/vehicleinfo.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/vehicleinfo/vehicleinfo.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Vehicle Info</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"vehicleform\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Vehicle Number*\" formControlName=\"vehicleno\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Vehicle Registration Number*\" formControlName=\"vehicleregno\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Licence Exp Date*\" formControlName=\"licenceexpdate\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <!-- <div>Vehicle Type: </div> -->\n        <mat-radio-group formControlName=\"vehicletype\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let vtype of vtypes\" [value]=\"vtype\">\n            {{vtype}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <!--<mat-radio-button class=\"example-radio-button\" *ngFor=\"let vtype of vtypes\" [value]=\"vtype\" formControlName=\"vehicletype\">\n          {{vtype}}\n        </mat-radio-button>-->\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Road Tax Exp Date*\" formControlName=\"roadtaxexpdate\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Service Date*\" formControlName=\"servicedate\" />\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content> \n</mat-card> \n\n<!-- <p>Customer Working</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vendor/vendor.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/vendor/vendor.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Vendor Form</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"vendform\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Name*\" formControlName=\"vendname\"/>\n        </mat-form-field>\n      </p>\n      <!-- <div *ngIf=\"custname.touched && custname.invalid\">Name is invalid</div> -->\n      <p>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Address*\" formControlName=\"vendaddress\"></textarea>\n      </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Phone Number*\" formControlName=\"phone\" />\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"email\" matInput placeholder=\"Email*\" formControlName=\"email\" />\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content> \n</mat-card> \n\n<!-- <p>Customer Working</p> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"login-container\">\n<mat-form-field>\n  <input matInput placeholder=\"Username\">\n</mat-form-field>\n<mat-form-field>\n  <input matInput placeholder=\"Password\">\n</mat-form-field>\n<button mat-button color=\"primary\" class=\"nav-link\" routerLink=\"/home/customer\">Submit</button>\n</div> -->\n\n<mat-card>\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\"/>\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" />\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/customer/customer.component */ "./src/app/home/customer/customer.component.ts");
/* harmony import */ var _home_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/vendor/vendor.component */ "./src/app/home/vendor/vendor.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _home_manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/manage-customer/manage-customer.component */ "./src/app/home/manage-customer/manage-customer.component.ts");
/* harmony import */ var _home_Driverinfo_Driverinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/Driverinfo/Driverinfo.component */ "./src/app/home/Driverinfo/Driverinfo.component.ts");
/* harmony import */ var _home_consignment_consignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/consignment/consignment.component */ "./src/app/home/consignment/consignment.component.ts");
/* harmony import */ var _home_vehicleinfo_vehicleinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/vehicleinfo/vehicleinfo.component */ "./src/app/home/vehicleinfo/vehicleinfo.component.ts");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        runGuardsAndResolvers: 'always',
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'customer', component: _home_manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_8__["ManageCustomerComponent"] },
            { path: 'customerdetail', component: _home_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
            { path: 'customerdetail/:id', component: _home_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
            { path: 'vendor', component: _home_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_6__["VendorComponent"] },
            { path: 'vehicle', component: _home_vehicleinfo_vehicleinfo_component__WEBPACK_IMPORTED_MODULE_11__["VehicleinfoComponent"] },
            { path: 'driver', component: _home_Driverinfo_Driverinfo_component__WEBPACK_IMPORTED_MODULE_9__["DriverinfoComponent"] },
            { path: 'consignment', component: _home_consignment_consignment_component__WEBPACK_IMPORTED_MODULE_10__["ConsignmentComponent"] }
        ]
    },
    { path: '', redirectTo: '/customer', pathMatch: 'full' },
    { path: '**', redirectTo: '/customer', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'vehical-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/customer/customer.component */ "./src/app/home/customer/customer.component.ts");
/* harmony import */ var _home_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/vendor/vendor.component */ "./src/app/home/vendor/vendor.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _home_manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/manage-customer/manage-customer.component */ "./src/app/home/manage-customer/manage-customer.component.ts");
/* harmony import */ var _home_Driverinfo_Driverinfo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/Driverinfo/Driverinfo.component */ "./src/app/home/Driverinfo/Driverinfo.component.ts");
/* harmony import */ var _home_vehicleinfo_vehicleinfo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/vehicleinfo/vehicleinfo.component */ "./src/app/home/vehicleinfo/vehicleinfo.component.ts");
/* harmony import */ var _home_consignment_consignment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/consignment/consignment.component */ "./src/app/home/consignment/consignment.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _home_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_9__["VendorComponent"],
            _home_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
            _home_Driverinfo_Driverinfo_component__WEBPACK_IMPORTED_MODULE_16__["DriverinfoComponent"],
            _home_vehicleinfo_vehicleinfo_component__WEBPACK_IMPORTED_MODULE_17__["VehicleinfoComponent"],
            _home_consignment_consignment_component__WEBPACK_IMPORTED_MODULE_18__["ConsignmentComponent"],
            _home_manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_15__["ManageCustomerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [_shared_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/Driverinfo/Driverinfo.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/Driverinfo/Driverinfo.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    min-width: 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9Ecml2ZXJpbmZvL0RyaXZlcmluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9Ecml2ZXJpbmZvL0RyaXZlcmluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/Driverinfo/Driverinfo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/Driverinfo/Driverinfo.component.ts ***!
  \*********************************************************/
/*! exports provided: DriverinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverinfoComponent", function() { return DriverinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DriverinfoComponent = class DriverinfoComponent {
    constructor() {
        this.driverform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            drivername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            driverlicence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            adharno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            driverAddress1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            driverAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
    }
};
DriverinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Driverinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Driverinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/Driverinfo/Driverinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Driverinfo.component.css */ "./src/app/home/Driverinfo/Driverinfo.component.css")).default]
    })
], DriverinfoComponent);



/***/ }),

/***/ "./src/app/home/consignment/consignment.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/consignment/consignment.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    min-width: 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-radio-button{\r\n    border: 5px;\r\n}\r\n\r\nlabel{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb25zaWdubWVudC9jb25zaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb25zaWdubWVudC9jb25zaWdubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbntcclxuICAgIGJvcmRlcjogNXB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/consignment/consignment.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/consignment/consignment.component.ts ***!
  \***********************************************************/
/*! exports provided: ConsignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentComponent", function() { return ConsignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");




let ConsignmentComponent = class ConsignmentComponent {
    constructor(fb, sharedService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.dtypes = ['Direct delivery', 'Shead delivery'];
        this.consignform = this.fb.group({
            consignor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            consignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            deliverytype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            additonal_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            handling_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            statiscal_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            other_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            goods: this.fb.array([
                this.fb.group({
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    frieght_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                })
            ]),
            STATUS: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            current_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            current_place: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    get goods() {
        return this.consignform.get('goods');
    }
    ngOnInit() {
        this.sharedService.sendGetVendor().subscribe((data) => {
            console.log(data);
            this.vendorList = data;
        });
        this.sharedService.sendGetCustomer().subscribe((data1) => {
            console.log(data1);
            this.customerList = data1;
        });
    }
    submit() {
        console.log(this.consignform.value);
    }
    addGoods() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            frieght_charges: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
};
ConsignmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
ConsignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consignment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/consignment/consignment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consignment.component.css */ "./src/app/home/consignment/consignment.component.css")).default]
    })
], ConsignmentComponent);



/***/ }),

/***/ "./src/app/home/customer/customer.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/customer/customer.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    min-width: 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/customer/customer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/customer/customer.component.ts ***!
  \*****************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let CustomerComponent = class CustomerComponent {
    constructor(route, sharedService, http) {
        this.route = route;
        this.sharedService = sharedService;
        this.http = http;
        this.custform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            custname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            custaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gstno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contactperson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contactpersonphone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id') || 0;
        var customer = this.sharedService.customerList.filter((data) => {
            return data.custname == this.id;
        });
        console.log(customer);
        for (var key in this.custform.controls) {
            if (customer[0].hasOwnProperty(key)) {
                this.custform.controls[key].setValue(customer[0][key]);
            }
        }
    }
    submit() {
        console.log(this.custform.value);
    }
};
CustomerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"] }
];
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/home/customer/customer.component.css")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\r\n    background: linear-gradient(180deg,#00bdf2,#00b3f0 18%,#0066b3 77%,#004985);\r\n    height: 60px;\r\n    width: 100%;\r\n}\r\n\r\n.logoimg{\r\n    height: 60px;\r\n    width: 210px;\r\n    background: URL('assets/logo.png');\r\n}\r\n\r\n.logout{\r\n    height:60px;\r\n    width:50px;\r\n    position: relative;\r\n    right: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.menulistbox{\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menulistbox{\r\n    color: #FFF;\r\n    background-color:#3995f7;\r\n    padding:5px;\r\n    border: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.headbox{\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.material-icons{\r\n    font-size: 30px;\r\n    color: aliceblue;\r\n}\r\n\r\nspan{\r\n    color: aliceblue;\r\n}\r\n\r\n.material-icons{\r\n    color: #FFF;\r\n    font-size: 55px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* mat-sidenav{\r\n    display: none;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzAwYmRmMiwjMDBiM2YwIDE4JSwjMDA2NmIzIDc3JSwjMDA0OTg1KTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9nb2ltZ3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGJhY2tncm91bmQ6IFVSTCgnYXNzZXRzL2xvZ28ucG5nJyk7XHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnVsaXN0Ym94e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWVudWxpc3Rib3h7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM5OTVmNztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcblxyXG4uaGVhZGJveHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBtYXQtc2lkZW5hdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.links = [
            {
                name: "Customer", url: "/customer"
            }, {
                name: "Vehicle", url: "/vehicle"
            }, {
                name: "Vendor", url: "/vendor"
            }, {
                name: "Driver", url: "/driver"
            }, {
                name: "Consignment", url: "/consignment"
            }, {
                name: "Trip", url: "/customer"
            }, {
                name: "Logout", url: ""
            }
        ];
        this.menuToggle = true;
        this.onResize();
    }
    onResize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenWidth);
        if (this.screenWidth < 500) {
            console.log(this.menuToggle);
            this.menuToggle = false;
            this.menulistbanner = false;
        }
        else {
            this.menuToggle = true;
            this.menulistbanner = true;
        }
    }
    ngOnInit() {
    }
    toggleMenu(sidenav) {
        this.menuToggle = !this.menuToggle;
    }
    showInfo(link) {
        if (link.name == 'Logout') {
            localStorage.clear();
            this.router.navigate([link.url]);
        }
        else {
            if (this.screenWidth < 500) {
                this.router.navigate([link.url]);
                this.menuToggle = false;
            }
            else {
                this.router.navigate([link.url]);
            }
        }
    }
    callLogout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], HomeComponent.prototype, "onResize", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/manage-customer/manage-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/manage-customer/manage-customer.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    width:70%;\r\n    margin: 10px;\r\n}\r\n\r\n.editclass{\r\n    cursor: pointer;\r\n}\r\n\r\nth{\r\n    font-size: 18px;\r\n    color: rgb(54, 53, 53);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYW5hZ2UtY3VzdG9tZXIvbWFuYWdlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tYW5hZ2UtY3VzdG9tZXIvbWFuYWdlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmVkaXRjbGFzc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGh7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiKDU0LCA1MywgNTMpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/manage-customer/manage-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/manage-customer/manage-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCustomerComponent", function() { return ManageCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ManageCustomerComponent = class ManageCustomerComponent {
    constructor(sharedService, router, http) {
        this.sharedService = sharedService;
        this.router = router;
        this.http = http;
        this.customerList = [];
        this.displayedColumns = ['custname', 'phone', 'email', 'action'];
    }
    ngOnInit() {
        this.customerList = this.sharedService.customerList;
        this.sharedService.sendGetCustomer().subscribe((data) => {
            console.log(data);
            //this.customerList = data;
        });
        this.dataSource = this.customerList;
    }
    addCustomer() {
        this.router.navigate(['/customerdetail']);
    }
    editCustomer(el) {
        this.router.navigate(['/customerdetail/', el.custname]);
    }
};
ManageCustomerComponent.ctorParameters = () => [
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"] }
];
ManageCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/manage-customer/manage-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-customer.component.css */ "./src/app/home/manage-customer/manage-customer.component.css")).default]
    })
], ManageCustomerComponent);



/***/ }),

/***/ "./src/app/home/vehicleinfo/vehicleinfo.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/vehicleinfo/vehicleinfo.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    min-width: 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-radio-button {\r\n    margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZWhpY2xlaW5mby92ZWhpY2xlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZlaGljbGVpbmZvL3ZlaGljbGVpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/vehicleinfo/vehicleinfo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/vehicleinfo/vehicleinfo.component.ts ***!
  \***********************************************************/
/*! exports provided: VehicleinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleinfoComponent", function() { return VehicleinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let VehicleinfoComponent = class VehicleinfoComponent {
    constructor() {
        this.vtypes = ['32Feet', '20Feet'];
        this.vehicleform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            vehicleno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicleregno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            licenceexpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vehicletype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            roadtaxexpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            servicedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    submit() {
        console.log(this.vehicleform.value);
    }
};
VehicleinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicleinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicleinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vehicleinfo/vehicleinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicleinfo.component.css */ "./src/app/home/vehicleinfo/vehicleinfo.component.css")).default]
    })
], VehicleinfoComponent);



/***/ }),

/***/ "./src/app/home/vendor/vendor.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/vendor/vendor.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    min-width: 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZW5kb3IvdmVuZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/vendor/vendor.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/vendor/vendor.component.ts ***!
  \*************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let VendorComponent = class VendorComponent {
    constructor() {
        this.vendform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            vendname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            vendaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    submit() {
        console.log(this.vendform.value);
    }
};
VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/vendor/vendor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor.component.css */ "./src/app/home/vendor/vendor.component.css")).default]
    })
], VendorComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-card {\r\n    align-self: center;\r\n    margin: 20px;\r\n    flex: 0 0 320px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmbGV4OiAwIDAgMzIwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    submit() {
        console.log(this.form.value);
        localStorage.setItem('token', "123");
        this.router.navigate(['/home/customer']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        if (this.authService.checkLogin()) {
            return true;
        }
        this.router.navigate(['/login']);
        //alert("User not yet Login");
        return false;
    }
    canActivateChild(next, state) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    checkLogin() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.customerList = [
            {
                custname: 'Shrihari',
                phone: 9952711967,
                email: 'hari@gmail.com'
            },
            {
                custname: 'Hariram',
                phone: 9952744967,
                email: 'hari.ram@gmail.com'
            }, {
                custname: 'Saravanan',
                phone: 9933211967,
                email: 'Sarvan@gmail.com'
            }, {
                custname: 'Ashok',
                phone: 8752711967,
                email: 'ashok@gmail.com'
            }, {
                custname: 'Naresh',
                phone: 9944511967,
                email: 'hari@gmail.com'
            }, {
                custname: 'Prasana',
                phone: 9952722854,
                email: 'bruce@gmail.com'
            },
        ];
        //customerList;
        this.customerAPIurl = 'http://192.168.1.89:4000/customers?q=bang&skip=0&limit=30';
        this.vendorAPIurl = 'http://192.168.1.89:4000/vendors?q=bang&skip=0&limit=30';
    }
    sendGetCustomer() {
        return this.http.get(this.customerAPIurl);
    }
    sendGetVendor() {
        return this.http.get(this.vendorAPIurl);
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\vehical-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map