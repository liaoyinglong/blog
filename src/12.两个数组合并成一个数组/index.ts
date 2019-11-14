export default {};
/**
 请把两个数组
 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，
 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
 **/

const arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const arr2 = ["A", "B", "C", "D"];

function merge(arr1: string[], arr2: string[]) {
  let insetIndex = 0;
  for (let i = 0; i < arr2.length; i++) {
    let str = arr2[i];

    for (let j = insetIndex; j < arr1.length; j++) {
      const cur = arr1[j];
      const next = arr1[j + 1];
      if (cur.startsWith(str) && !next?.startsWith(str)) {
        insetByIndex(arr1, j + 1, str);
        insetIndex = j + 1;
        break;
      }
    }
  }
  return arr1;
}

console.log(merge(arr1, arr2));

function insetByIndex<T>(arr: T[], index: number, item: T) {
  arr.splice(index, 0, item);
}
