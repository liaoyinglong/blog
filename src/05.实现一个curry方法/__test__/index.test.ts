import { curry } from "../index";

describe("测试 curry 方法", () => {
  const curriedFn = curry(function sum(a: number, b: number, c: number) {
    return a + b + c;
  });

  it("调用后的返回结果正确", () => {
    const res1 = curriedFn(1, 2, 3);
    const res2 = curriedFn(1, 2)(3);
    const res3 = curriedFn(1)(2, 3);
    const res4 = curriedFn(1)(2)(3);

    expect(res1).toBe(6);
    expect(res2).toBe(6);
    expect(res3).toBe(6);
    expect(res4).toBe(6);
  });
});
