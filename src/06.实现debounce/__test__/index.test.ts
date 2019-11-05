import { debounce } from "../index";

jest.useFakeTimers();

describe("测试 debounce", () => {
  it("短时间调用多次，实际只能一次", () => {
    let mockFn = jest.fn();
    let debouncedFn = debounce(mockFn, 3000);
    for (let i = 0; i < 10; i++) {
      debouncedFn();
    }
    jest.runAllTimers();
    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(1);
  });
});
