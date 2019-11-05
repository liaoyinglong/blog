import { uniq } from "../index";

describe("测试 对象数组去重方法 uniq", () => {
  const arr = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 2, a: 11 },
    { id: 3, a: 3 },
    { id: 3, a: 33 },
    { id: 1, a: 4 }
  ];
  const target = [{ id: 1, a: 4 }, { id: 2, a: 11 }, { id: 3, a: 33 }];

  const res = uniq(arr, cur => cur.id);

  it("去重完成的数组长度应该为3", () => {
    expect(res.length).toBe(3);
  });

  it("去重完成的数组应该符合预期", () => {
    expect(res).toEqual(target);
  });
});
