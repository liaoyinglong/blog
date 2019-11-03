"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生成 每一项是0-max之间并且数组长度为length的数组
 * @param max
 * @param length
 */
exports.genTestArr = function (max, length) {
    if (max === void 0) { max = 10000; }
    if (length === void 0) { length = max; }
    var arr = [];
    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};
