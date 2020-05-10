(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.player {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.player :nth-child(5n + 1) {\r\n    background: #4285F4;\r\n}\r\n\r\n.player :nth-child(5n + 2) {\r\n    background: #FBBC05;\r\n}\r\n\r\n.player :nth-child(5n + 3) {\r\n    background: #EA4335;\r\n}\r\n\r\n.player :nth-child(5n + 4) {\r\n    background: #34A853;\r\n}\r\n\r\n.player :nth-child(5n + 5) {\r\n    background: #FFFFFF;\r\n}\r\n\r\n.divPlayer {\r\n    margin: 10px;\r\n    border-radius: 7px;\r\n    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); \r\n}\r\n\r\n.add {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 15px;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .player {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: flex-start;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <app-host class=\"host\"></app-host> -->\n  <div class=\"player\">\n    <app-player\n      class=\"divPlayer\"\n      *ngFor=\"let numPlayer of numPlayers\"\n    ></app-player>\n  </div>\n\n  <div>\n    <img\n      class=\"add\"\n      (click)=\"addPlayer()\"\n      src=\"../../images/add.svg\"\n      alt=\"add\"\n      type=\"button\"\n    />\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.numPlayer = 0;
        this.numPlayers = [];
    }
    AppComponent.prototype.addPlayer = function () {
        this.numPlayers.push(this.numPlayer);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"],
                _host_host_component__WEBPACK_IMPORTED_MODULE_4__["HostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/host/host.component.css":
/*!*****************************************!*\
  !*** ./src/app/host/host.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player-edit {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    align-items: baseline;\r\n}\r\n\r\nbutton {\r\n    margin: 12px;\r\n}\r\n\r\ninput {\r\n    font-size: 25px;\r\n    max-width: 170px;\r\n    padding-left: 12px; \r\n    border-bottom: 2px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/host/host.component.html":
/*!******************************************!*\
  !*** ./src/app/host/host.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-edit\">\r\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n    <h1>Host ID: \r\n      <input \r\n      type=\"number\"\r\n      name=\"hostId\"\r\n      [(ngModel)]=\"hostId\"\r\n      value=\"{{ hostId }}\"\r\n      >\r\n    </h1>\r\n  </form>\r\n  <!-- <button type=\"submit\">Join Game</button> -->\r\n  <button (click)=\"addNewGame(f)\">Add New Game</button>\r\n</div>"

/***/ }),

/***/ "./src/app/host/host.component.ts":
/*!****************************************!*\
  !*** ./src/app/host/host.component.ts ***!
  \****************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HostComponent = /** @class */ (function () {
    function HostComponent(playerService) {
        this.playerService = playerService;
    }
    HostComponent.prototype.addNewGame = function (form) {
        this.hostId = Math.floor(1000 + Math.random() * 9000);
        console.log(this.hostId);
        this.playerService.setId(this.hostId);
    };
    HostComponent.prototype.onSubmit = function (form) {
        this.hostId = form.value.id;
        console.log(this.hostId);
        this.playerService.setId(this.hostId);
    };
    HostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! ./host.component.html */ "./src/app/host/host.component.html"),
            styles: [__webpack_require__(/*! ./host.component.css */ "./src/app/host/host.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], HostComponent);
    return HostComponent;
}());



/***/ }),

/***/ "./src/app/player.model.ts":
/*!*********************************!*\
  !*** ./src/app/player.model.ts ***!
  \*********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(id, name, points) {
        this.id = id;
        this.name = name;
        this.points = points;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/player.service.ts":
/*!***********************************!*\
  !*** ./src/app/player.service.ts ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.player = [];
    }
    PlayerService.prototype.getId = function () {
        return this.playerId;
    };
    PlayerService.prototype.setId = function (hostId) {
        this.playerId = hostId;
    };
    PlayerService.prototype.getPlayers = function () {
        // TODO get all players with the same hostId
    };
    PlayerService.prototype.getPlayer = function (newPlayer) {
        var _this = this;
        this.http.get('http://localhost:3000/player/'
            + newPlayer.id + '/' + newPlayer.name)
            .subscribe(function (res) {
            _this.player = res.player;
        });
        return newPlayer;
    };
    PlayerService.prototype.addPlayer = function (newPlayer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        console.log(newPlayer);
        this.http.post('http://localhost:3000/player', newPlayer, { headers: headers })
            .subscribe(function (res) {
        });
    };
    PlayerService.prototype.addPoints = function (newPlayer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.put('http://localhost:3000/player/' + newPlayer.id + '/' + newPlayer.name, newPlayer, { headers: headers })
            .subscribe(function (responseData) {
        });
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numPlayer {\r\n    padding: 20px;\r\n    width: 270px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"numPlayer\">\r\n    <form id=\"player-edit\" (ngSubmit)=\"addPlayer(f)\" #f=\"ngForm\">\r\n        <h1>\r\n            <input \r\n                type=\"text\" \r\n                placeholder=\"nickname\" \r\n                name=\"name\"\r\n                ngModel\r\n                #name=\"ngModel\"\r\n                >\r\n        </h1>\r\n        <button type=\"submit\">Add Player</button>\r\n    </form>\r\n    <p>Points: </p>\r\n    <ul>\r\n        <li *ngFor=\"let arrayPoint of arrayPoints\">{{ arrayPoint }}</li>\r\n    </ul>\r\n    <form id=\"player-edit\" (ngSubmit)=\"addPoints(f2)\" #f2=\"ngForm\">\r\n        <p>\r\n            <input \r\n            type=\"number\" \r\n            placeholder=\"add points here\" \r\n            name=\"points\"\r\n            ngModel\r\n            #points=\"ngModel\"\r\n            >\r\n        </p>\r\n        <button type=\"submit\" [disabled]=\"!f.submitted\">Add Points</button>\r\n    </form>\r\n    <p>Total: {{ total }}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.model */ "./src/app/player.model.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.points = [];
        this.arrayPoints = [0];
    }
    PlayerComponent.prototype.getPoints = function (newPlayer) {
        this.newPlayer = this.playerService.getPlayer(this.newPlayer);
        this.arrayPoints = this.arrayPoints.concat(this.newPlayer.points);
        console.log(this.arrayPoints);
    };
    PlayerComponent.prototype.getTotal = function (newPlayer) {
        this.total = this.arrayPoints.reduce(function (a, b) { return a + b; }, 0);
    };
    PlayerComponent.prototype.addPlayer = function (form) {
        var value = form.value;
        this.playerName = value.name;
        this.newPlayer = new _player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](this.playerService.getId(), value.name, this.points);
        console.log(this.newPlayer);
        this.playerService.addPlayer(this.newPlayer);
    };
    PlayerComponent.prototype.addPoints = function (form) {
        var value = form.value;
        // const playerId = this.playerService.setId();
        this.newPlayer = new _player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](this.playerService.getId(), this.playerName, value.points);
        console.log(this.newPlayer);
        this.playerService.addPoints(this.newPlayer);
        this.getPoints(this.newPlayer);
        this.getTotal(this.newPlayer);
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\my-profolio\projects\points\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map