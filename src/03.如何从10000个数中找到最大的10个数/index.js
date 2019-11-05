"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../shared");
exports.default = {};
var arr = shared_1.genTestArr(100);
function checkAnswer() {
    var cloneArr = __spreadArrays(arr);
    cloneArr.sort(function (a, b) { return b - a; });
    var answer = cloneArr.slice(0, 10);
    console.log(answer);
}
checkAnswer();
var res = [];
arr.forEach(function (value, index) {
    shared_1.insetToArr(res, value, 10);
});
console.log(res, "<- res");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvQ0FBbUQ7QUFFbkQsa0JBQWUsRUFBRSxDQUFDO0FBRWxCLElBQU0sR0FBRyxHQUFHLG1CQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFNUIsU0FBUyxXQUFXO0lBQ2xCLElBQU0sUUFBUSxrQkFBTyxHQUFHLENBQUMsQ0FBQztJQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDLENBQUM7SUFDL0IsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsV0FBVyxFQUFFLENBQUM7QUFDZCxJQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7QUFFekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO0lBQ3ZCLG1CQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDIn0=