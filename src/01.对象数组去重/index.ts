export default {};

// id相同的保留后一个
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 2, a: 11 },
  { id: 3, a: 3 },
  { id: 3, a: 33 },
  { id: 1, a: 4 }
];

type Res = typeof responseList;

const hasMap = new Map<number, number>();

const res = responseList.reduce<Res>((res, cur) => {
  const i = hasMap.get(cur.id);
  if (i !== void 0) {
    res[i] = cur;
  } else {
    hasMap.set(cur.id, res.push(cur) - 1);
  }
  return res;
}, []);

console.log(res);
