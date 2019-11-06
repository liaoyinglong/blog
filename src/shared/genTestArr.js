"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生成 每一项是0-max之间并且数组长度为length的数组
 * @param max
 * @param length
 */
exports.genTestArr = (max = 10000, length = max) => {
    const arr = [];
    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuVGVzdEFyci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlblRlc3RBcnIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFFekIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9