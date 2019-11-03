"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../src/shared");
describe("测试 genTestArr 方法", function () {
    var max = 10;
    var arr = shared_1.genTestArr(max);
    test("生成的数组长度是正确的", function () {
        expect(arr.length).toBe(max);
    });
    test("最大值不超过设置的值", function () {
        expect(Math.max.apply(Math, arr)).toBeLessThanOrEqual(max);
    });
});
