"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
jest.useFakeTimers();
describe("测试 debounce", () => {
    it("短时间调用多次，实际只能一次", () => {
        let mockFn = jest.fn();
        let debouncedFn = index_1.debounce(mockFn, 3000);
        for (let i = 0; i < 10; i++) {
            debouncedFn();
        }
        jest.runAllTimers();
        expect(mockFn).toBeCalled();
        expect(mockFn).toBeCalledTimes(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBb0M7QUFFcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksV0FBVyxHQUFHLGdCQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=