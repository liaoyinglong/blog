"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../src/shared");
describe("测试 genTestArr 方法", () => {
    const max = 10;
    let arr = shared_1.genTestArr(max);
    test("生成的数组长度是正确的", () => {
        expect(arr.length).toBe(max);
    });
    test("最大值不超过设置的值", () => {
        expect(Math.max(...arr)).toBeLessThanOrEqual(max);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuVGVzdEFyci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuVGVzdEFyci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQThDO0FBRTlDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsSUFBSSxHQUFHLEdBQUcsbUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxQixJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=