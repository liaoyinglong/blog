"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生成 每一项是0-max之间并且数组长度为length的数组
 * @param max
 * @param length
 */
exports.genTestArr = function (max, length) {
    if (max === void 0) { max = 10000; }
    if (length === void 0) { length = max; }
    var arr = [];
    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuVGVzdEFyci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlblRlc3RBcnIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFXLEVBQUUsTUFBWTtJQUF6QixvQkFBQSxFQUFBLFdBQVc7SUFBRSx1QkFBQSxFQUFBLFlBQVk7SUFDbEQsSUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBRXpCLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMifQ==