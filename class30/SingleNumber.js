/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let eorAll = 0;
    for (const num of nums) {
        eorAll ^= num;
    }
    return eorAll;
};
//注意for of 是遍历数组的元素
//for in 遍历的是下标
