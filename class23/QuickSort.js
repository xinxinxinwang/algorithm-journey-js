//随机快速排序 
//遇到全部为同一个数字的数组会超时
//https://leetcode.cn/problems/sort-an-array/description/
var sortArray = function (nums) {
    // l数组最左 r数组最后
    // 随机找出一个值x，<=x放左，>x放右 
    // 重复划分 直到l=r
    // 每次划分都x都会放在正确的位置

    var quickSort = function (l, r) {
        if (l >= r) {
            return
        }
        let index = l + Math.floor(Math.random() * (r - l + 1));
        let x = nums[index]
        let mid = partition(l, r, x);
        quickSort(l, mid - 1);
        quickSort(mid + 1, r);
    }
    var partition = function (l, r, x) {
        let a = l, xi = 0;
        for (let i = l; i <= r; i++) {
            if (nums[i] <= x) {
                swap(i, a);
                if (arr[a] == x) {
                    xi = a
                }
                a++
            }
        }
        swap(xi, a - 1)
        return a - 1
    }
    var swap = function (i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    if (nums.length <= 1) {
        return nums
    }
    quickSort(0, nums.length - 1)
}

sortArray([5,2,3,1])