"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
//如下：{1:222, 2:123, 5:888}，
// 请把数据处理为如下结构：
// [222, 123, null, null, 888, null, null, null, null, null, null, null]。
const data = { 1: 222, 2: 123, 5: 888 };
const arr = new Array(12).fill(null);
Object.keys(data).forEach((k) => {
    // @ts-ignore
    arr[k - 1] = data[k];
});
console.log(arr);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlLEVBQUUsQ0FBQztBQUNsQiwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmLHlFQUF5RTtBQUN6RSxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFeEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDbkMsYUFBYTtJQUNiLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9