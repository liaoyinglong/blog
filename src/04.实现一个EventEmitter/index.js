"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEventEmitter = /** @class */ (function () {
    function MyEventEmitter() {
        this.eventMap = new Map();
    }
    MyEventEmitter.prototype.on = function (eventName, fn) {
        var eventArr = this.eventMap.get(eventName);
        if (eventArr === void 0) {
            this.eventMap.set(eventName, [fn]);
        }
        else {
            eventArr.push(fn);
        }
    };
    MyEventEmitter.prototype.once = function (eventName, fn) {
        var _this = this;
        var wrapperFn = function () {
            fn();
            _this.off(eventName, wrapperFn);
        };
        this.on(eventName, wrapperFn);
    };
    MyEventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var eventArr = this.eventMap.get(eventName);
        if (eventArr !== void 0) {
            eventArr.forEach(function (fn) {
                fn.apply(void 0, args);
            });
        }
    };
    MyEventEmitter.prototype.off = function (eventName, fn) {
        if (fn === void 0) {
            this.eventMap.delete(eventName);
            return;
        }
        var eventArr = this.eventMap.get(eventName);
        if (eventArr !== void 0) {
            this.eventMap.set(eventName, eventArr.filter(function (item) { return item !== fn; }));
        }
    };
    return MyEventEmitter;
}());
exports.MyEventEmitter = MyEventEmitter;
