export default {};
/**
 已知如下数组：

 var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 **/

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [15, 14, 11, 12, [12, 13, [14]]]],
  10
];
function insetToArr(arr: number[], num: number) {
  if (arr.includes(num)) return;
  if (!arr.length || arr[arr.length - 1] < num) {
    arr.push(num);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num && arr[i + 1] > num) {
      insetByIndex(arr, i + 1, num);
      return;
    }
  }
}

function insetByIndex<T>(arr: T[], index: number, item: T) {
  arr.splice(index, 0, item);
}

type A = typeof arr;
function flat(arr: A, res: number[] = []) {
  arr.forEach(value => {
    if (Array.isArray(value)) {
      flat(value, res);
    } else {
      insetToArr(res, value);
    }
  });

  return res;
}

console.log(flat(arr));

// 一行代码
function flat2(arr: A) {
  return Array.from(new Set(arr.toString().split(",")))
    .map(Number)
    .sort((a, b) => a - b);
}

console.log(flat2(arr));
