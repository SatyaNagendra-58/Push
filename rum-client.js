/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var TrackPerformance = /** @class */ (function () {
    function TrackPerformance(_a) {
        var _this = this;
        var env = _a.env, paceEnv = _a.paceEnv, _b = _a.threshold, threshold = _b === void 0 ? 0 : _b, _c = _a.batchSize, batchSize = _c === void 0 ? 50 : _c, _d = _a.excludeKeys, excludeKeys = _d === void 0 ? ["nextHopProtocol", "initiatorType"] : _d, _e = _a.includeHosts, includeHosts = _e === void 0 ? [] : _e, applicationId = _a.applicationId;
        this.queuedEntries = [];
        this.locationInfo = {};
        this.blockingJSRequests = [];
        this.blockingCSSRequests = [];
        this.options = {
            env: env,
            paceEnv: paceEnv,
            threshold: threshold,
            batchSize: batchSize,
            excludeKeys: excludeKeys,
            includeHosts: includeHosts,
            applicationId: applicationId,
        };
        if ("performance" in window) {
            if ("PerformanceObserver" in window) {
                var perfObserver = new PerformanceObserver(function (list, obj) {
                    _this.handleEntries(list.getEntries());
                });
                perfObserver.observe({
                    entryTypes: ["resource"],
                });
            }
            else {
                // To-Do
            }
        }
        // tslint:disable-next-line
        window.onload = function () {
            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            TrackPerformance.inactivityTime(0, this);
                            _a = this;
                            return [4 /*yield*/, TrackPerformance.getLocation()];
                        case 1:
                            _a.locationInfo = _b.sent();
                            return [4 /*yield*/, TrackPerformance.blockedJSRequest([], this)];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.blockedCSSRequest([], this)];
                        case 3:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.getfirstContentFullPaint(this)];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.getlargestContentFullPaint(this)];
                        case 5:
                            _b.sent();
                            this.handleEntries(performance.getEntriesByType("navigation"));
                            TrackPerformance.interactionMetrix(this);
                            return [2 /*return*/];
                    }
                });
            }); }, 500);
        };
        console.log("Setting up setInterval to push track data");
        this.intervalId = window.setTimeout(function () {
            if (_this.queuedEntries.length) {
                TrackPerformance.sendToServer(_this);
                _this.queuedEntries = [];
            }
        }, threshold);
    }
    TrackPerformance.computeMetrics = function (entry, type, dom, captureRequestsCount, captureRequests) {
        if (captureRequestsCount === void 0) { captureRequestsCount = []; }
        if (captureRequests === void 0) { captureRequests = []; }
        // TLS time
        // if (entry.secureConnectionStart > 0) {
        entry.tlsTime =
            window.performance.timing.requestStart -
                window.performance.timing.secureConnectionStart;
        // }
        // Time to First Byte (TTFB)
        entry.ttfb =
            window.performance.timing.responseStart -
                window.performance.timing.navigationStart;
        /*
          The fetchStart read-only property represents a timestamp immediately
          before the browser starts to fetch the resource.
        */
        entry.fetchTime =
            window.performance.timing.responseEnd -
                window.performance.timing.fetchStart;
        if (entry.workerStart > 0)
            entry.workerTime =
                window.performance.timing.responseEnd - entry.workerStart;
        /*
          The requestStart read-only property returns a timestamp of the time
          immediately before the browser starts requesting the resource from the
          server, cache, or local resource
          Request plus response time (network only)
        */
        (entry.totalTime =
            window.performance.timing.responseEnd -
                window.performance.timing.requestStart),
            // Response time only (download)
            (entry.downloadTime =
                window.performance.timing.responseEnd -
                    window.performance.timing.responseStart),
            // HTTP header size
            (entry.headerSize = entry.transferSize - entry.encodedBodySize);
        // Compression ratio
        entry.compressionRatio = entry.decodedBodySize / entry.encodedBodySize;
        // Page Time
        entry.domContentLoaded =
            window.performance.timing.domContentLoadedEventEnd -
                window.performance.timing.connectStart;
        if (entry.domContentLoaded)
            entry.domContentLoaded =
                Math.sign(entry.domContentLoaded) == -1
                    ? entry.domContentLoaded * -1
                    : entry.domContentLoaded;
        entry.pageLoad =
            window.performance.timing.loadEventEnd -
                window.performance.timing.navigationStart;
        entry.startRender = entry.startTime;
        // entry.firstCPUIdle = type.hardwareConcurrency;
        dom = performance.getEntriesByType("navigation")[0];
        type = navigator;
        entry.browser = TrackPerformance.browser();
        entry.userAgent = navigator.userAgent;
        entry.os = TrackPerformance.getOS();
        entry.deviceType = TrackPerformance.getDeviceType();
        entry.connectionType = type.connection
            ? type.connection.effectiveType
            : "4g";
        (entry.rumVersion = "1.0.0"), (entry.domain = window.location.hostname);
        entry.pageURL = window.location.href;
        entry.urlPath = window.location.pathname;
        entry.backend = entry.ttfb;
        entry.redirect = entry.startTime - window.performance.timing.redirectStart;
        entry.dnsLookUp =
            window.performance.timing.domainLookupEnd -
                window.performance.timing.domainLookupStart;
        // Total Connection time
        (entry.tcpConnect =
            window.performance.timing.connectEnd -
                window.performance.timing.connectStart),
            (entry.sslNegotiation = entry.tlsTime);
        entry.network = entry.tcpConnect + entry.sslNegotiation + entry.dnsLookUp;
        entry.domElements = document.getElementsByTagName("*").length;
        entry.domInteractive = dom.domInteractive.toFixed();
        entry.averageDOMDepth = TrackPerformance.avgDOMDepth([]);
        captureRequestsCount =
            TrackPerformance.captureNetworkRequest(captureRequests);
        entry.imageRequests = captureRequestsCount.capture_img_request.length;
        entry.cssRequests = captureRequestsCount.capture_css_request.length;
        entry.jsRequests = captureRequestsCount.capture_js_request.length;
        entry.imageATFRequests = captureRequestsCount.capture_imgatf_request.length;
        entry.htmlSize = (document.documentElement.outerHTML.length / 1024).toFixed(0);
        entry.inlineJSSize = TrackPerformance.JSSize();
        entry.inlineStyleSize = TrackPerformance.inlineStyleSize([]);
        entry.project = "PACE";
        return entry;
    };
    TrackPerformance.chunk = function (array, size) {
        return array.reduce(function (res, item, index) {
            if (index % size === 0) {
                res.push([]);
            }
            res[res.length - 1].push(item);
            return res;
        }, []);
    };
    TrackPerformance.prototype.handleEntries = function (entries) {
        var _a = this.options, excludeKeys = _a.excludeKeys, applicationId = _a.applicationId, paceEnv = _a.paceEnv;
        entries = entries.map(function (entry) { return entry.toJSON(); });
        entries = entries.map(TrackPerformance.computeMetrics);
        if (excludeKeys.length) {
            entries = entries.map(function (entry) {
                return Object.keys(entry).reduce(function (acc, key) {
                    if (excludeKeys.indexOf(key) === -1) {
                        acc[key] = entry[key];
                    }
                    return acc;
                }, {});
            });
        }
        this.queuedEntries = this.queuedEntries.concat(entries);
    };
    TrackPerformance.sendToServer = function (scope) {
        var _a, _b;
        var _c = scope.options, _d = _c.batchSize, batchSize = _d === void 0 ? 50 : _d, applicationId = _c.applicationId, env = _c.env, paceEnv = _c.paceEnv;
        var entryChunks = TrackPerformance.chunk(scope.queuedEntries, batchSize);
        var promise = Promise.resolve();
        var mainEntryChunk = entryChunks
            .flat()
            .find(function (_a) {
            var name = _a.name;
            return name == window.location.href;
        });
        mainEntryChunk = mainEntryChunk ? mainEntryChunk : entryChunks[0][0];
        mainEntryChunk.applicationId = applicationId;
        if (scope.locationInfo) {
            mainEntryChunk.city = (_a = scope.locationInfo) === null || _a === void 0 ? void 0 : _a.city;
            mainEntryChunk.country = (_b = scope.locationInfo) === null || _b === void 0 ? void 0 : _b.country;
        }
        mainEntryChunk.blockingJSRequests = scope.blockingJSRequests.length;
        mainEntryChunk.blockingCSSRequests = scope.blockingCSSRequests.length;
        mainEntryChunk.interactionTime = scope.queuedEntries[0].interactionTime;
        mainEntryChunk.interactionType = scope.queuedEntries[0].interactionType;
        mainEntryChunk.interactionElement =
            scope.queuedEntries[0].interactionElement;
        mainEntryChunk.firstContentFullPaint = scope.firstContentFullPaint;
        mainEntryChunk.largestContentFullPaint = scope.largestContentFullPaint;
        mainEntryChunk.pageTitle = document.title;
        mainEntryChunk.flags = document.title;
        mainEntryChunk.firstCPUIdle = scope.firstCPUIdle;
        mainEntryChunk.environment = paceEnv;
        if (env == "dev")
            var trackUrl = "http://54.153.11.233:3001/rux/writePerfomanceMetrics";
        else if (env == "qa")
            trackUrl = "http://172.16.12.45:3001/rux/writePerfomanceMetrics";
        else if (env == "stgaing")
            trackUrl =
                "https://staging-pace.qentelli.com/api/rux/writePerfomanceMetrics";
        else
            trackUrl = "https://pace.qentelli.com/api/rux/writePerfomanceMetrics";
        promise = promise.then(function () {
            return new Promise(function (resolve, reject) {
                fetch(trackUrl, {
                    method: "post",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(mainEntryChunk),
                })
                    .then(function (res) { return res.json(); })
                    .then(function (res) {
                    return resolve();
                })
                    .catch(function (error) {
                    // tslint:disable-next-line
                    return resolve();
                });
            });
        });
    };
    TrackPerformance.prototype.stop = function () {
        clearTimeout(this.intervalId);
        this.intervalId = 0;
    };
    // Get device type
    TrackPerformance.getDeviceType = function () {
        var ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };
    // Get OS
    TrackPerformance.getOS = function () {
        var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"], iosPlatforms = ["iPhone", "iPad", "iPod"], os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = "Mac OS";
        }
        else if (iosPlatforms.indexOf(platform) !== -1) {
            os = "iOS";
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = "Windows";
        }
        else if (/Android/.test(userAgent)) {
            os = "Android";
        }
        else if (!os && /Linux/.test(platform)) {
            os = "Linux";
        }
        return os;
    };
    TrackPerformance.captureNetworkRequest = function (capture_resource) {
        var capture_js_request = [];
        var capture_css_request = [];
        var capture_img_request = [];
        var capture_imgatf_request = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "script") {
                capture_js_request.push(capture_resource[i].name);
            }
            if (capture_resource[i].initiatorType == "css") {
                capture_css_request.push(capture_resource[i].name);
            }
            if (capture_resource[i].initiatorType == "img") {
                capture_img_request.push(capture_resource[i].name);
                if (capture_resource[i].name.split(/[#?]/)[0].split(".").pop().trim() ==
                    "atf")
                    capture_imgatf_request.push(capture_resource[i].name);
            }
        }
        return {
            capture_js_request: capture_js_request,
            capture_css_request: capture_css_request,
            capture_img_request: capture_img_request,
            capture_imgatf_request: capture_imgatf_request,
        };
    };
    TrackPerformance.avgDOMDepth = function (tracker) {
        var depth = 0;
        var prevNode = 0;
        Array.from(document.querySelectorAll("*")).forEach(function (node) {
            if (!tracker[node.tagName])
                tracker[node.tagName] = 1;
            else
                tracker[node.tagName]++;
            if (node.parentNode != prevNode)
                depth++;
            prevNode = node;
        });
        return depth / 2;
    };
    TrackPerformance.getfirstContentFullPaint = function (scope) {
        var paintTimings = performance.getEntriesByType("paint");
        var firstContentFullPaint = paintTimings.find(function (_a) {
            var name = _a.name;
            return name === "first-contentful-paint";
        });
        scope.firstContentFullPaint = firstContentFullPaint
            ? firstContentFullPaint.startTime
            : 0;
    };
    TrackPerformance.getlargestContentFullPaint = function (scope) {
        new PerformanceObserver(function (entryList) {
            var lcp = entryList.getEntries();
            if (lcp.length) {
                scope.largestContentFullPaint = lcp[lcp.length - 1]
                    ? lcp[lcp.length - 1].startTime
                    : 0;
            }
        }).observe({ type: "largest-contentful-paint", buffered: true });
    };
    TrackPerformance.getLocation = function () {
        try {
            return new Promise(function (resolve, reject) {
                fetch("http://ip-api.com/json", {
                    method: "GET",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                    .then(function (res) { return res.json(); })
                    .then(function (res) {
                    return resolve(res);
                })
                    .catch(function (error) {
                    // tslint:disable-next-line
                    return resolve();
                });
            });
        }
        catch (e) {
            console.log("error IP");
        }
    };
    TrackPerformance.interactionMetrix = function (scope) {
        var events = [
            "click",
            "scroll",
            "Keydown",
            // "keypress",
            // "mouseover",
            // "mouseout",
            // "mousedown",
            // "mouseup",
            "change",
            "blur",
            "submit",
            "unload",
            "resize",
            "touchstart",
        ];
        var startDate = new Date();
        var elapsedTime = 0;
        var focus = function (event) {
            startDate = new Date();
        };
        var interactionInfo = function (event, scope, startDate, elapsedTime) {
            TrackPerformance.interactionTime(event, scope, startDate, elapsedTime);
        };
        document.body.addEventListener("focus", focus);
        events.forEach(function (eventType) {
            document.body.addEventListener(eventType, function (event) {
                TrackPerformance.actionElements(event.srcElement, event, scope, startDate, elapsedTime);
            });
        });
    };
    TrackPerformance.interactionTime = function (event, scope, startDate, elapsedTime) {
        var endDate = new Date();
        var spentTime = endDate.getTime() - startDate.getTime();
        elapsedTime += spentTime;
        scope.queuedEntries[0].interactionTime = new Date(elapsedTime * 1000).getSeconds();
        scope.queuedEntries[0].interactionType = event.type;
        if (event.type == "click") {
            scope.queuedEntries[0].pageURL = event.target.ownerDocument.location.href;
            scope.queuedEntries[0].urlPath =
                event.target.ownerDocument.location.pathname;
        }
        scope.queuedEntries[0].interactionElement = event.target.className;
        TrackPerformance.sendToServer(scope);
    };
    TrackPerformance.JSSize = function () {
        var content = "";
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (!scripts[i].src)
                content += scripts[i].innerHTML;
        }
        return new Blob([content]).size;
    };
    TrackPerformance.getMilliseconds = function (start, end) {
        return new Date(start - end).getMilliseconds();
    };
    TrackPerformance.inlineStyleSize = function (inlineStyleSize) {
        var content = "";
        var styles = document.querySelectorAll("[style]");
        for (var i = 0; i < styles.length; i++) {
            inlineStyleSize = styles[i].attributes;
            if (inlineStyleSize.style)
                content += inlineStyleSize.style.value;
        }
        return new Blob([content]).size;
    };
    TrackPerformance.blockedJSRequest = function (capture_resource, scope) {
        var capture_js_request = [];
        scope.blockingJSRequests = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "script")
                capture_js_request.push(capture_resource[i].name);
        }
        // map every url to the promise of the fetch
        var requests = capture_js_request.map(function (url) { return fetch(url); });
        // tslint:disable-next-line
        Promise.allSettled(requests).then(function (results) {
            results.forEach(function (result, num) {
                if (result.status == "rejected") {
                    scope.blockingJSRequests.push(requests[num]);
                }
            });
        });
    };
    TrackPerformance.blockedCSSRequest = function (capture_resource, scope) {
        var capture_js_request = [];
        scope.blockingCSSRequests = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "css")
                capture_js_request.push(capture_resource[i].name);
        }
        // map every url to the promise of the fetch
        var requests = capture_js_request.map(function (url) { return fetch(url); });
        // tslint:disable-next-line
        Promise.allSettled(requests).then(function (results) {
            results.forEach(function (result, num) {
                if (result.status == "rejected") {
                    scope.blockingCSSRequests.push(requests[num]);
                }
            });
        });
    };
    TrackPerformance.inactivityTime = function (time, scope) {
        var time;
        window.onload = resetTimer;
        // DOM Events
        document.onmousemove = resetTimer;
        document.onkeydown = resetTimer;
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(function () { }, 3000);
            scope.firstCPUIdle = time;
            // 1000 milliseconds = 1 second
        }
        window.addEventListener("load", resetTimer, true);
        var events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
        events.forEach(function (name) {
            document.addEventListener(name, resetTimer, true);
        });
    };
    TrackPerformance.browser = function () {
        var test = function (regexp) {
            return regexp.test(window.navigator.userAgent);
        };
        switch (true) {
            case test(/edg/i):
                return "Microsoft Edge";
            case test(/trident/i):
                return "Microsoft Internet Explorer";
            case test(/firefox|fxios/i):
                return "Mozilla Firefox";
            case test(/opr\//i):
                return "Opera";
            case test(/ucbrowser/i):
                return "UC Browser";
            case test(/samsungbrowser/i):
                return "Samsung Browser";
            case test(/chrome|chromium|crios/i):
                return "Google Chrome";
            case test(/safari/i):
                return "Apple Safari";
            default:
                return "Other";
        }
    };
    TrackPerformance.actionElements = function (e, event, scope, startDate, elapsedTime) {
        var _a;
        var t = TrackPerformance.getParentElements(e);
        if (t)
            return t;
        if (e.id)
            return e.id;
        var n = "INPUT" === e.tagName && "submit" === e.type, r = "BUTTON" === e.tagName, o = "A" === e.tagName, g = "SPAN" === e.tagName;
        var s = n && e.value
            ? e.value
            : (r || o || g) && e.innerText
                ? e.innerText
                : TrackPerformance.getParentTagName(e)
                    ? TrackPerformance.actionElements(e.parentNode, event, scope, startDate, elapsedTime)
                    : "";
        if (n || r || o || g)
            TrackPerformance.interactionTime(event, scope, startDate, elapsedTime);
        return (_a = e) === null || _a === void 0 ? void 0 : _a.tagName;
    };
    TrackPerformance.getParentElements = function (e) {
        var _a, _b;
        var t;
        if ((_a = e) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-sctrack")) {
            var n = null === (t = (_b = e) === null || _b === void 0 ? void 0 : _b.getAttribute("data-sctrack")) || void 0 === t
                ? void 0
                : t.trim();
            if (n)
                return n;
        }
        return TrackPerformance.getParentTagName(e)
            ? TrackPerformance.getParentElements(e.parentNode)
            : null;
    };
    TrackPerformance.getParentTagName = function (e) {
        return !(!e.parentNode || !e.parentNode.tagName);
    };
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtJQTRIRSwwQkFBWSxFQVFlO1FBUjNCLGlCQXdEQztZQXZEQyxZQUFHLEVBQ0gsb0JBQU8sRUFDUCxpQkFBYSxFQUFiLGtDQUFhLEVBQ2IsaUJBQWMsRUFBZCxtQ0FBYyxFQUNkLG1CQUFrRCxFQUFsRCx1RUFBa0QsRUFDbEQsb0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixnQ0FBYTtRQUViLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxF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RyxDQUFDLDBDQUFFLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQzVELENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRU0saUNBQWdCLEdBQXZCLFVBQXdCLENBQU07UUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDO0FBRUQsMkNBQTJDO0FBQzFDLE1BQWMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxrQkFBZSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJydW0tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucyB7XHJcbiAgZW52OiBzdHJpbmc7XHJcbiAgcGFjZUVudjogc3RyaW5nO1xyXG4gIHRocmVzaG9sZD86IG51bWJlcjtcclxuICBiYXRjaFNpemU/OiBudW1iZXI7XHJcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdO1xyXG4gIGluY2x1ZGVIb3N0czogc3RyaW5nW107XHJcbiAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBUcmFja1BlcmZvcm1hbmNlIHtcclxuICBzdGF0aWMgY29tcHV0ZU1ldHJpY3MoXHJcbiAgICBlbnRyeTogYW55LFxyXG4gICAgdHlwZTogYW55LFxyXG4gICAgZG9tOiBhbnksXHJcbiAgICBjYXB0dXJlUmVxdWVzdHNDb3VudDogYW55ID0gW10sXHJcbiAgICBjYXB0dXJlUmVxdWVzdHM6IGFueSA9IFtdXHJcbiAgKSB7XHJcbiAgICAvLyBUTFMgdGltZVxyXG4gICAgLy8gaWYgKGVudHJ5LnNlY3VyZUNvbm5lY3Rpb25TdGFydCA+IDApIHtcclxuICAgIGVudHJ5LnRsc1RpbWUgPVxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlcXVlc3RTdGFydCAtXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuc2VjdXJlQ29ubmVjdGlvblN0YXJ0O1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBUaW1lIHRvIEZpcnN0IEJ5dGUgKFRURkIpXHJcbiAgICBlbnRyeS50dGZiID1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZVN0YXJ0IC1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XHJcblxyXG4gICAgLypcclxuICAgICAgVGhlIGZldGNoU3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJlcHJlc2VudHMgYSB0aW1lc3RhbXAgaW1tZWRpYXRlbHlcclxuICAgICAgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyB0byBmZXRjaCB0aGUgcmVzb3VyY2UuXHJcbiAgICAqL1xyXG4gICAgZW50cnkuZmV0Y2hUaW1lID1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCAtXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZmV0Y2hTdGFydDtcclxuXHJcbiAgICBpZiAoZW50cnkud29ya2VyU3RhcnQgPiAwKVxyXG4gICAgICBlbnRyeS53b3JrZXJUaW1lID1cclxuICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kIC0gZW50cnkud29ya2VyU3RhcnQ7XHJcblxyXG4gICAgLypcclxuICAgICAgVGhlIHJlcXVlc3RTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmV0dXJucyBhIHRpbWVzdGFtcCBvZiB0aGUgdGltZVxyXG4gICAgICBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGJyb3dzZXIgc3RhcnRzIHJlcXVlc3RpbmcgdGhlIHJlc291cmNlIGZyb20gdGhlXHJcbiAgICAgIHNlcnZlciwgY2FjaGUsIG9yIGxvY2FsIHJlc291cmNlXHJcbiAgICAgIFJlcXVlc3QgcGx1cyByZXNwb25zZSB0aW1lIChuZXR3b3JrIG9ubHkpXHJcbiAgICAqL1xyXG4gICAgKGVudHJ5LnRvdGFsVGltZSA9XHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQgLVxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlcXVlc3RTdGFydCksXHJcbiAgICAgIC8vIFJlc3BvbnNlIHRpbWUgb25seSAoZG93bmxvYWQpXHJcbiAgICAgIChlbnRyeS5kb3dubG9hZFRpbWUgPVxyXG4gICAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQgLVxyXG4gICAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCksXHJcbiAgICAgIC8vIEhUVFAgaGVhZGVyIHNpemVcclxuICAgICAgKGVudHJ5LmhlYWRlclNpemUgPSBlbnRyeS50cmFuc2ZlclNpemUgLSBlbnRyeS5lbmNvZGVkQm9keVNpemUpO1xyXG5cclxuICAgIC8vIENvbXByZXNzaW9uIHJhdGlvXHJcbiAgICBlbnRyeS5jb21wcmVzc2lvblJhdGlvID0gZW50cnkuZGVjb2RlZEJvZHlTaXplIC8gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xyXG5cclxuICAgIC8vIFBhZ2UgVGltZVxyXG4gICAgZW50cnkuZG9tQ29udGVudExvYWRlZCA9XHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tQ29udGVudExvYWRlZEV2ZW50RW5kIC1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5jb25uZWN0U3RhcnQ7XHJcblxyXG4gICAgaWYgKGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQpXHJcbiAgICAgIGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgPVxyXG4gICAgICAgIE1hdGguc2lnbihlbnRyeS5kb21Db250ZW50TG9hZGVkKSA9PSAtMVxyXG4gICAgICAgICAgPyBlbnRyeS5kb21Db250ZW50TG9hZGVkICogLTFcclxuICAgICAgICAgIDogZW50cnkuZG9tQ29udGVudExvYWRlZDtcclxuICAgIGVudHJ5LnBhZ2VMb2FkID1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5sb2FkRXZlbnRFbmQgLVxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydDtcclxuICAgIGVudHJ5LnN0YXJ0UmVuZGVyID0gZW50cnkuc3RhcnRUaW1lO1xyXG4gICAgLy8gZW50cnkuZmlyc3RDUFVJZGxlID0gdHlwZS5oYXJkd2FyZUNvbmN1cnJlbmN5O1xyXG4gICAgZG9tID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF07XHJcbiAgICB0eXBlID0gbmF2aWdhdG9yO1xyXG4gICAgZW50cnkuYnJvd3NlciA9IFRyYWNrUGVyZm9ybWFuY2UuYnJvd3NlcigpO1xyXG4gICAgZW50cnkudXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGVudHJ5Lm9zID0gVHJhY2tQZXJmb3JtYW5jZS5nZXRPUygpO1xyXG4gICAgZW50cnkuZGV2aWNlVHlwZSA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0RGV2aWNlVHlwZSgpO1xyXG4gICAgZW50cnkuY29ubmVjdGlvblR5cGUgPSB0eXBlLmNvbm5lY3Rpb25cclxuICAgICAgPyB0eXBlLmNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZVxyXG4gICAgICA6IFwiNGdcIjtcclxuICAgIChlbnRyeS5ydW1WZXJzaW9uID0gXCIxLjAuMFwiKSwgKGVudHJ5LmRvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICBlbnRyeS5wYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBlbnRyeS51cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgZW50cnkuYmFja2VuZCA9IGVudHJ5LnR0ZmI7XHJcbiAgICBlbnRyeS5yZWRpcmVjdCA9IGVudHJ5LnN0YXJ0VGltZSAtIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVkaXJlY3RTdGFydDtcclxuICAgIGVudHJ5LmRuc0xvb2tVcCA9XHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tYWluTG9va3VwRW5kIC1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21haW5Mb29rdXBTdGFydDtcclxuXHJcbiAgICAvLyBUb3RhbCBDb25uZWN0aW9uIHRpbWVcclxuICAgIChlbnRyeS50Y3BDb25uZWN0ID1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5jb25uZWN0RW5kIC1cclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5jb25uZWN0U3RhcnQpLFxyXG4gICAgICAoZW50cnkuc3NsTmVnb3RpYXRpb24gPSBlbnRyeS50bHNUaW1lKTtcclxuICAgIGVudHJ5Lm5ldHdvcmsgPSBlbnRyeS50Y3BDb25uZWN0ICsgZW50cnkuc3NsTmVnb3RpYXRpb24gKyBlbnRyeS5kbnNMb29rVXA7XHJcbiAgICBlbnRyeS5kb21FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XHJcbiAgICBlbnRyeS5kb21JbnRlcmFjdGl2ZSA9IGRvbS5kb21JbnRlcmFjdGl2ZS50b0ZpeGVkKCk7XHJcbiAgICBlbnRyeS5hdmVyYWdlRE9NRGVwdGggPSBUcmFja1BlcmZvcm1hbmNlLmF2Z0RPTURlcHRoKFtdKTtcclxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50ID1cclxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5jYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZVJlcXVlc3RzKTtcclxuICAgIGVudHJ5LmltYWdlUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ19yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5LmNzc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9jc3NfcmVxdWVzdC5sZW5ndGg7XHJcbiAgICBlbnRyeS5qc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9qc19yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5LmltYWdlQVRGUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5Lmh0bWxTaXplID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwubGVuZ3RoIC8gMTAyNCkudG9GaXhlZChcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIGVudHJ5LmlubGluZUpTU2l6ZSA9IFRyYWNrUGVyZm9ybWFuY2UuSlNTaXplKCk7XHJcbiAgICBlbnRyeS5pbmxpbmVTdHlsZVNpemUgPSBUcmFja1BlcmZvcm1hbmNlLmlubGluZVN0eWxlU2l6ZShbXSk7XHJcbiAgICBlbnRyeS5wcm9qZWN0ID0gXCJQQUNFXCI7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2h1bmsoYXJyYXk6IGFueVtdLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHJlcywgaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICUgc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIHJlcy5wdXNoKFtdKTtcclxuICAgICAgfVxyXG4gICAgICByZXNbcmVzLmxlbmd0aCAtIDFdLnB1c2goaXRlbSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG4gIHF1ZXVlZEVudHJpZXM6IGFueVtdO1xyXG4gIGxvY2F0aW9uSW5mbzogYW55O1xyXG4gIGJsb2NraW5nSlNSZXF1ZXN0czogYW55O1xyXG4gIGJsb2NraW5nQ1NTUmVxdWVzdHM6IGFueTtcclxuICBvcHRpb25zOiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnM7XHJcbiAgaW50ZXJ2YWxJZDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGVudixcclxuICAgIHBhY2VFbnYsXHJcbiAgICB0aHJlc2hvbGQgPSAwLFxyXG4gICAgYmF0Y2hTaXplID0gNTAsXHJcbiAgICBleGNsdWRlS2V5cyA9IFtcIm5leHRIb3BQcm90b2NvbFwiLCBcImluaXRpYXRvclR5cGVcIl0sXHJcbiAgICBpbmNsdWRlSG9zdHMgPSBbXSxcclxuICAgIGFwcGxpY2F0aW9uSWQsXHJcbiAgfTogSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zKSB7XHJcbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcclxuICAgIHRoaXMubG9jYXRpb25JbmZvID0ge307XHJcbiAgICB0aGlzLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xyXG4gICAgdGhpcy5ibG9ja2luZ0NTU1JlcXVlc3RzID0gW107XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGVudixcclxuICAgICAgcGFjZUVudixcclxuICAgICAgdGhyZXNob2xkLFxyXG4gICAgICBiYXRjaFNpemUsXHJcbiAgICAgIGV4Y2x1ZGVLZXlzLFxyXG4gICAgICBpbmNsdWRlSG9zdHMsXHJcbiAgICAgIGFwcGxpY2F0aW9uSWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGlmIChcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICBjb25zdCBwZXJmT2JzZXJ2ZXIgPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigobGlzdCwgb2JqKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMobGlzdC5nZXRFbnRyaWVzKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwZXJmT2JzZXJ2ZXIub2JzZXJ2ZSh7XHJcbiAgICAgICAgICBlbnRyeVR5cGVzOiBbXCJyZXNvdXJjZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUby1Eb1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2UuaW5hY3Rpdml0eVRpbWUoMCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkluZm8gPSBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5ibG9ja2VkSlNSZXF1ZXN0KFtdLCB0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmJsb2NrZWRDU1NSZXF1ZXN0KFtdLCB0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGZpcnN0Q29udGVudEZ1bGxQYWludCh0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGxhcmdlc3RDb250ZW50RnVsbFBhaW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKSk7XHJcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbnRlcmFjdGlvbk1ldHJpeCh0aGlzKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXAgc2V0SW50ZXJ2YWwgdG8gcHVzaCB0cmFjayBkYXRhXCIpO1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2Uuc2VuZFRvU2VydmVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aHJlc2hvbGQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50cmllcyhlbnRyaWVzOiBhbnlbXSkge1xyXG4gICAgY29uc3QgeyBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCwgcGFjZUVudiB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gZW50cnkudG9KU09OKCkpO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKFRyYWNrUGVyZm9ybWFuY2UuY29tcHV0ZU1ldHJpY3MpO1xyXG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xyXG4gICAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudHJ5KS5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFjY1trZXldID0gZW50cnlba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucXVldWVkRW50cmllcyA9IHRoaXMucXVldWVkRW50cmllcy5jb25jYXQoZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2VuZFRvU2VydmVyKHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgeyBiYXRjaFNpemUgPSA1MCwgYXBwbGljYXRpb25JZCwgZW52LCBwYWNlRW52IH0gPSBzY29wZS5vcHRpb25zO1xyXG4gICAgY29uc3QgZW50cnlDaHVua3MgPSBUcmFja1BlcmZvcm1hbmNlLmNodW5rKHNjb3BlLnF1ZXVlZEVudHJpZXMsIGJhdGNoU2l6ZSk7XHJcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgdmFyIG1haW5FbnRyeUNodW5rID0gZW50cnlDaHVua3NcclxuICAgICAgLmZsYXQoKVxyXG4gICAgICAuZmluZCgoeyBuYW1lIH06IGFueSkgPT4gbmFtZSA9PSB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBtYWluRW50cnlDaHVuayA9IG1haW5FbnRyeUNodW5rID8gbWFpbkVudHJ5Q2h1bmsgOiBlbnRyeUNodW5rc1swXVswXTtcclxuICAgIG1haW5FbnRyeUNodW5rLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xyXG4gICAgaWYgKHNjb3BlLmxvY2F0aW9uSW5mbykge1xyXG4gICAgICBtYWluRW50cnlDaHVuay5jaXR5ID0gc2NvcGUubG9jYXRpb25JbmZvPy5jaXR5O1xyXG4gICAgICBtYWluRW50cnlDaHVuay5jb3VudHJ5ID0gc2NvcGUubG9jYXRpb25JbmZvPy5jb3VudHJ5O1xyXG4gICAgfVxyXG4gICAgbWFpbkVudHJ5Q2h1bmsuYmxvY2tpbmdKU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLmxlbmd0aDtcclxuICAgIG1haW5FbnRyeUNodW5rLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzLmxlbmd0aDtcclxuICAgIG1haW5FbnRyeUNodW5rLmludGVyYWN0aW9uVGltZSA9IHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UaW1lO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UeXBlID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5pbnRlcmFjdGlvbkVsZW1lbnQgPVxyXG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uRWxlbWVudDtcclxuICAgIG1haW5FbnRyeUNodW5rLmZpcnN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmZpcnN0Q29udGVudEZ1bGxQYWludDtcclxuICAgIG1haW5FbnRyeUNodW5rLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gc2NvcGUubGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQ7XHJcbiAgICBtYWluRW50cnlDaHVuay5wYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgIG1haW5FbnRyeUNodW5rLmZsYWdzID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5maXJzdENQVUlkbGUgPSBzY29wZS5maXJzdENQVUlkbGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5lbnZpcm9ubWVudCA9IHBhY2VFbnY7XHJcbiAgICBpZiAoZW52ID09IFwiZGV2XCIpXHJcbiAgICAgIHZhciB0cmFja1VybCA9IFwiaHR0cDovLzU0LjE1My4xMS4yMzM6MzAwMS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiO1xyXG4gICAgZWxzZSBpZiAoZW52ID09IFwicWFcIilcclxuICAgICAgdHJhY2tVcmwgPSBcImh0dHA6Ly8xNzIuMTYuMTIuNDU6MzAwMS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiO1xyXG4gICAgZWxzZSBpZiAoZW52ID09IFwic3RnYWluZ1wiKVxyXG4gICAgICB0cmFja1VybCA9XHJcbiAgICAgICAgXCJodHRwczovL3N0YWdpbmctcGFjZS5xZW50ZWxsaS5jb20vYXBpL3J1eC93cml0ZVBlcmZvbWFuY2VNZXRyaWNzXCI7XHJcbiAgICBlbHNlIHRyYWNrVXJsID0gXCJodHRwczovL3BhY2UucWVudGVsbGkuY29tL2FwaS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiO1xyXG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2godHJhY2tVcmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1haW5FbnRyeUNodW5rKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IGRldmljZSB0eXBlXHJcbiAgc3RhdGljIGdldERldmljZVR5cGUoKTogYW55IHtcclxuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICgvKHRhYmxldHxpcGFkfHBsYXlib29rfHNpbGspfChhbmRyb2lkKD8hLiptb2JpKSkvaS50ZXN0KHVhKSkge1xyXG4gICAgICByZXR1cm4gXCJ0YWJsZXRcIjtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcclxuICAgICAgICB1YVxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIFwibW9iaWxlXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJkZXNrdG9wXCI7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgT1NcclxuICBzdGF0aWMgZ2V0T1MoKTogYW55IHtcclxuICAgIHZhciB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuICAgICAgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLFxyXG4gICAgICBtYWNvc1BsYXRmb3JtcyA9IFtcIk1hY2ludG9zaFwiLCBcIk1hY0ludGVsXCIsIFwiTWFjUFBDXCIsIFwiTWFjNjhLXCJdLFxyXG4gICAgICB3aW5kb3dzUGxhdGZvcm1zID0gW1wiV2luMzJcIiwgXCJXaW42NFwiLCBcIldpbmRvd3NcIiwgXCJXaW5DRVwiXSxcclxuICAgICAgaW9zUGxhdGZvcm1zID0gW1wiaVBob25lXCIsIFwiaVBhZFwiLCBcImlQb2RcIl0sXHJcbiAgICAgIG9zID0gbnVsbDtcclxuXHJcbiAgICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbiAgICAgIG9zID0gXCJNYWMgT1NcIjtcclxuICAgIH0gZWxzZSBpZiAoaW9zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xyXG4gICAgICBvcyA9IFwiaU9TXCI7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbiAgICAgIG9zID0gXCJXaW5kb3dzXCI7XHJcbiAgICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcclxuICAgIH0gZWxzZSBpZiAoIW9zICYmIC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcclxuICAgICAgb3MgPSBcIkxpbnV4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9zO1xyXG4gIH1cclxuICBzdGF0aWMgY2FwdHVyZU5ldHdvcmtSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueVtdKTogYW55IHtcclxuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcclxuICAgIHZhciBjYXB0dXJlX2Nzc19yZXF1ZXN0ID0gW107XHJcbiAgICB2YXIgY2FwdHVyZV9pbWdfcmVxdWVzdCA9IFtdO1xyXG4gICAgdmFyIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QgPSBbXTtcclxuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcHR1cmVfcmVzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XHJcbiAgICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcclxuICAgICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcclxuICAgICAgICBjYXB0dXJlX2ltZ19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUuc3BsaXQoL1sjP10vKVswXS5zcGxpdChcIi5cIikucG9wKCkudHJpbSgpID09XHJcbiAgICAgICAgICBcImF0ZlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcHR1cmVfanNfcmVxdWVzdCxcclxuICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdCxcclxuICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdCxcclxuICAgICAgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXZnRE9NRGVwdGgodHJhY2tlcjogYW55KTogYW55IHtcclxuICAgIHZhciBkZXB0aCA9IDA7XHJcbiAgICB2YXIgcHJldk5vZGUgPSAwO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSkuZm9yRWFjaCgobm9kZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdHJhY2tlcltub2RlLnRhZ05hbWVdKSB0cmFja2VyW25vZGUudGFnTmFtZV0gPSAxO1xyXG4gICAgICBlbHNlIHRyYWNrZXJbbm9kZS50YWdOYW1lXSsrO1xyXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9IHByZXZOb2RlKSBkZXB0aCsrO1xyXG4gICAgICBwcmV2Tm9kZSA9IG5vZGU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkZXB0aCAvIDI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Zmlyc3RDb250ZW50RnVsbFBhaW50KHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xyXG4gICAgY29uc3QgZmlyc3RDb250ZW50RnVsbFBhaW50ID0gcGFpbnRUaW1pbmdzLmZpbmQoXHJcbiAgICAgICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gXCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCJcclxuICAgICk7XHJcbiAgICBzY29wZS5maXJzdENvbnRlbnRGdWxsUGFpbnQgPSBmaXJzdENvbnRlbnRGdWxsUGFpbnRcclxuICAgICAgPyBmaXJzdENvbnRlbnRGdWxsUGFpbnQuc3RhcnRUaW1lXHJcbiAgICAgIDogMDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRsYXJnZXN0Q29udGVudEZ1bGxQYWludChzY29wZTogYW55KTogYW55IHtcclxuICAgIG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChlbnRyeUxpc3QpID0+IHtcclxuICAgICAgdmFyIGxjcCA9IGVudHJ5TGlzdC5nZXRFbnRyaWVzKCk7XHJcbiAgICAgIGlmIChsY3AubGVuZ3RoKSB7XHJcbiAgICAgICAgc2NvcGUubGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQgPSBsY3BbbGNwLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICA/IGxjcFtsY3AubGVuZ3RoIC0gMV0uc3RhcnRUaW1lXHJcbiAgICAgICAgICA6IDA7XHJcbiAgICAgIH1cclxuICAgIH0pLm9ic2VydmUoeyB0eXBlOiBcImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLCBidWZmZXJlZDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhdGlvbigpOiBhbnkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9pcC1hcGkuY29tL2pzb25cIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coXCJlcnJvciBJUFwiKSB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW50ZXJhY3Rpb25NZXRyaXgoc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgZXZlbnRzID0gW1xyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwic2Nyb2xsXCIsXHJcbiAgICAgIFwiS2V5ZG93blwiLFxyXG4gICAgICAvLyBcImtleXByZXNzXCIsXHJcbiAgICAgIC8vIFwibW91c2VvdmVyXCIsXHJcbiAgICAgIC8vIFwibW91c2VvdXRcIixcclxuICAgICAgLy8gXCJtb3VzZWRvd25cIixcclxuICAgICAgLy8gXCJtb3VzZXVwXCIsXHJcbiAgICAgIFwiY2hhbmdlXCIsXHJcbiAgICAgIFwiYmx1clwiLFxyXG4gICAgICBcInN1Ym1pdFwiLFxyXG4gICAgICBcInVubG9hZFwiLFxyXG4gICAgICBcInJlc2l6ZVwiLFxyXG4gICAgICBcInRvdWNoc3RhcnRcIixcclxuICAgICAgLy8gXCJwb2ludGVyZG93blwiXHJcbiAgICBdO1xyXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgY29uc3QgZm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGludGVyYWN0aW9uSW5mbyA9IGZ1bmN0aW9uIChcclxuICAgICAgZXZlbnQ6IGFueSxcclxuICAgICAgc2NvcGU6IGFueSxcclxuICAgICAgc3RhcnREYXRlOiBhbnksXHJcbiAgICAgIGVsYXBzZWRUaW1lOiBhbnlcclxuICAgICkge1xyXG4gICAgICBUcmFja1BlcmZvcm1hbmNlLmludGVyYWN0aW9uVGltZShldmVudCwgc2NvcGUsIHN0YXJ0RGF0ZSwgZWxhcHNlZFRpbWUpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzKTtcclxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudFR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLmFjdGlvbkVsZW1lbnRzKFxyXG4gICAgICAgICAgZXZlbnQuc3JjRWxlbWVudCxcclxuICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICBlbGFwc2VkVGltZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW50ZXJhY3Rpb25UaW1lKFxyXG4gICAgZXZlbnQ6IGFueSxcclxuICAgIHNjb3BlOiBhbnksXHJcbiAgICBzdGFydERhdGU6IGFueSxcclxuICAgIGVsYXBzZWRUaW1lOiBhbnlcclxuICApIHtcclxuICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgc3BlbnRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpO1xyXG4gICAgZWxhcHNlZFRpbWUgKz0gc3BlbnRUaW1lO1xyXG4gICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblRpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgZWxhcHNlZFRpbWUgKiAxMDAwXHJcbiAgICApLmdldFNlY29uZHMoKTtcclxuICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UeXBlID0gZXZlbnQudHlwZTtcclxuICAgIGlmIChldmVudC50eXBlID09IFwiY2xpY2tcIikge1xyXG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLnBhZ2VVUkwgPSBldmVudC50YXJnZXQub3duZXJEb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLnVybFBhdGggPVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG4gICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvbkVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIoc2NvcGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIEpTU2l6ZSgpOiBhbnkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXNjcmlwdHNbaV0uc3JjKSBjb250ZW50ICs9IHNjcmlwdHNbaV0uaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSkuc2l6ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNaWxsaXNlY29uZHMoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXJ0IC0gZW5kKS5nZXRNaWxsaXNlY29uZHMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbmxpbmVTdHlsZVNpemUoaW5saW5lU3R5bGVTaXplOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdmFyIHN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc3R5bGVdXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaW5saW5lU3R5bGVTaXplID0gc3R5bGVzW2ldLmF0dHJpYnV0ZXM7XHJcbiAgICAgIGlmIChpbmxpbmVTdHlsZVNpemUuc3R5bGUpIGNvbnRlbnQgKz0gaW5saW5lU3R5bGVTaXplLnN0eWxlLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSkuc2l6ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBibG9ja2VkSlNSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgY2FwdHVyZV9qc19yZXF1ZXN0ID0gW107XHJcbiAgICBzY29wZS5ibG9ja2luZ0pTUmVxdWVzdHMgPSBbXTtcclxuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcHR1cmVfcmVzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKVxyXG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyBtYXAgZXZlcnkgdXJsIHRvIHRoZSBwcm9taXNlIG9mIHRoZSBmZXRjaFxyXG4gICAgbGV0IHJlcXVlc3RzID0gY2FwdHVyZV9qc19yZXF1ZXN0Lm1hcCgodXJsKSA9PiBmZXRjaCh1cmwpKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgKFByb21pc2UgYXMgYW55KS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcclxuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQ6IGFueSwgbnVtOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInJlamVjdGVkXCIpIHtcclxuICAgICAgICAgIHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cy5wdXNoKHJlcXVlc3RzW251bV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBibG9ja2VkQ1NTUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnksIHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xyXG4gICAgc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cyA9IFtdO1xyXG4gICAgY2FwdHVyZV9yZXNvdXJjZSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpXHJcbiAgICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgIH1cclxuICAgIC8vIG1hcCBldmVyeSB1cmwgdG8gdGhlIHByb21pc2Ugb2YgdGhlIGZldGNoXHJcbiAgICBsZXQgcmVxdWVzdHMgPSBjYXB0dXJlX2pzX3JlcXVlc3QubWFwKCh1cmwpID0+IGZldGNoKHVybCkpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAoUHJvbWlzZSBhcyBhbnkpLmFsbFNldHRsZWQocmVxdWVzdHMpLnRoZW4oKHJlc3VsdHM6IGFueSkgPT4ge1xyXG4gICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdDogYW55LCBudW06IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwicmVqZWN0ZWRcIikge1xyXG4gICAgICAgICAgc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cy5wdXNoKHJlcXVlc3RzW251bV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbmFjdGl2aXR5VGltZSh0aW1lOiBhbnksIHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIHRpbWU7XHJcbiAgICB3aW5kb3cub25sb2FkID0gcmVzZXRUaW1lcjtcclxuICAgIC8vIERPTSBFdmVudHNcclxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gcmVzZXRUaW1lcjtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHJlc2V0VGltZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xyXG4gICAgICB0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7IH0sIDMwMDApO1xyXG4gICAgICBzY29wZS5maXJzdENQVUlkbGUgPSB0aW1lO1xyXG4gICAgICAvLyAxMDAwIG1pbGxpc2Vjb25kcyA9IDEgc2Vjb25kXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlc2V0VGltZXIsIHRydWUpO1xyXG4gICAgdmFyIGV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcImtleXByZXNzXCIsIFwic2Nyb2xsXCIsIFwidG91Y2hzdGFydFwiXTtcclxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgcmVzZXRUaW1lciwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBicm93c2VyKCkge1xyXG4gICAgdmFyIHRlc3QgPSBmdW5jdGlvbiAocmVnZXhwOiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH07XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSB0ZXN0KC9lZGcvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiTWljcm9zb2Z0IEVkZ2VcIjtcclxuICAgICAgY2FzZSB0ZXN0KC90cmlkZW50L2kpOlxyXG4gICAgICAgIHJldHVybiBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiO1xyXG4gICAgICBjYXNlIHRlc3QoL2ZpcmVmb3h8Znhpb3MvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiTW96aWxsYSBGaXJlZm94XCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvb3ByXFwvL2kpOlxyXG4gICAgICAgIHJldHVybiBcIk9wZXJhXCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvdWNicm93c2VyL2kpOlxyXG4gICAgICAgIHJldHVybiBcIlVDIEJyb3dzZXJcIjtcclxuICAgICAgY2FzZSB0ZXN0KC9zYW1zdW5nYnJvd3Nlci9pKTpcclxuICAgICAgICByZXR1cm4gXCJTYW1zdW5nIEJyb3dzZXJcIjtcclxuICAgICAgY2FzZSB0ZXN0KC9jaHJvbWV8Y2hyb21pdW18Y3Jpb3MvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiR29vZ2xlIENocm9tZVwiO1xyXG4gICAgICBjYXNlIHRlc3QoL3NhZmFyaS9pKTpcclxuICAgICAgICByZXR1cm4gXCJBcHBsZSBTYWZhcmlcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJPdGhlclwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFjdGlvbkVsZW1lbnRzKFxyXG4gICAgZTogYW55LFxyXG4gICAgZXZlbnQ6IGFueSxcclxuICAgIHNjb3BlOiBhbnksXHJcbiAgICBzdGFydERhdGU6IGFueSxcclxuICAgIGVsYXBzZWRUaW1lOiBhbnlcclxuICApOiBhbnkge1xyXG4gICAgdmFyIHQgPSBUcmFja1BlcmZvcm1hbmNlLmdldFBhcmVudEVsZW1lbnRzKGUpO1xyXG4gICAgaWYgKHQpIHJldHVybiB0O1xyXG4gICAgaWYgKGUuaWQpIHJldHVybiBlLmlkO1xyXG4gICAgdmFyIG4gPSBcIklOUFVUXCIgPT09IGUudGFnTmFtZSAmJiBcInN1Ym1pdFwiID09PSBlLnR5cGUsXHJcbiAgICAgIHIgPSBcIkJVVFRPTlwiID09PSBlLnRhZ05hbWUsXHJcbiAgICAgIG8gPSBcIkFcIiA9PT0gZS50YWdOYW1lLFxyXG4gICAgICBnID0gXCJTUEFOXCIgPT09IGUudGFnTmFtZTtcclxuXHJcbiAgICBsZXQgcyA9XHJcbiAgICAgIG4gJiYgZS52YWx1ZVxyXG4gICAgICAgID8gZS52YWx1ZVxyXG4gICAgICAgIDogKHIgfHwgbyB8fCBnKSAmJiBlLmlubmVyVGV4dFxyXG4gICAgICAgICAgPyBlLmlubmVyVGV4dFxyXG4gICAgICAgICAgOiBUcmFja1BlcmZvcm1hbmNlLmdldFBhcmVudFRhZ05hbWUoZSlcclxuICAgICAgICAgICAgPyBUcmFja1BlcmZvcm1hbmNlLmFjdGlvbkVsZW1lbnRzKFxyXG4gICAgICAgICAgICAgIGUucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICBzY29wZSxcclxuICAgICAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgZWxhcHNlZFRpbWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICBpZiAobiB8fCByIHx8IG8gfHwgZylcclxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbnRlcmFjdGlvblRpbWUoZXZlbnQsIHNjb3BlLCBzdGFydERhdGUsIGVsYXBzZWRUaW1lKTtcclxuICAgIHJldHVybiBlPy50YWdOYW1lO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFBhcmVudEVsZW1lbnRzKGU6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgdDtcclxuICAgIGlmIChlPy5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNjdHJhY2tcIikpIHtcclxuICAgICAgdmFyIG4gPVxyXG4gICAgICAgIG51bGwgPT09ICh0ID0gZT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3RyYWNrXCIpKSB8fCB2b2lkIDAgPT09IHRcclxuICAgICAgICAgID8gdm9pZCAwXHJcbiAgICAgICAgICA6IHQudHJpbSgpO1xyXG4gICAgICBpZiAobikgcmV0dXJuIG47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVHJhY2tQZXJmb3JtYW5jZS5nZXRQYXJlbnRUYWdOYW1lKGUpXHJcbiAgICAgID8gVHJhY2tQZXJmb3JtYW5jZS5nZXRQYXJlbnRFbGVtZW50cyhlLnBhcmVudE5vZGUpXHJcbiAgICAgIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYXJlbnRUYWdOYW1lKGU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gISghZS5wYXJlbnROb2RlIHx8ICFlLnBhcmVudE5vZGUudGFnTmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgYSBnbG9iYWwgdmFyaWFibGUgdG8gYWNjZXNzIGxhdGVyXHJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tQZXJmb3JtYW5jZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==