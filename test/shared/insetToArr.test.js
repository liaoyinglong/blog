"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../src/shared");
describe("测试 insetToArr 方法，不限制最大长度", function () {
    var arr = [10, 7];
    test("插入到数组最前面", function () {
        shared_1.insetToArr(arr, 11);
        expect(arr).toEqual([11, 10, 7]);
    });
    test("插入到数组第三个位置", function () {
        shared_1.insetToArr(arr, 8);
        expect(arr).toEqual([11, 10, 8, 7]);
    });
    test("插入到数组最后面", function () {
        shared_1.insetToArr(arr, 6);
        expect(arr).toEqual([11, 10, 8, 7, 6]);
    });
});
describe("测试 insetToArr 方法：限制最大长度", function () {
    var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    test("插入到数组最前面", function () {
        shared_1.insetToArr(arr, 11);
        expect(arr).toEqual([11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    });
    test("插入到数组第三个位置", function () {
        shared_1.insetToArr(arr, 9);
        expect(arr).toEqual([11, 10, 9, 9, 8, 7, 6, 5, 4, 3]);
    });
    test("插入到数组最后面", function () {
        shared_1.insetToArr(arr, 1);
        expect(arr).toEqual([11, 10, 9, 9, 8, 7, 6, 5, 4, 3]);
    });
});
