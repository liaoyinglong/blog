import { genTestArr, insetToArr } from "../shared";

export default {};

const arr = genTestArr(100);

function checkAnswer() {
  const cloneArr = [...arr];
  cloneArr.sort((a, b) => b - a);
  const answer = cloneArr.slice(0, 10);
  console.log(answer);
}
checkAnswer();
const res: number[] = [];

arr.forEach((value, index) => {
  insetToArr(res, value, 10);
});

console.log(res, "<- res");
