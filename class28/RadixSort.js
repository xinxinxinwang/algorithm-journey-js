// 基数排序
// 测试链接 : https://leetcode.cn/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const getBits = function (val) {
        let num = 0;
        while (val > 0) {
            //注意这里val需要取模的同时要负值
            val = Math.floor(val / base)
            num++
        }
        return num;

    }
    //确定进制
    const base = 10;
    //找出最小值
    let n = nums.length
    let min = nums[0]
    for (let i = 0; i < n; i++) {
        min = Math.min(min, nums[i])
    }
    //避免负值，数组所有值减去最小值得到新数组
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] - min
    }
    //找出最大值
    let max = nums[0]
    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i])
    }
    //计算最大值的有多少位
    let bits = getBits(max)
    //基数排序
    let counts = new Array(base);

    let help = new Array(n)
    for (let offset = 1; bits > 0; offset *= base, bits--) {
        counts.fill(0)
        //当前统计的个位/十位……为0、1、2……9的数有多少个
        for (let i = 0; i < n; i++) {
            let index = Math.floor(nums[i] / offset) % base;
            counts[index]++
        }
        //累加，计算尾数<=0……<=9的总数
        for (let i = 1; i < base; i++) {
            counts[i] = counts[i] + counts[i - 1]
        }
        //从最右开始取数，放到对应的位置，注意i的循环条件
        for (let i = n - 1; i >= 0; i--) {
            let index = Math.floor(nums[i] / offset) % base;
            help[--counts[index]] = nums[i]
        }
        //数组要回写
        for (let i = 0; i < n; i++) {
            nums[i] = help[i]
        }

    }
    //还原数组，数组所有值加上最小值得到原数组
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] + min
    }
    return nums;

};