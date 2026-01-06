// 测试链接 : https://leetcode.cn/problems/kth-largest-element-in-an-array/
// 第k大的数在nums.length-k的位置上
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const partition = function (l, r, x) {
        first = l;
        last = r;
        let index = l;
        while (index <= last) {
            if (nums[index] == x) {
                index++
            } else if (nums[index] > x) {
                swap(last--, index)
            } else if (nums[index] < x) {
                swap(first++, index++)
            }
        }
    }
    const swap = function (i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    if (nums.length < k || nums.length < 1) {
        return
    }
    let i = nums.length - k;
    let first, last, ans = 0;
    for (let l = 0, r = nums.length - 1; l <= r;) {
        partition(l, r, nums[l + Math.floor(Math.random() * (r - l + 1))])
        if (i < first) {
            r = first - 1
        } else if (i > last) {
            l = last + 1
        } else {
            ans = nums[i];
            break;
        }
    }
    return ans;
};