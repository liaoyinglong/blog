"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
jest.useFakeTimers();
describe("测试 debounce", function () {
    it("短时间调用多次，实际只能一次", function () {
        var mockFn = jest.fn();
        var debouncedFn = index_1.debounce(mockFn, 3000);
        for (var i = 0; i < 10; i++) {
            debouncedFn();
        }
        jest.runAllTimers();
        expect(mockFn).toBeCalled();
        expect(mockFn).toBeCalledTimes(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBb0M7QUFFcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDdEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ25CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN2QixJQUFJLFdBQVcsR0FBRyxnQkFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9