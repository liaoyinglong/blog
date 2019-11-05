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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuVGVzdEFyci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuVGVzdEFyci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQThDO0FBRTlDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUMzQixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixJQUFJLEdBQUcsR0FBRyxtQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksRUFBUSxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=