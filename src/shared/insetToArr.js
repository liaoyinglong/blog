"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param nums 从大到小排列
 * @param num 要插入的数字
 * @param maxLength 数组最大长度
 */
function insetToArr(nums, num, maxLength) {
    if (maxLength === void 0) { maxLength = 10; }
    if (!nums.length) {
        nums.push(num);
        return;
    }
    if (nums.length === 1) {
        if (nums[0] >= num) {
            nums.push(num);
        }
        else {
            nums.unshift(num);
        }
        return;
    }
    if (nums[0] < num) {
        nums.unshift(num);
        if (nums.length > maxLength) {
            nums.pop();
        }
        return;
    }
    if (nums[nums.length - 1] >= num) {
        if (nums.length < maxLength) {
            nums.push(num);
        }
        return;
    }
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < num) {
            nums.splice(i, 0, num);
            if (nums.length > maxLength) {
                nums.pop();
            }
            return;
        }
    }
}
exports.insetToArr = insetToArr;
