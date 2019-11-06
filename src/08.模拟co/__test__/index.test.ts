import { co } from "../index";
import { sleep } from "../../shared/sleep";

describe("测试 co 方法", () => {
  it("普通的 Generator 应该执行正确", () => {
    const mockFn = jest.fn(function* test() {
      let a = yield "a";
      let b = yield 1;
      let c = yield "c";
      return [a, b, c];
    });

    let res = co(mockFn);
    expect(mockFn).toBeCalledTimes(1);
    expect(res).toEqual(["a", 1, "c"]);
  });

  it("promise 的方法应该执行正确", () => {
    jest.useFakeTimers();

    function* test2() {
      let a: Promise<string> = yield sleep(1000, "aa");
      let b: Promise<string> = yield sleep(2000, "bb");
      let c: Promise<string> = yield sleep(3000, "cc");
      return [a, b, c];
    }

    let res = co(test2);

    expect(res).resolves.toEqual(["aa", "bb", "cc"]);
    jest.runAllTimers();
  });
});
