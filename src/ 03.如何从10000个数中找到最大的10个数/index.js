"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../shared");
exports.default = {};
var arr = shared_1.genTestArr(100);
function checkAnswer() {
    var cloneArr = __spreadArrays(arr);
    cloneArr.sort(function (a, b) { return b - a; });
    var answer = cloneArr.slice(0, 10);
}
var res = [];
arr.forEach(function (value, index) {
    if (res.length < 10) {
    }
});
