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
        entry.tlsTime = window.performance.timing.requestStart - window.performance.timing.secureConnectionStart;
        // }
        // Time to First Byte (TTFB)
        entry.ttfb = window.performance.timing.responseStart - window.performance.timing.navigationStart;
        /*
          The fetchStart read-only property represents a timestamp immediately
          before the browser starts to fetch the resource.
        */
        entry.fetchTime = window.performance.timing.responseEnd - window.performance.timing.fetchStart;
        if (entry.workerStart > 0)
            entry.workerTime = window.performance.timing.responseEnd - entry.workerStart;
        /*
          The requestStart read-only property returns a timestamp of the time
          immediately before the browser starts requesting the resource from the
          server, cache, or local resource
          Request plus response time (network only)
        */
        entry.totalTime = window.performance.timing.responseEnd - window.performance.timing.requestStart,
            // Response time only (download)
            entry.downloadTime = window.performance.timing.responseEnd - window.performance.timing.responseStart,
            // HTTP header size
            entry.headerSize = entry.transferSize - entry.encodedBodySize;
        // Compression ratio
        entry.compressionRatio = entry.decodedBodySize / entry.encodedBodySize;
        // Page Time
        entry.domContentLoaded = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.connectStart;
        if (entry.domContentLoaded)
            entry.domContentLoaded = Math.sign(entry.domContentLoaded) == -1 ? entry.domContentLoaded * -1 : entry.domContentLoaded;
        entry.pageLoad = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
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
        entry.dnsLookUp = window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart;
        // Total Connection time
        entry.tcpConnect = window.performance.timing.connectEnd - window.performance.timing.connectStart,
            entry.sslNegotiation = entry.tlsTime;
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
        var _a = scope.options, _b = _a.batchSize, batchSize = _b === void 0 ? 50 : _b, applicationId = _a.applicationId, env = _a.env, paceEnv = _a.paceEnv;
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
            mainEntryChunk.city = scope.locationInfo.city;
            mainEntryChunk.country = scope.locationInfo.country;
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
        if (env == 'dev')
            var trackUrl = "http://54.153.11.233:3001/rux/writePerfomanceMetrics";
        else if (env == 'qa')
            trackUrl = "http://172.16.12.45:3001/rux/writePerfomanceMetrics";
        else if (env == 'stgaing')
            trackUrl = "https://staging-pace.qentelli.com/api/rux/writePerfomanceMetrics";
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
            scope.queuedEntries[0].pageURL =
                event.target.ownerDocument.location.href;
            scope.queuedEntries[0].urlPath =
                event.target.ownerDocument.location.pathname;
        }
        scope.queuedEntries[0].interactionElement = event.target.className;
        TrackPerformance.sendToServer(scope);
    };
    ;
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
        var s = n && e.value ? e.value : (r || o || g) && e.innerText ? e.innerText : TrackPerformance.getParentTagName(e) ? TrackPerformance.actionElements(e.parentNode, event, scope, startDate, elapsedTime) : "";
        if (n || r || o || g)
            TrackPerformance.interactionTime(event, scope, startDate, elapsedTime);
        return (_a = e) === null || _a === void 0 ? void 0 : _a.tagName;
    };
    TrackPerformance.getParentElements = function (e) {
        var _a, _b;
        var t;
        if ((_a = e) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-sctrack")) {
            var n = null === (t = (_b = e) === null || _b === void 0 ? void 0 : _b.getAttribute("data-sctrack")) || void 0 === t ? void 0 : t.trim();
            if (n)
                return n;
        }
        return TrackPerformance.getParentTagName(e) ? TrackPerformance.getParentElements(e.parentNode) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtJQTZHRSwwQkFBWSxFQVFlO1FBUjNCLGlCQXdEQztZQXZEQyxZQUFHLEVBQ0gsb0JBQU8sRUFDUCxpQkFBYSxFQUFiLGtDQUFhLEVBQ2IsaUJBQWMsRUFBZCxtQ0FBYyxFQUNkLG1CQUFrRCxFQUFsRCx1RUFBa0QsRUFDbEQsb0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixnQ0FBYTtRQUViLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxF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QUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUN2RyxDQUFDO0lBRU0saUNBQWdCLEdBQXZCLFVBQXdCLENBQU07UUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQztBQUVELDJDQUEyQztBQUMxQyxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsa0JBQWUsZ0JBQWdCLENBQUMiLCJmaWxlIjoicnVtLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMge1xyXG4gIGVudjogc3RyaW5nO1xyXG4gIHBhY2VFbnY6IHN0cmluZyxcclxuICB0aHJlc2hvbGQ/OiBudW1iZXI7XHJcbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xyXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXTtcclxuICBpbmNsdWRlSG9zdHM6IHN0cmluZ1tdO1xyXG4gIGFwcGxpY2F0aW9uSWQ6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgVHJhY2tQZXJmb3JtYW5jZSB7XHJcbiAgc3RhdGljIGNvbXB1dGVNZXRyaWNzKFxyXG4gICAgZW50cnk6IGFueSxcclxuICAgIHR5cGU6IGFueSxcclxuICAgIGRvbTogYW55LFxyXG4gICAgY2FwdHVyZVJlcXVlc3RzQ291bnQ6IGFueSA9IFtdLFxyXG4gICAgY2FwdHVyZVJlcXVlc3RzOiBhbnkgPSBbXVxyXG4gICkge1xyXG4gICAgLy8gVExTIHRpbWVcclxuICAgIC8vIGlmIChlbnRyeS5zZWN1cmVDb25uZWN0aW9uU3RhcnQgPiAwKSB7XHJcbiAgICBlbnRyeS50bHNUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXF1ZXN0U3RhcnQgLSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnNlY3VyZUNvbm5lY3Rpb25TdGFydDtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gVGltZSB0byBGaXJzdCBCeXRlIChUVEZCKVxyXG4gICAgZW50cnkudHRmYiA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCAtIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAgIFRoZSBmZXRjaFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXByZXNlbnRzIGEgdGltZXN0YW1wIGltbWVkaWF0ZWx5XHJcbiAgICAgIGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgdG8gZmV0Y2ggdGhlIHJlc291cmNlLlxyXG4gICAgKi9cclxuICAgIGVudHJ5LmZldGNoVGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQgLSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmZldGNoU3RhcnRcclxuXHJcblxyXG4gICAgaWYgKGVudHJ5LndvcmtlclN0YXJ0ID4gMClcclxuICAgICAgZW50cnkud29ya2VyVGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQgLSBlbnRyeS53b3JrZXJTdGFydFxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICBUaGUgcmVxdWVzdFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXR1cm5zIGEgdGltZXN0YW1wIG9mIHRoZSB0aW1lXHJcbiAgICAgIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UgZnJvbSB0aGVcclxuICAgICAgc2VydmVyLCBjYWNoZSwgb3IgbG9jYWwgcmVzb3VyY2VcclxuICAgICAgUmVxdWVzdCBwbHVzIHJlc3BvbnNlIHRpbWUgKG5ldHdvcmsgb25seSlcclxuICAgICovXHJcbiAgICBlbnRyeS50b3RhbFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kIC0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXF1ZXN0U3RhcnQsXHJcblxyXG5cclxuICAgICAgLy8gUmVzcG9uc2UgdGltZSBvbmx5IChkb3dubG9hZClcclxuICAgICAgZW50cnkuZG93bmxvYWRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCAtIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCxcclxuXHJcblxyXG4gICAgICAvLyBIVFRQIGhlYWRlciBzaXplXHJcbiAgICAgIGVudHJ5LmhlYWRlclNpemUgPSBlbnRyeS50cmFuc2ZlclNpemUgLSBlbnRyeS5lbmNvZGVkQm9keVNpemU7XHJcblxyXG4gICAgLy8gQ29tcHJlc3Npb24gcmF0aW9cclxuICAgIGVudHJ5LmNvbXByZXNzaW9uUmF0aW8gPSBlbnRyeS5kZWNvZGVkQm9keVNpemUgLyBlbnRyeS5lbmNvZGVkQm9keVNpemU7XHJcblxyXG4gICAgLy8gUGFnZSBUaW1lXHJcbiAgICBlbnRyeS5kb21Db250ZW50TG9hZGVkID0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQgLSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RTdGFydDtcclxuXHJcbiAgICBpZiAoZW50cnkuZG9tQ29udGVudExvYWRlZCkgZW50cnkuZG9tQ29udGVudExvYWRlZCA9IE1hdGguc2lnbihlbnRyeS5kb21Db250ZW50TG9hZGVkKSA9PSAtMSA/IGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgKiAtMSA6IGVudHJ5LmRvbUNvbnRlbnRMb2FkZWRcclxuICAgIGVudHJ5LnBhZ2VMb2FkID0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5sb2FkRXZlbnRFbmQgLSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxyXG4gICAgZW50cnkuc3RhcnRSZW5kZXIgPSBlbnRyeS5zdGFydFRpbWU7XHJcbiAgICAvLyBlbnRyeS5maXJzdENQVUlkbGUgPSB0eXBlLmhhcmR3YXJlQ29uY3VycmVuY3k7XHJcbiAgICBkb20gPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXTtcclxuICAgIHR5cGUgPSBuYXZpZ2F0b3I7XHJcbiAgICBlbnRyeS5icm93c2VyID0gVHJhY2tQZXJmb3JtYW5jZS5icm93c2VyKCk7XHJcbiAgICBlbnRyeS51c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgZW50cnkub3MgPSBUcmFja1BlcmZvcm1hbmNlLmdldE9TKCk7XHJcbiAgICBlbnRyeS5kZXZpY2VUeXBlID0gVHJhY2tQZXJmb3JtYW5jZS5nZXREZXZpY2VUeXBlKCk7XHJcbiAgICBlbnRyeS5jb25uZWN0aW9uVHlwZSA9IHR5cGUuY29ubmVjdGlvblxyXG4gICAgICA/IHR5cGUuY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlXHJcbiAgICAgIDogXCI0Z1wiO1xyXG4gICAgKGVudHJ5LnJ1bVZlcnNpb24gPSBcIjEuMC4wXCIpLCAoZW50cnkuZG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgIGVudHJ5LnBhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGVudHJ5LnVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBlbnRyeS5iYWNrZW5kID0gZW50cnkudHRmYjtcclxuICAgIGVudHJ5LnJlZGlyZWN0ID0gZW50cnkuc3RhcnRUaW1lIC0gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZWRpcmVjdFN0YXJ0XHJcbiAgICBlbnRyeS5kbnNMb29rVXAgPSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbWFpbkxvb2t1cEVuZCAtIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tYWluTG9va3VwU3RhcnRcclxuXHJcbiAgICAvLyBUb3RhbCBDb25uZWN0aW9uIHRpbWVcclxuICAgIGVudHJ5LnRjcENvbm5lY3QgPSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RFbmQgLSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RTdGFydCxcclxuXHJcbiAgICAgIGVudHJ5LnNzbE5lZ290aWF0aW9uID0gZW50cnkudGxzVGltZTtcclxuICAgIGVudHJ5Lm5ldHdvcmsgPSBlbnRyeS50Y3BDb25uZWN0ICsgZW50cnkuc3NsTmVnb3RpYXRpb24gKyBlbnRyeS5kbnNMb29rVXA7XHJcbiAgICBlbnRyeS5kb21FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XHJcbiAgICBlbnRyeS5kb21JbnRlcmFjdGl2ZSA9IGRvbS5kb21JbnRlcmFjdGl2ZS50b0ZpeGVkKCk7XHJcbiAgICBlbnRyeS5hdmVyYWdlRE9NRGVwdGggPSBUcmFja1BlcmZvcm1hbmNlLmF2Z0RPTURlcHRoKFtdKTtcclxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50ID1cclxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5jYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZVJlcXVlc3RzKTtcclxuICAgIGVudHJ5LmltYWdlUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ19yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5LmNzc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9jc3NfcmVxdWVzdC5sZW5ndGg7XHJcbiAgICBlbnRyeS5qc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9qc19yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5LmltYWdlQVRGUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5Lmh0bWxTaXplID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwubGVuZ3RoIC8gMTAyNCkudG9GaXhlZChcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIGVudHJ5LmlubGluZUpTU2l6ZSA9IFRyYWNrUGVyZm9ybWFuY2UuSlNTaXplKCk7XHJcbiAgICBlbnRyeS5pbmxpbmVTdHlsZVNpemUgPSBUcmFja1BlcmZvcm1hbmNlLmlubGluZVN0eWxlU2l6ZShbXSk7XHJcbiAgICBlbnRyeS5wcm9qZWN0ID0gXCJQQUNFXCI7XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2h1bmsoYXJyYXk6IGFueVtdLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHJlcywgaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICUgc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIHJlcy5wdXNoKFtdKTtcclxuICAgICAgfVxyXG4gICAgICByZXNbcmVzLmxlbmd0aCAtIDFdLnB1c2goaXRlbSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG4gIHF1ZXVlZEVudHJpZXM6IGFueVtdO1xyXG4gIGxvY2F0aW9uSW5mbzogYW55O1xyXG4gIGJsb2NraW5nSlNSZXF1ZXN0czogYW55O1xyXG4gIGJsb2NraW5nQ1NTUmVxdWVzdHM6IGFueTtcclxuICBvcHRpb25zOiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnM7XHJcbiAgaW50ZXJ2YWxJZDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGVudixcclxuICAgIHBhY2VFbnYsXHJcbiAgICB0aHJlc2hvbGQgPSAwLFxyXG4gICAgYmF0Y2hTaXplID0gNTAsXHJcbiAgICBleGNsdWRlS2V5cyA9IFtcIm5leHRIb3BQcm90b2NvbFwiLCBcImluaXRpYXRvclR5cGVcIl0sXHJcbiAgICBpbmNsdWRlSG9zdHMgPSBbXSxcclxuICAgIGFwcGxpY2F0aW9uSWQsXHJcbiAgfTogSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zKSB7XHJcbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcclxuICAgIHRoaXMubG9jYXRpb25JbmZvID0ge307XHJcbiAgICB0aGlzLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xyXG4gICAgdGhpcy5ibG9ja2luZ0NTU1JlcXVlc3RzID0gW107XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGVudixcclxuICAgICAgcGFjZUVudixcclxuICAgICAgdGhyZXNob2xkLFxyXG4gICAgICBiYXRjaFNpemUsXHJcbiAgICAgIGV4Y2x1ZGVLZXlzLFxyXG4gICAgICBpbmNsdWRlSG9zdHMsXHJcbiAgICAgIGFwcGxpY2F0aW9uSWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGlmIChcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICBjb25zdCBwZXJmT2JzZXJ2ZXIgPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigobGlzdCwgb2JqKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMobGlzdC5nZXRFbnRyaWVzKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwZXJmT2JzZXJ2ZXIub2JzZXJ2ZSh7XHJcbiAgICAgICAgICBlbnRyeVR5cGVzOiBbXCJyZXNvdXJjZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUby1Eb1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2UuaW5hY3Rpdml0eVRpbWUoMCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkluZm8gPSBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5ibG9ja2VkSlNSZXF1ZXN0KFtdLCB0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmJsb2NrZWRDU1NSZXF1ZXN0KFtdLCB0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGZpcnN0Q29udGVudEZ1bGxQYWludCh0aGlzKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGxhcmdlc3RDb250ZW50RnVsbFBhaW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKSk7XHJcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbnRlcmFjdGlvbk1ldHJpeCh0aGlzKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXAgc2V0SW50ZXJ2YWwgdG8gcHVzaCB0cmFjayBkYXRhXCIpO1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2Uuc2VuZFRvU2VydmVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aHJlc2hvbGQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50cmllcyhlbnRyaWVzOiBhbnlbXSkge1xyXG4gICAgY29uc3QgeyBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCwgcGFjZUVudiB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gZW50cnkudG9KU09OKCkpO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKFRyYWNrUGVyZm9ybWFuY2UuY29tcHV0ZU1ldHJpY3MpO1xyXG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xyXG4gICAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudHJ5KS5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFjY1trZXldID0gZW50cnlba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucXVldWVkRW50cmllcyA9IHRoaXMucXVldWVkRW50cmllcy5jb25jYXQoZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2VuZFRvU2VydmVyKHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgeyBiYXRjaFNpemUgPSA1MCwgYXBwbGljYXRpb25JZCwgZW52LCBwYWNlRW52IH0gPSBzY29wZS5vcHRpb25zO1xyXG4gICAgY29uc3QgZW50cnlDaHVua3MgPSBUcmFja1BlcmZvcm1hbmNlLmNodW5rKHNjb3BlLnF1ZXVlZEVudHJpZXMsIGJhdGNoU2l6ZSk7XHJcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgdmFyIG1haW5FbnRyeUNodW5rID0gZW50cnlDaHVua3NcclxuICAgICAgLmZsYXQoKVxyXG4gICAgICAuZmluZCgoeyBuYW1lIH06IGFueSkgPT4gbmFtZSA9PSB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBtYWluRW50cnlDaHVuayA9IG1haW5FbnRyeUNodW5rID8gbWFpbkVudHJ5Q2h1bmsgOiBlbnRyeUNodW5rc1swXVswXTtcclxuICAgIG1haW5FbnRyeUNodW5rLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xyXG4gICAgaWYgKHNjb3BlLmxvY2F0aW9uSW5mbykge1xyXG4gICAgICBtYWluRW50cnlDaHVuay5jaXR5ID0gc2NvcGUubG9jYXRpb25JbmZvLmNpdHk7XHJcbiAgICAgIG1haW5FbnRyeUNodW5rLmNvdW50cnkgPSBzY29wZS5sb2NhdGlvbkluZm8uY291bnRyeTtcclxuICAgIH1cclxuICAgIG1haW5FbnRyeUNodW5rLmJsb2NraW5nSlNSZXF1ZXN0cyA9IHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cy5sZW5ndGg7XHJcbiAgICBtYWluRW50cnlDaHVuay5ibG9ja2luZ0NTU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cy5sZW5ndGg7XHJcbiAgICBtYWluRW50cnlDaHVuay5pbnRlcmFjdGlvblRpbWUgPSBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uVGltZTtcclxuICAgIG1haW5FbnRyeUNodW5rLmludGVyYWN0aW9uVHlwZSA9IHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UeXBlO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25FbGVtZW50ID1cclxuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvbkVsZW1lbnQ7XHJcbiAgICBtYWluRW50cnlDaHVuay5maXJzdENvbnRlbnRGdWxsUGFpbnQgPSBzY29wZS5maXJzdENvbnRlbnRGdWxsUGFpbnQ7XHJcbiAgICBtYWluRW50cnlDaHVuay5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50O1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsucGFnZVRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5mbGFncyA9IGRvY3VtZW50LnRpdGxlO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuZmlyc3RDUFVJZGxlID0gc2NvcGUuZmlyc3RDUFVJZGxlO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuZW52aXJvbm1lbnQgPSBwYWNlRW52O1xyXG4gICAgaWYgKGVudiA9PSAnZGV2JykgdmFyIHRyYWNrVXJsID0gXCJodHRwOi8vNTQuMTUzLjExLjIzMzozMDAxL3J1eC93cml0ZVBlcmZvbWFuY2VNZXRyaWNzXCI7XHJcbiAgICBlbHNlIGlmIChlbnYgPT0gJ3FhJykgdHJhY2tVcmwgPSBcImh0dHA6Ly8xNzIuMTYuMTIuNDU6MzAwMS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiXHJcbiAgICBlbHNlIGlmIChlbnYgPT0gJ3N0Z2FpbmcnKSB0cmFja1VybCA9IFwiaHR0cHM6Ly9zdGFnaW5nLXBhY2UucWVudGVsbGkuY29tL2FwaS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiXHJcbiAgICBlbHNlIHRyYWNrVXJsID0gXCJodHRwczovL3BhY2UucWVudGVsbGkuY29tL2FwaS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiXHJcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaCh0cmFja1VybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWFpbkVudHJ5Q2h1bmspLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElkKTtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IDA7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgZGV2aWNlIHR5cGVcclxuICBzdGF0aWMgZ2V0RGV2aWNlVHlwZSgpOiBhbnkge1xyXG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmkpKS9pLnRlc3QodWEpKSB7XHJcbiAgICAgIHJldHVybiBcInRhYmxldFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxLaW5kbGV8U2lsay1BY2NlbGVyYXRlZHwoaHB3fHdlYilPU3xPcGVyYSBNKG9iaXxpbmkpLy50ZXN0KFxyXG4gICAgICAgIHVhXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gXCJtb2JpbGVcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcImRlc2t0b3BcIjtcclxuICB9XHJcblxyXG4gIC8vIEdldCBPU1xyXG4gIHN0YXRpYyBnZXRPUygpOiBhbnkge1xyXG4gICAgdmFyIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxyXG4gICAgICBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0sXHJcbiAgICAgIG1hY29zUGxhdGZvcm1zID0gW1wiTWFjaW50b3NoXCIsIFwiTWFjSW50ZWxcIiwgXCJNYWNQUENcIiwgXCJNYWM2OEtcIl0sXHJcbiAgICAgIHdpbmRvd3NQbGF0Zm9ybXMgPSBbXCJXaW4zMlwiLCBcIldpbjY0XCIsIFwiV2luZG93c1wiLCBcIldpbkNFXCJdLFxyXG4gICAgICBpb3NQbGF0Zm9ybXMgPSBbXCJpUGhvbmVcIiwgXCJpUGFkXCIsIFwiaVBvZFwiXSxcclxuICAgICAgb3MgPSBudWxsO1xyXG5cclxuICAgIGlmIChtYWNvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuICAgICAgb3MgPSBcIk1hYyBPU1wiO1xyXG4gICAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbiAgICAgIG9zID0gXCJpT1NcIjtcclxuICAgIH0gZWxzZSBpZiAod2luZG93c1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuICAgICAgb3MgPSBcIldpbmRvd3NcIjtcclxuICAgIH0gZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICBvcyA9IFwiQW5kcm9pZFwiO1xyXG4gICAgfSBlbHNlIGlmICghb3MgJiYgL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSkge1xyXG4gICAgICBvcyA9IFwiTGludXhcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3M7XHJcbiAgfVxyXG4gIHN0YXRpYyBjYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55W10pOiBhbnkge1xyXG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xyXG4gICAgdmFyIGNhcHR1cmVfY3NzX3JlcXVlc3QgPSBbXTtcclxuICAgIHZhciBjYXB0dXJlX2ltZ19yZXF1ZXN0ID0gW107XHJcbiAgICB2YXIgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdCA9IFtdO1xyXG4gICAgY2FwdHVyZV9yZXNvdXJjZSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwic2NyaXB0XCIpIHtcclxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJjc3NcIikge1xyXG4gICAgICAgIGNhcHR1cmVfY3NzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJpbWdcIikge1xyXG4gICAgICAgIGNhcHR1cmVfaW1nX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZS5zcGxpdCgvWyM/XS8pWzBdLnNwbGl0KFwiLlwiKS5wb3AoKS50cmltKCkgPT1cclxuICAgICAgICAgIFwiYXRmXCJcclxuICAgICAgICApXHJcbiAgICAgICAgICBjYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LFxyXG4gICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LFxyXG4gICAgICBjYXB0dXJlX2ltZ19yZXF1ZXN0LFxyXG4gICAgICBjYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhdmdET01EZXB0aCh0cmFja2VyOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIGRlcHRoID0gMDtcclxuICAgIHZhciBwcmV2Tm9kZSA9IDA7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKChub2RlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF0cmFja2VyW25vZGUudGFnTmFtZV0pIHRyYWNrZXJbbm9kZS50YWdOYW1lXSA9IDE7XHJcbiAgICAgIGVsc2UgdHJhY2tlcltub2RlLnRhZ05hbWVdKys7XHJcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT0gcHJldk5vZGUpIGRlcHRoKys7XHJcbiAgICAgIHByZXZOb2RlID0gbm9kZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRlcHRoIC8gMjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQoc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwYWludFRpbWluZ3MgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicGFpbnRcIik7XHJcbiAgICBjb25zdCBmaXJzdENvbnRlbnRGdWxsUGFpbnQgPSBwYWludFRpbWluZ3MuZmluZChcclxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxyXG4gICAgKTtcclxuICAgIHNjb3BlLmZpcnN0Q29udGVudEZ1bGxQYWludCA9IGZpcnN0Q29udGVudEZ1bGxQYWludFxyXG4gICAgICA/IGZpcnN0Q29udGVudEZ1bGxQYWludC5zdGFydFRpbWVcclxuICAgICAgOiAwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldGxhcmdlc3RDb250ZW50RnVsbFBhaW50KHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGVudHJ5TGlzdCkgPT4ge1xyXG4gICAgICB2YXIgbGNwID0gZW50cnlMaXN0LmdldEVudHJpZXMoKTtcclxuICAgICAgaWYgKGxjcC5sZW5ndGgpIHtcclxuICAgICAgICBzY29wZS5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IGxjcFtsY3AubGVuZ3RoIC0gMV1cclxuICAgICAgICAgID8gbGNwW2xjcC5sZW5ndGggLSAxXS5zdGFydFRpbWVcclxuICAgICAgICAgIDogMDtcclxuICAgICAgfVxyXG4gICAgfSkub2JzZXJ2ZSh7IHR5cGU6IFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIGJ1ZmZlcmVkOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExvY2F0aW9uKCk6IGFueSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9pcC1hcGkuY29tL2pzb25cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW50ZXJhY3Rpb25NZXRyaXgoc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgZXZlbnRzID0gW1xyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIFwic2Nyb2xsXCIsXHJcbiAgICAgIFwiS2V5ZG93blwiLFxyXG4gICAgICAvLyBcImtleXByZXNzXCIsXHJcbiAgICAgIC8vIFwibW91c2VvdmVyXCIsXHJcbiAgICAgIC8vIFwibW91c2VvdXRcIixcclxuICAgICAgLy8gXCJtb3VzZWRvd25cIixcclxuICAgICAgLy8gXCJtb3VzZXVwXCIsXHJcbiAgICAgIFwiY2hhbmdlXCIsXHJcbiAgICAgIFwiYmx1clwiLFxyXG4gICAgICBcInN1Ym1pdFwiLFxyXG4gICAgICBcInVubG9hZFwiLFxyXG4gICAgICBcInJlc2l6ZVwiLFxyXG4gICAgICBcInRvdWNoc3RhcnRcIixcclxuICAgICAgLy8gXCJwb2ludGVyZG93blwiXHJcbiAgICBdO1xyXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgY29uc3QgZm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGludGVyYWN0aW9uSW5mbyA9IGZ1bmN0aW9uIChldmVudDogYW55LCBzY29wZTogYW55LCBzdGFydERhdGU6IGFueSwgZWxhcHNlZFRpbWU6IGFueSkge1xyXG4gICAgICBUcmFja1BlcmZvcm1hbmNlLmludGVyYWN0aW9uVGltZShldmVudCwgc2NvcGUsIHN0YXJ0RGF0ZSwgZWxhcHNlZFRpbWUpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzKTtcclxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudFR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLmFjdGlvbkVsZW1lbnRzKGV2ZW50LnNyY0VsZW1lbnQsIGV2ZW50LCBzY29wZSwgc3RhcnREYXRlLCBlbGFwc2VkVGltZSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnRlcmFjdGlvblRpbWUoZXZlbnQ6IGFueSwgc2NvcGU6IGFueSwgc3RhcnREYXRlOiBhbnksIGVsYXBzZWRUaW1lOiBhbnkpIHtcclxuICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgc3BlbnRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpO1xyXG4gICAgZWxhcHNlZFRpbWUgKz0gc3BlbnRUaW1lO1xyXG4gICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblRpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgZWxhcHNlZFRpbWUgKiAxMDAwXHJcbiAgICApLmdldFNlY29uZHMoKTtcclxuICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UeXBlID0gZXZlbnQudHlwZTtcclxuICAgIGlmIChldmVudC50eXBlID09IFwiY2xpY2tcIikge1xyXG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLnBhZ2VVUkwgPVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0udXJsUGF0aCA9XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbiAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICBUcmFja1BlcmZvcm1hbmNlLnNlbmRUb1NlcnZlcihzY29wZSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIEpTU2l6ZSgpOiBhbnkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXNjcmlwdHNbaV0uc3JjKSBjb250ZW50ICs9IHNjcmlwdHNbaV0uaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSkuc2l6ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNaWxsaXNlY29uZHMoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXJ0IC0gZW5kKS5nZXRNaWxsaXNlY29uZHMoKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlubGluZVN0eWxlU2l6ZShpbmxpbmVTdHlsZVNpemU6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICB2YXIgc3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltzdHlsZV1cIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpbmxpbmVTdHlsZVNpemUgPSBzdHlsZXNbaV0uYXR0cmlidXRlcztcclxuICAgICAgaWYgKGlubGluZVN0eWxlU2l6ZS5zdHlsZSkgY29udGVudCArPSBpbmxpbmVTdHlsZVNpemUuc3R5bGUudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdKS5zaXplO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJsb2NrZWRKU1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55LCBzY29wZTogYW55KTogYW55IHtcclxuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcclxuICAgIHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xyXG4gICAgY2FwdHVyZV9yZXNvdXJjZSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwic2NyaXB0XCIpXHJcbiAgICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcclxuICAgIH1cclxuICAgIC8vIG1hcCBldmVyeSB1cmwgdG8gdGhlIHByb21pc2Ugb2YgdGhlIGZldGNoXHJcbiAgICBsZXQgcmVxdWVzdHMgPSBjYXB0dXJlX2pzX3JlcXVlc3QubWFwKCh1cmwpID0+IGZldGNoKHVybCkpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAoUHJvbWlzZSBhcyBhbnkpLmFsbFNldHRsZWQocmVxdWVzdHMpLnRoZW4oKHJlc3VsdHM6IGFueSkgPT4ge1xyXG4gICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdDogYW55LCBudW06IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwicmVqZWN0ZWRcIikge1xyXG4gICAgICAgICAgc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLnB1c2gocmVxdWVzdHNbbnVtXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJsb2NrZWRDU1NSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgY2FwdHVyZV9qc19yZXF1ZXN0ID0gW107XHJcbiAgICBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzID0gW107XHJcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJjc3NcIilcclxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gbWFwIGV2ZXJ5IHVybCB0byB0aGUgcHJvbWlzZSBvZiB0aGUgZmV0Y2hcclxuICAgIGxldCByZXF1ZXN0cyA9IGNhcHR1cmVfanNfcmVxdWVzdC5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIChQcm9taXNlIGFzIGFueSkuYWxsU2V0dGxlZChyZXF1ZXN0cykudGhlbigocmVzdWx0czogYW55KSA9PiB7XHJcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnksIG51bTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJyZWplY3RlZFwiKSB7XHJcbiAgICAgICAgICBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzLnB1c2gocmVxdWVzdHNbbnVtXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGluYWN0aXZpdHlUaW1lKHRpbWU6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgdGltZTtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSByZXNldFRpbWVyO1xyXG4gICAgLy8gRE9NIEV2ZW50c1xyXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSByZXNldFRpbWVyO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gcmVzZXRUaW1lcjtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZSk7XHJcbiAgICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHsgfSwgMzAwMCk7XHJcbiAgICAgIHNjb3BlLmZpcnN0Q1BVSWRsZSA9IHRpbWU7XHJcbiAgICAgIC8vIDEwMDAgbWlsbGlzZWNvbmRzID0gMSBzZWNvbmRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVzZXRUaW1lciwgdHJ1ZSk7XHJcbiAgICB2YXIgZXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2Vtb3ZlXCIsIFwia2V5cHJlc3NcIiwgXCJzY3JvbGxcIiwgXCJ0b3VjaHN0YXJ0XCJdO1xyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCByZXNldFRpbWVyLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJyb3dzZXIoKSB7XHJcbiAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChyZWdleHA6IFJlZ0V4cCkge1xyXG4gICAgICByZXR1cm4gcmVnZXhwLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfTtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIHRlc3QoL2VkZy9pKTpcclxuICAgICAgICByZXR1cm4gXCJNaWNyb3NvZnQgRWRnZVwiO1xyXG4gICAgICBjYXNlIHRlc3QoL3RyaWRlbnQvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvZmlyZWZveHxmeGlvcy9pKTpcclxuICAgICAgICByZXR1cm4gXCJNb3ppbGxhIEZpcmVmb3hcIjtcclxuICAgICAgY2FzZSB0ZXN0KC9vcHJcXC8vaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiT3BlcmFcIjtcclxuICAgICAgY2FzZSB0ZXN0KC91Y2Jyb3dzZXIvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiVUMgQnJvd3NlclwiO1xyXG4gICAgICBjYXNlIHRlc3QoL3NhbXN1bmdicm93c2VyL2kpOlxyXG4gICAgICAgIHJldHVybiBcIlNhbXN1bmcgQnJvd3NlclwiO1xyXG4gICAgICBjYXNlIHRlc3QoL2Nocm9tZXxjaHJvbWl1bXxjcmlvcy9pKTpcclxuICAgICAgICByZXR1cm4gXCJHb29nbGUgQ2hyb21lXCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvc2FmYXJpL2kpOlxyXG4gICAgICAgIHJldHVybiBcIkFwcGxlIFNhZmFyaVwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIk90aGVyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGFjdGlvbkVsZW1lbnRzKGU6IGFueSwgZXZlbnQ6IGFueSwgc2NvcGU6IGFueSwgc3RhcnREYXRlOiBhbnksIGVsYXBzZWRUaW1lOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIHQgPSBUcmFja1BlcmZvcm1hbmNlLmdldFBhcmVudEVsZW1lbnRzKGUpO1xyXG4gICAgaWYgKHQpXHJcbiAgICAgIHJldHVybiB0O1xyXG4gICAgaWYgKGUuaWQpXHJcbiAgICAgIHJldHVybiBlLmlkO1xyXG4gICAgdmFyIG4gPSBcIklOUFVUXCIgPT09IGUudGFnTmFtZSAmJiBcInN1Ym1pdFwiID09PSBlLnR5cGVcclxuICAgICAgLCByID0gXCJCVVRUT05cIiA9PT0gZS50YWdOYW1lXHJcbiAgICAgICwgbyA9IFwiQVwiID09PSBlLnRhZ05hbWVcclxuICAgICAgLCBnID0gXCJTUEFOXCIgPT09IGUudGFnTmFtZTtcclxuXHJcbiAgICBsZXQgcyA9IG4gJiYgZS52YWx1ZSA/IGUudmFsdWUgOiAociB8fCBvIHx8IGcpICYmIGUuaW5uZXJUZXh0ID8gZS5pbm5lclRleHQgOiBUcmFja1BlcmZvcm1hbmNlLmdldFBhcmVudFRhZ05hbWUoZSkgPyBUcmFja1BlcmZvcm1hbmNlLmFjdGlvbkVsZW1lbnRzKGUucGFyZW50Tm9kZSwgZXZlbnQsIHNjb3BlLCBzdGFydERhdGUsIGVsYXBzZWRUaW1lKSA6IFwiXCJcclxuICAgIGlmIChuIHx8IHIgfHwgbyB8fCBnKSBUcmFja1BlcmZvcm1hbmNlLmludGVyYWN0aW9uVGltZShldmVudCwgc2NvcGUsIHN0YXJ0RGF0ZSwgZWxhcHNlZFRpbWUpO1xyXG4gICAgcmV0dXJuIGU/LnRhZ05hbWVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYXJlbnRFbGVtZW50cyhlOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICBpZiAoZT8uaGFzQXR0cmlidXRlKFwiZGF0YS1zY3RyYWNrXCIpKSB7XHJcbiAgICAgIHZhciBuID0gbnVsbCA9PT0gKHQgPSBlPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjdHJhY2tcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudHJpbSgpO1xyXG4gICAgICBpZiAobilcclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRyYWNrUGVyZm9ybWFuY2UuZ2V0UGFyZW50VGFnTmFtZShlKSA/IFRyYWNrUGVyZm9ybWFuY2UuZ2V0UGFyZW50RWxlbWVudHMoZS5wYXJlbnROb2RlKSA6IG51bGxcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYXJlbnRUYWdOYW1lKGU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gISghZS5wYXJlbnROb2RlIHx8ICFlLnBhcmVudE5vZGUudGFnTmFtZSlcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgYSBnbG9iYWwgdmFyaWFibGUgdG8gYWNjZXNzIGxhdGVyXHJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tQZXJmb3JtYW5jZTsiXSwic291cmNlUm9vdCI6IiJ9