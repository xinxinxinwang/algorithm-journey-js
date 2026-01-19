//https://leetcode.cn/problems/single-number-ii/
//通用：一个数出现少于m次，其余出现次数多余m次
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const findM = function (arr, m) {
        let conts = new Array(32).fill(0)
        for (const num of arr) {
            for (let i = 0; i < 32; i++) {
                conts[i] += (num >> i) & 1
            }
        }
        let ans = 0;
        for (let i = 0; i < 32; i++) {
            if (conts[i] % m != 0) {
                ans |= 1 << i
            }
        }
        return ans;
    }
    return findM(nums, 3)
};