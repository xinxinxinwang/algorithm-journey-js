/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {

    var counts = function (l, r) {
        if (l == r) {
            return 0
        }
        let m = Math.floor((l + r) / 2)
        return counts(l, m) + counts(m + 1, r) + countMerge(l, m, r)

    }
    var countMerge = function (l, m, r) {
        //先统计
        let ans = 0;
        for (let i = l, j = m + 1; i <= m; i++) {
            while (j <= r && nums[i] > 2 * nums[j]) {
                j++
            }
            ans += j - m - 1
        }
        //在排序
        let a = l, b = m + 1, i = l;
        //要给help数组一个初始长度
        let help = new Array(numsLength);
        while (a <= m && b <= r) {
            help[i++] = nums[a] <= nums[b] ? nums[a++] : nums[b++]
        }
        while (a <= m) {
            help[i++] = nums[a++]
        }
        while (b <= r) {
            help[i++] = nums[b++]
        }
        for (let i = l; i <= r; i++) {
            nums[i] = help[i]
        }

        return ans;
    }
    let numsLength = nums.length;
    // 不要写成numsLength.length
    if (numsLength <= 1) {
        return 0
    }
    //注意 要记得返回值！
    return counts(0, numsLength - 1);

};