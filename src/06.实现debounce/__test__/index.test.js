"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
jest.useRealTimers();
describe("测试 debounce", function () {
    it("短时间调用多次，实际只能一次", function (done) {
        var mockFn = jest.fn(function () {
            expect(mockFn).toBeCalled();
            expect(mockFn).toBeCalledTimes(1);
            done();
        });
        var debouncedFn = index_1.debounce(mockFn, 3000);
        for (var i = 0; i < 10; i++) {
            debouncedFn();
        }
    });
    it("延迟一段时间执行两次，实际只能一次", function (done) {
        var mockFn = jest.fn(function () {
            expect(mockFn).toBeCalled();
            expect(mockFn).toBeCalledTimes(1);
            done();
        });
        var debouncedFn = index_1.debounce(mockFn, 3000);
        setTimeout(function () {
            debouncedFn();
        }, 100);
        setTimeout(function () {
            debouncedFn();
        }, 200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBb0M7QUFFcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDdEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUEsSUFBSTtRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFdBQVcsR0FBRyxnQkFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFBLElBQUk7UUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxXQUFXLEdBQUcsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsVUFBVSxDQUFDO1lBQ1QsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsVUFBVSxDQUFDO1lBQ1QsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9