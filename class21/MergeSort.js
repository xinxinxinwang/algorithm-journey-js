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
            return;
        }
        let m = Math.floor((r - l )/ 2);
        mergeSort(l, m);
        mergeSort(m + 1, r);
        mergeArr(l, m, r);
    }
    const mergeArr = function (l, m, r) {
        let a = l;
        let b = m + 1;
        let i = 0;
        let help = new Array(r - l + 1);
        while (a <= m && b <= r) {
            help[i++] = nums[a] <= nums[b]?nums[a++]:nums[b++]
            // if (nums[a] <= nums[b]) {
            //     help[i] = nums[a];
            //     i++;
            //     a++;
            // } else {
            //     help[i] = nums[b];
            //     i++;
            //     b++;
            // }

        }
        while (a <= m) {
            for (let index = a; index <= m; index++) {
                help[i] = nums[index]
            }
        }
        while (b <= r) {
            for (let index = b; index <= r; index++) {
                help[i] = nums[index]
            }
        }

        for (let index = 0; index <= r; index++) {
            nums[index] = help[index]
        }

    }
    l = 0, r = nums.length - 1;
    mergeSort(l, r)
    return nums;
};

console.log(sortArray([8,4,5,10,2,3,4]))