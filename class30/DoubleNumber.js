//https://leetcode.cn/problems/single-number-iii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    //假如出现一次的两个元素分别为a和b
    let eor1 = 0;
    for (const num of nums) {
        eor1 ^= num
    }
    //最终的eor1为 a^b
    // 找出eor1的二进制码最右边的一个1
    let rightOne = eor1 & (-eor1)
    // rightOne的结果示例 0001000
    let eor2 = 0;
    for (const num of nums) {
        if ((num & rightOne) == 0) {
            eor2 ^= num;
        }
    }
    // eor2 要么是a 要么是b
    let result = []
    result.push(eor2);
    result.push(eor2 ^ eor1)
    return result

};