//https://leetcode.cn/problems/missing-number/description/
// 所有数的异或值=已有的n个数的异或值^缺失的那个数
// 缺失的数 = 所有数的异或值 ^ 已有的n个数的异或值
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let allSum = 0;
    let hasSum = 0;
    for (let i = 0; i < nums.length; i++) {
        allSum ^= i;
        hasSum ^= nums[i];
    }
    allSum = allSum ^ nums.length;
    return allSum ^ hasSum

};