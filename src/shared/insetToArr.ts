/**
 * @param nums 从大到小排列
 * @param num 要插入的数字
 * @param maxLength 数组最大长度
 */
export function insetToArr(nums: number[], num: number, maxLength = 10) {
  if (!nums.length) {
    nums.push(num);
    return;
  }

  if (nums.length === 1) {
    if (nums[0] >= num) {
      nums.push(num);
    } else {
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
