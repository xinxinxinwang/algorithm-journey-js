// 归并排序 https://leetcode.cn/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length < 1) {
        return nums;
    }
    const mergeSort = function (l, r) {
        if (l == r) {
            return
        }
        let m = Math.floor((l + r) / 2);
        mergeSort(l, m);
        mergeSort(m + 1, r);
        mergeArr(l, m, r);
    }
    const mergeArr = function (l, m, r) {
        let a = l;
        let b = m + 1;
        //i 是从l开始
        let i = l;

        while (a <= m && b <= r) {
            help[i++] = nums[a] <= nums[b] ? nums[a++] : nums[b++]

        }
        while (a <= m) {
            help[i++] = nums[a++]
        }
        while (b <= r) {
            help[i++] = nums[b++]
        }
        for (i = l; i <= r; i++) {
            nums[i] = help[i]
        }

    }
    //help是全局的辅助数组
    let help = new Array(nums.length);
    let l = 0, r = nums.length - 1;
    mergeSort(l, r)
    return nums;
};

console.log(sortArray([8, 4, 5, 10, 2, 3, 4]))