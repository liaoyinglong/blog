export default {};
//如下：{1:222, 2:123, 5:888}，
// 请把数据处理为如下结构：
// [222, 123, null, null, 888, null, null, null, null, null, null, null]。
const data = { 1: 222, 2: 123, 5: 888 };

const arr = new Array(12).fill(null);
Object.keys(data).forEach((k: any) => {
  // @ts-ignore
  arr[k - 1] = data[k];
});

console.log(arr);
