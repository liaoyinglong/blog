import { sleep } from "../../src/shared/sleep";

jest.useFakeTimers();

describe("测试 sleep 方法", () => {
  it("睡眠1S后执行", () => {
    const fn = jest.fn();

    const res = sleep(1000, "aa").then(val => {
      fn(val);
      return val;
    });

    jest.advanceTimersByTime(500);
    expect(fn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(res).resolves.toBe("aa");

    res.then(() => {
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith("aa");
    });
    jest.runAllTimers();
  });
});
