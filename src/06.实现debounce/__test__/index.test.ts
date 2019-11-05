import { debounce } from "../index";

jest.useRealTimers();

describe("测试 debounce", () => {
  it("短时间调用多次，实际只能一次", done => {
    let mockFn = jest.fn(() => {
      expect(mockFn).toBeCalled();
      expect(mockFn).toBeCalledTimes(1);
      done();
    });

    let debouncedFn = debounce(mockFn, 3000);

    for (let i = 0; i < 10; i++) {
      debouncedFn();
    }
  });

  it("延迟一段时间执行两次，实际只能一次", done => {
    let mockFn = jest.fn(() => {
      expect(mockFn).toBeCalled();
      expect(mockFn).toBeCalledTimes(1);
      done();
    });

    let debouncedFn = debounce(mockFn, 3000);

    setTimeout(() => {
      debouncedFn();
    }, 100);
    setTimeout(() => {
      debouncedFn();
    }, 200);
  });
});
