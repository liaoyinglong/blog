"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("测试 EventEmitter 类", function () {
    var event;
    var mockFn;
    var EventMap;
    (function (EventMap) {
        EventMap[EventMap["one"] = 0] = "one";
        EventMap[EventMap["two"] = 1] = "two";
        EventMap[EventMap["three"] = 2] = "three";
    })(EventMap || (EventMap = {}));
    beforeEach(function () {
        event = new index_1.MyEventEmitter();
        mockFn = jest.fn();
    });
    it("测试 on 和 emit 方法", function () {
        event.on(EventMap.one, mockFn);
        event.on(EventMap.one, mockFn);
        event.emit(EventMap.one);
        expect(mockFn).toBeCalled();
        expect(mockFn).toBeCalledTimes(2);
        expect(mockFn).toBeCalledWith();
    });
    it("测试 off ", function (done) {
        event.on(EventMap.one, mockFn);
        event.on(EventMap.one, mockFn);
        event.emit(EventMap.one);
        event.off(EventMap.one);
        setTimeout(function () {
            event.emit(EventMap.one);
            expect(mockFn).toBeCalled();
            expect(mockFn).toBeCalledTimes(2);
            done();
        }, 1000);
    });
    it("测试 once", function () {
        event.once(EventMap.one, mockFn);
        event.once(EventMap.two, mockFn);
        event.once(EventMap.three, mockFn);
        event.emit(EventMap.one);
        event.emit(EventMap.two);
        event.emit(EventMap.three);
        event.emit(EventMap.one);
        event.emit(EventMap.two);
        event.emit(EventMap.three);
        expect(mockFn).toBeCalled();
        expect(mockFn).toBeCalledTimes(3);
    });
});
