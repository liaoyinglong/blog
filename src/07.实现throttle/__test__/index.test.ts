import { throttle } from "../index";

jest.useFakeTimers();

describe("测试 throttle 方法", () => {
  let mockFn = jest.fn();
  const throttleFn = throttle(mockFn, 1000);

  it("调用次数应该符合", () => {
    for (let i = 0; i < 3000; i++) {
      setTimeout(() => {
        throttleFn();
      }, i);
    }

    for (let i = 0; i < 4000; i++) {
      jest.advanceTimersByTime(1);
    }
    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(3);
  });
});
