"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("测试 对象数组去重方法 uniq", function () {
    var arr = [
        { id: 1, a: 1 },
        { id: 2, a: 2 },
        { id: 2, a: 11 },
        { id: 3, a: 3 },
        { id: 3, a: 33 },
        { id: 1, a: 4 }
    ];
    var target = [{ id: 1, a: 4 }, { id: 2, a: 11 }, { id: 3, a: 33 }];
    var res = index_1.uniq(arr, function (cur) { return cur.id; });
    it("去重完成的数组长度应该为3", function () {
        expect(res.length).toBe(3);
    });
    it("去重完成的数组应该符合预期", function () {
        expect(res).toEqual(target);
    });
});
