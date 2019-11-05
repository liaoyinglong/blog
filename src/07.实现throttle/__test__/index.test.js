"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
jest.useFakeTimers();
describe("测试 throttle 方法", function () {
    var mockFn = jest.fn();
    var throttleFn = index_1.throttle(mockFn, 1000);
    it("调用次数应该符合", function () {
        for (var i = 0; i < 3000; i++) {
            setTimeout(function () {
                throttleFn();
            }, i);
        }
        for (var i = 0; i < 4000; i++) {
            jest.advanceTimersByTime(1);
        }
        expect(mockFn).toBeCalled();
        expect(mockFn).toBeCalledTimes(3);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBb0M7QUFFcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDdkIsSUFBTSxVQUFVLEdBQUcsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFMUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsVUFBVSxDQUFDO2dCQUNULFVBQVUsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==