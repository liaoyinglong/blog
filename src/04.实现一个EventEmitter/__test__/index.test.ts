import { MyEventEmitter } from "../index";

describe("测试 EventEmitter 类", () => {
  let event: MyEventEmitter;
  let mockFn: jest.Mock;
  enum EventMap {
    one,
    two,
    three
  }

  beforeEach(() => {
    event = new MyEventEmitter();
    mockFn = jest.fn();
  });

  it("测试 on 和 emit 方法", () => {
    event.on(EventMap.one, mockFn);
    event.on(EventMap.one, mockFn);

    event.emit(EventMap.one);

    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(2);
    expect(mockFn).toBeCalledWith();
  });

  it("测试 off ", done => {
    event.on(EventMap.one, mockFn);
    event.on(EventMap.one, mockFn);

    event.emit(EventMap.one);
    event.off(EventMap.one);
    setTimeout(() => {
      event.emit(EventMap.one);

      expect(mockFn).toBeCalled();
      expect(mockFn).toBeCalledTimes(2);

      done();
    }, 1000);
  });

  it("测试 once", () => {
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
