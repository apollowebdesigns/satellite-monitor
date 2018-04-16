webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper {\r\n    position: fixed;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100px 500px 500px;\r\n        grid-template-columns: 100px 500px 500px;\r\n    -ms-grid-rows: 90px 300px 300px;\r\n        grid-template-rows: 90px 300px 300px;\r\n    grid-gap: 1px;\r\n    color: #444;\r\n    top:50%;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n}\r\n\r\n.box {\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    font-size: 150%;\r\n    text-align: center;\r\n}\r\n\r\n.satLabel{\r\n    background-color: #444444;\r\n    padding: 0!important;\r\n}\r\n\r\n.satLabel span {\r\n    display: inline-block;\r\n    line-height: 90px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.hallLabel{\r\n    padding: 0!important;\r\n    background-color: #444444;\r\n}\r\n\r\n.hallLabel p{\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n    margin-top: 125px;\r\n    padding:0;\r\n}\r\n\r\n.clearBox {\r\n    background-color: #333;\r\n    color: white;\r\n}\r\n\r\n.sat1{\r\n\r\n}\r\n\r\n.sat2{\r\n\r\n}\r\n\r\n.sat3{\r\n\r\n}\r\n\r\n.sat4{\r\n\r\n}\r\n\r\n.statusUP{\r\n    background: -webkit-gradient(linear,left top, left bottom,from(darkgreen),to(green));\r\n    background: linear-gradient(darkgreen,green);\r\n}\r\n\r\n.statusDOWN{\r\n    background: -webkit-gradient(linear,left top, left bottom,from(darkred),to(red));\r\n    background: linear-gradient(darkred,red);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"topBanner\">\n  <img class=\"logo\" src=\"./assets/metOfficeLogo.png\" alt=\"Welcome to Met Office Satellite Monitor\">\n  <span class=\"title\">{{ title }}</span>\n</div>\n<div class=\"wrapper\">\n  <div class=\"clearBox\"></div>\n  <div class=\"box satLabel\"><span>Polar</span></div>\n  <div class=\"box satLabel\"><span>Geo</span></div>\n  <div class=\"box hallLabel\"><p>IT Hall 1</p></div>\n  <div class=\"box sat1\" [ngClass]=\"{'statusUP':satInfo[0].status=='OK', 'statusDOWN':satInfo[0].status=='ERROR'}\" (click)=\"onSelect(0)\">\n    {{satInfo[0].name}}\n    <div *ngIf=\"!satBox[0]\">\n      <p>Receiving State: {{satInfo[0].status}}</p>\n  </div>\n    <div *ngIf=\"satBox[0]\">\n      <p>Receiving Detail: {{satInfo[0].details}}</p>\n      <p>Last Signal: {{satInfo[0].lastConnect}}</p>\n    </div>\n  </div>\n  <div class=\"box sat2\" [ngClass]=\"{'statusUP':satInfo[1].status=='OK', 'statusDOWN':satInfo[1].status=='ERROR'}\" (click)=\"onSelect(1)\">\n    {{satInfo[1].name}}\n    <div *ngIf=\"!satBox[1]\">\n      <p>Receiving State: {{satInfo[1].status}}</p>\n    </div>\n    <div *ngIf=\"satBox[1]\">\n      <p>Receiving Detail: {{satInfo[1].details}}</p>\n      <p>Last Signal: {{satInfo[1].lastConnect}}</p>\n    </div>\n  </div>\n  <div class=\"box hallLabel\"><p>IT Hall 2</p></div>\n  <div class=\"box sat3\" [ngClass]=\"{'statusUP':satInfo[2].status=='OK', 'statusDOWN':satInfo[2].status=='ERROR'}\" (click)=\"onSelect(2)\">\n    {{satInfo[2].name}}\n    <div *ngIf=\"!satBox[2]\">\n      <p>Receiving State: {{satInfo[2].status}}</p>\n    </div>\n    <div *ngIf=\"satBox[2]\">\n      <p>Receiving Detail: {{satInfo[2].details}}</p>\n      <p>Last Signal: {{satInfo[2].lastConnect}}</p>\n    </div>\n  </div>\n  <div class=\"box sat4\" [ngClass]=\"{'statusUP':satInfo[3].status=='OK', 'statusDOWN':satInfo[3].status=='ERROR'}\" (click)=\"onSelect(3)\">\n    {{satInfo[3].name}}\n    <div *ngIf=\"!satBox[3]\">\n      <p>Receiving State: {{satInfo[3].status}}</p>\n    </div>\n    <div *ngIf=\"satBox[3]\">\n      <p>Receiving Detail: {{satInfo[3].details}}</p>\n      <p>Last Signal: {{satInfo[3].lastConnect}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__satellite_info__ = __webpack_require__("./src/app/satellite-info.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventSource = window['EventSource'];
var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.EVENT_URL = 'http://localhost:8080/stream';
        this.message = [];
        this.title = 'Satellite Monitor';
        this.satInfo = __WEBPACK_IMPORTED_MODULE_1__satellite_info__["a" /* SATINFO */];
        this.satBox = [
            false, false, false, false
        ];
    }
    AppComponent.prototype.onSelect = function (satId) {
        this.satBox[satId] = !this.satBox[satId];
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let eventSource = window['EventSource'];
        this.ws = new EventSource(this.EVENT_URL, { withCredentials: true });
        // listing to server messages
        this.ws.onmessage = function (evt) {
            console.log(evt.data);
            if (evt.data !== null) {
                _this.logServerMessage(evt.data);
                // update the model
                _this.message = Array.from(JSON.parse(evt.data));
                //console.log(this.message);
                _this.message.forEach(function (item) {
                    console.log(item);
                    var sat = _this.satInfo.find(function (x) { return x.id == item.id; });
                    //console.log(sat);
                    sat.status = item.state;
                    if (sat.status === 'OK') {
                        sat.lastConnect = new Date().toISOString();
                    }
                    //this.satInfo[item.id].status = item.state;
                    //console.log(this.satInfo);
                });
            }
            _this.message = ["No Data"];
            // manually detect changes
            _this.changeDetector.detectChanges();
        };
    };
    AppComponent.prototype.logServerMessage = function (data) {
        console.log("message from server :", data);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/satellite-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SATINFO; });
var SATINFO = [
    { id: 1, name: 'Satellite 1', details: 'details', lastConnect: '2018-04-5T13:45:00z', status: 'OK' },
    { id: 2, name: 'Satellite 2', details: 'details', lastConnect: '2018-04-5T13:45:00z', status: 'OK' },
    { id: 3, name: 'Satellite 3', details: 'details', lastConnect: '2018-04-5T13:45:00z', status: 'OK' },
    { id: 4, name: 'Satellite 4', details: 'details', lastConnect: '2018-04-5T13:45:00z', status: 'OK' }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map