"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param nums 从大到小排列
 * @param num 要插入的数字
 * @param maxLength 数组最大长度
 */
function insetToArr(nums, num, maxLength = 10) {
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
    for (let i = 1; i < nums.length; i++) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXRUb0Fyci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc2V0VG9BcnIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLElBQWMsRUFBRSxHQUFXLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU87S0FDUjtJQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPO0tBQ1I7SUFFRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBQ0QsT0FBTztLQUNSO0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTztLQUNSO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDWjtZQUNELE9BQU87U0FDUjtLQUNGO0FBQ0gsQ0FBQztBQXZDRCxnQ0F1Q0MifQ==