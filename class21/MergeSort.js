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
        //i的范围是l到r
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

//非递归方法

var sortArray = function (nums) {
    if (nums.length < 1) {
        return nums;
    }
    //help是全局的辅助数组
    let help = new Array(nums.length);

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
        //i的范围是l到r
        for (i = l; i <= r; i++) {
            nums[i] = help[i]
        }
    }
    let n = nums.length;
    for (let l, m, r, step = 1; step < n; step <<= 1) {
        l = 0;
        while (l < n) {
            m = l + step - 1
            if (m + 1 >= n) {
                break;
            }
            r = Math.min((l + (step << 1) - 1), n - 1)
            mergeArr(l, m, r);
            l = r + 1;

        }
    }
    return nums;
};