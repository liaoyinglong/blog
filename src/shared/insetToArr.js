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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXRUb0Fyci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc2V0VG9BcnIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLElBQWMsRUFBRSxHQUFXLEVBQUUsU0FBYztJQUFkLDBCQUFBLEVBQUEsY0FBYztJQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTztLQUNSO0lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU87S0FDUjtJQUVELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFDRCxPQUFPO0tBQ1I7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPO0tBQ1I7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTztTQUNSO0tBQ0Y7QUFDSCxDQUFDO0FBdkNELGdDQXVDQyJ9