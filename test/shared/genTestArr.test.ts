import { genTestArr } from "../../src/shared";

describe("测试 genTestArr 方法", () => {
  const max = 10;
  let arr = genTestArr(max);

  test("生成的数组长度是正确的", () => {
    expect(arr.length).toBe(max);
  });

  test("最大值不超过设置的值", () => {
    expect(Math.max(...arr)).toBeLessThanOrEqual(max);
  });
});
