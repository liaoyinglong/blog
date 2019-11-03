/**
 * 生成 每一项是0-max之间并且数组长度为length的数组
 * @param max
 * @param length
 */
export const genTestArr = (max = 10000, length = max) => {
  const arr: number[] = [];

  while (arr.length < length) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
};
