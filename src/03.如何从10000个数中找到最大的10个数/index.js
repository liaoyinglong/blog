"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../shared");
exports.default = {};
const arr = shared_1.genTestArr(100);
function checkAnswer() {
    const cloneArr = [...arr];
    cloneArr.sort((a, b) => b - a);
    const answer = cloneArr.slice(0, 10);
    console.log(answer);
}
checkAnswer();
const res = [];
arr.forEach((value, index) => {
    shared_1.insetToArr(res, value, 10);
});
console.log(res, "<- res");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUVuRCxrQkFBZSxFQUFFLENBQUM7QUFFbEIsTUFBTSxHQUFHLEdBQUcsbUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU1QixTQUFTLFdBQVc7SUFDbEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsV0FBVyxFQUFFLENBQUM7QUFDZCxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7QUFFekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMzQixtQkFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyJ9