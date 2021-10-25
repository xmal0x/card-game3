function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div [@routeAnimations]=\"prepareRoute(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h2>This app is designed to help you learn new words.</h2>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n  <p class=\"logo\">Made by HoneySoft</p>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-card/game-card.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameCardGameCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"game-card\" (click)=\"onClick()\">\n  <p>{{ word[cardLanguage] }}</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"game-container\">\n  <div class=\"main\">\n    <h2>{{ currentWord[currentLanguage] }}</h2>\n  </div>\n  <div class=\"options-container\">\n    <app-game-card\n      *ngFor=\"let option of gameOptions\"\n      [currentLanguage]=\"currentLanguage\"\n      [currentWord]=\"currentWord\"\n      [word]=\"option\"\n      (onCheckCard)=\"onResult($event)\"\n    >\n    </app-game-card>\n  </div>\n  <div @insertAnimation *ngIf=\"notValidMessage\" class=\"message-container\">\n    {{ notValidMessage }}\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <a routerLink=\"/\" class=\"menu-link\">Main</a>\n  <a routerLink=\"/game\" class=\"menu-link\">Start Game</a>\n  <a routerLink=\"/about\" class=\"menu-link\">About</a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container\">\n  <h2 class=\"main-title\">Let's start the game?</h2>\n  <button class=\"main-button\" (click)=\"onStartGameClick()\"><span class=\"text\">Let's do it!</span><span>Go!</span></button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/animations.ts": function srcAppAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertAnimation", function () {
      return insertAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function getAnimationSetting(direction) {
      return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        position: "relative"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter, :leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        left: direction === "fromRight" ? "100%" : "-100%"
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("600ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        left: direction === "fromRight" ? "-100%" : "100%"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("600ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        left: "0%"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())];
    }

    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("routeAnimations", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("MainPage => GamePage", getAnimationSetting("fromRight")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("GamePage => MainPage", getAnimationSetting("fromLeft")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("GamePage => AboutPage", getAnimationSetting("fromRight")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("AboutPage => GamePage", getAnimationSetting("fromLeft")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("MainPage => AboutPage", getAnimationSetting("fromRight")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("AboutPage => MainPage", getAnimationSetting("fromLeft"))]);
    var insertAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("insertAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }))])]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./animations */
    "./src/app/animations.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "card-game3";
      }

      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/game-card/game-card.component */
    "./src/app/components/game-card/game-card.component.ts");

    var appRoutes = [{
      path: "",
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
      data: {
        animation: "MainPage"
      }
    }, {
      path: "game",
      component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
      data: {
        animation: "GamePage"
      }
    }, {
      path: "about",
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
      data: {
        animation: "AboutPage"
      }
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_12__["GameCardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes)],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.scss": function srcAppComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts": function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss": function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #747474;\n  display: flex;\n  align-items: center;\n}\nfooter .logo {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhX2dhbGtpbi9Qcm9qZWN0cy9jYXJkLWdhbWUzL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuIiwiZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc0NzQ3NDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3RlciAubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts": function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/game-card/game-card.component.scss": function srcAppComponentsGameCardGameCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".game-card {\n  border: 1px solid #272727;\n  color: #272727;\n  font-family: \"Comfortaa\";\n  width: 18rem;\n  height: 5rem;\n  margin: 0rem 1rem 2rem;\n  background: #ffe400;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.game-card:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhX2dhbGtpbi9Qcm9qZWN0cy9jYXJkLWdhbWUzL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lLWNhcmQvZ2FtZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtY2FyZC9nYW1lLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1jYXJkL2dhbWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjcyNzI3O1xuICBjb2xvcjogIzI3MjcyNztcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCI7XG4gIHdpZHRoOiAxOHJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDByZW0gMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZlNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZ2FtZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4iLCIuZ2FtZS1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3MjcyNztcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xuICB3aWR0aDogMThyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAwcmVtIDFyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZTQwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmdhbWUtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/game-card/game-card.component.ts": function srcAppComponentsGameCardGameCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameCardComponent", function () {
      return GameCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils */
    "./src/app/utils.ts");

    var GameCardComponent = /*#__PURE__*/function () {
      function GameCardComponent() {
        _classCallCheck(this, GameCardComponent);

        this.onCheckCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GameCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cardLanguage = src_app_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].reverseLanguage(this.currentLanguage);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.currentWord[this.currentLanguage] === this.word[this.currentLanguage] ? this.onValidAnswer() : this.onNotValidAnswer();
        }
      }, {
        key: "onValidAnswer",
        value: function onValidAnswer() {
          this.onCheckCard.emit(true);
        }
      }, {
        key: "onNotValidAnswer",
        value: function onNotValidAnswer() {
          this.onCheckCard.emit(false);
        }
      }]);

      return GameCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameCardComponent.prototype, "word", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameCardComponent.prototype, "currentLanguage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameCardComponent.prototype, "currentWord", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameCardComponent.prototype, "onCheckCard", void 0);
    GameCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-game-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-card/game-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-card.component.scss */
      "./src/app/components/game-card/game-card.component.scss"))["default"]]
    })], GameCardComponent);
    /***/
  },

  /***/
  "./src/app/components/game/game.component.scss": function srcAppComponentsGameGameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".game-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.game-container .options-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  max-width: 1024px;\n}\n.game-container .main {\n  max-width: 1024px;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  font-size: 1.5rem;\n  color: #d7d7d7;\n}\n.game-container .message-container {\n  margin-top: 4.5rem;\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhX2dhbGtpbi9Qcm9qZWN0cy9jYXJkLWdhbWUzL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAub3B0aW9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIH1cblxuICAubWFpbiB7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogI2Q3ZDdkNztcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5cblxuXG5cbiIsIi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtY29udGFpbmVyIC5vcHRpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuLmdhbWUtY29udGFpbmVyIC5tYWluIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNkN2Q3ZDc7XG59XG4uZ2FtZS1jb250YWluZXIgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNC41cmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/game/game.component.ts": function srcAppComponentsGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils */
    "./src/app/utils.ts");
    /* harmony import */


    var src_app_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/animations */
    "./src/app/animations.ts");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(dataService) {
        _classCallCheck(this, GameComponent);

        this.dataService = dataService;
        this.gameOptions = [];
        this.currentLanguage = "ru";
        this.notValidMessage = "";
        this.words = [];
        this.optionsQty = 6;
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.words = this.dataService.getData();
          this.nextWord(this.optionsQty, this.words);
        }
      }, {
        key: "nextWord",
        value: function nextWord(optionsQty, words) {
          this.gameOptions = this.fillOptions(optionsQty, words);
          this.currentWord = this.gameOptions[src_app_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].getRandomNumber(optionsQty)];
        }
      }, {
        key: "fillOptions",
        value: function fillOptions(optionsQty, words) {
          var _this = this;

          var options = [];

          var _loop = function _loop(i) {
            var opt = words[src_app_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].getRandomNumber(words.length)];

            if (!options.find(function (word) {
              return word[_this.currentLanguage] === opt[_this.currentLanguage];
            })) {
              options.push(opt);
            } else {
              optionsQty++;
            }
          };

          for (var i = 0; i < optionsQty; i++) {
            _loop(i);
          }

          return options;
        }
      }, {
        key: "onResult",
        value: function onResult(isValid) {
          if (isValid) {
            this.notValidMessage = "";
            this.nextWord(this.optionsQty, this.words);
          } else {
            this.notValidMessage = this.dataService.getNotValidMessage();
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-game",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html"))["default"],
      animations: [src_app_animations__WEBPACK_IMPORTED_MODULE_4__["insertAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.scss */
      "./src/app/components/game/game.component.scss"))["default"]]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss": function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  border-bottom: 1px solid #747474;\n  display: flex;\n  justify-content: end;\n  height: 50px;\n  align-items: center;\n}\n\n.menu-link {\n  padding: 15px;\n  text-decoration: none;\n  color: #747474;\n}\n\n.menu-link:last-child {\n  padding-right: 0px;\n}\n\n.menu-link:hover {\n  transform: scale(1.1);\n  transition: transform 0.5s;\n  color: #d7d7d7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhX2dhbGtpbi9Qcm9qZWN0cy9jYXJkLWdhbWUzL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWxpbmsge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuXG4ubWVudS1saW5rOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5tZW51LWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBjb2xvcjogI2Q3ZDdkN1xufVxuIiwiLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3NDc0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1saW5rIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzc0NzQ3NDtcbn1cblxuLm1lbnUtbGluazpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ubWVudS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgY29sb3I6ICNkN2Q3ZDc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts": function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/main/main.component.scss": function srcAppComponentsMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-title {\n  margin-bottom: 3.5rem;\n  font-size: 2rem;\n}\n\n.main-button {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #272727;\n  color: #272727;\n  font-family: \"Comfortaa\";\n  display: inline-block;\n  font-size: 25px;\n  line-height: 15px;\n  padding: 35px 160px 32px;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffe400;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  font-weight: bold;\n}\n\n.main-button span:first-child {\n  position: relative;\n  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);\n  z-index: 10;\n}\n\n.main-button span:last-child {\n  color: #d7d7d7;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);\n  z-index: 100;\n  opacity: 0;\n  top: 65%;\n  left: 50%;\n  transform: translateY(225%) translateX(-50%);\n  height: 14px;\n  line-height: 13px;\n}\n\n.main-button:after {\n  content: \"\";\n  position: absolute;\n  bottom: -50%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #14a67c;\n  transform-origin: bottom center;\n  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);\n  transform: skewY(9.3deg) scaleY(0);\n  z-index: 50;\n}\n\n.main-button:hover:after {\n  transform-origin: bottom center;\n  transform: skewY(9.3deg) scaleY(2);\n}\n\n.main-button:hover span:last-child {\n  transform: translateX(-50%) translateY(-100%);\n  opacity: 1;\n  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhX2dhbGtpbi9Qcm9qZWN0cy9jYXJkLWdhbWUzL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHNEQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwREFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNkNBQUE7RUFDQSxVQUFBO0VBQ0Esb0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWFpbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzI3Mjc7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMzVweCAxNjBweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZTQwMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW4tYnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDYwMG1zIGN1YmljLWJlemllcigwLjQ4LCAwLCAwLjEyLCAxKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5tYWluLWJ1dHRvbiBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogI2Q3ZDdkNztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNDgsIDAsIDAuMTIsIDEpO1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogNjUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMjUlKSB0cmFuc2xhdGVYKC01MCUpO1xuICBoZWlnaHQ6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4ubWFpbi1idXR0b246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YTY3YztcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zIGN1YmljLWJlemllcigwLjQ4LCAwLCAwLjEyLCAxKTtcbiAgdHJhbnNmb3JtOiBza2V3WSg5LjNkZWcpIHNjYWxlWSgwKTtcbiAgei1pbmRleDogNTA7XG59XG5cbi5tYWluLWJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gIHRyYW5zZm9ybTogc2tld1koOS4zZGVnKSBzY2FsZVkoMik7XG59XG5cbi5tYWluLWJ1dHRvbjpob3ZlciBzcGFuOmxhc3QtY2hpbGQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCA5MDBtcyBjdWJpYy1iZXppZXIoMC40OCwgMCwgMC4xMiwgMSk7XG59XG4iLCIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tYWluLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3MjcyNztcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDM1cHggMTYwcHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmU0MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluLWJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBjb2xvciA2MDBtcyBjdWJpYy1iZXppZXIoMC40OCwgMCwgMC4xMiwgMSk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ubWFpbi1idXR0b24gc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNkN2Q3ZDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjQ4LCAwLCAwLjEyLCAxKTtcbiAgei1pbmRleDogMTAwO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDY1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjI1JSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLm1haW4tYnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGE2N2M7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2MDBtcyBjdWJpYy1iZXppZXIoMC40OCwgMCwgMC4xMiwgMSk7XG4gIHRyYW5zZm9ybTogc2tld1koOS4zZGVnKSBzY2FsZVkoMCk7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4ubWFpbi1idXR0b246aG92ZXI6YWZ0ZXIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICB0cmFuc2Zvcm06IHNrZXdZKDkuM2RlZykgc2NhbGVZKDIpO1xufVxuXG4ubWFpbi1idXR0b246aG92ZXIgc3BhbjpsYXN0LWNoaWxkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTEwMCUpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgOTAwbXMgY3ViaWMtYmV6aWVyKDAuNDgsIDAsIDAuMTIsIDEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts": function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(router) {
        _classCallCheck(this, MainComponent);

        this.router = router;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onStartGameClick",
        value: function onStartGameClick() {
          this.router.navigate(['game']);
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/components/main/main.component.scss"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts": function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils */
    "./src/app/utils.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);
      }

      _createClass(DataService, [{
        key: "getData",
        value: function getData() {
          return [{
            en: "Hello",
            ru: "Привет"
          }, {
            en: "Scream",
            ru: "Крик"
          }, {
            en: "Table",
            ru: "Стол"
          }, {
            en: "Weather",
            ru: "Погода"
          }, {
            en: "Pencil",
            ru: "Ручка"
          }, {
            en: "Cinema",
            ru: "Кино"
          }, {
            en: "Grid",
            ru: "Сетка"
          }, {
            en: "Paper",
            ru: "Бумага"
          }, {
            en: "Dear",
            ru: "Дорогой"
          }, {
            en: "Brother",
            ru: "Брат"
          }, {
            en: "Mother",
            ru: "Мама"
          }, {
            en: "Land",
            ru: "Земля"
          }, {
            en: "Winner",
            ru: "Победитель"
          }];
        }
      }, {
        key: "getNotValidMessage",
        value: function getNotValidMessage() {
          var messages = ["You can better:)", "Let's try again", "Don't worry", "Maybe another variant?", "Not right"];
          return messages[_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getRandomNumber(messages.length)];
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DataService);
    /***/
  },

  /***/
  "./src/app/utils.ts": function srcAppUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "getRandomNumber",
        value: function getRandomNumber(maxNum) {
          return Math.floor(Math.random() * maxNum);
        }
      }, {
        key: "reverseLanguage",
        value: function reverseLanguage(currentLanguage) {
          return currentLanguage === "en" ? "ru" : "en";
        }
      }]);

      return Utils;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kira_galkin/Projects/card-game3/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map