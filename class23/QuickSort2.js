//随机快速排序
var sortArray = function (nums) {
    var quickSort = function (l, r) {
        if (l >= r) {
            return
        }
        let index = l + Math.floor(Math.random() * (r - l + 1));
        let x = nums[index]
        partition(l, r, x);
        //每次确认一堆x的位置，更新left 和 right
        let left = first;
        let right = last;
        quickSort(l, left - 1);
        quickSort(right + 1, r);
    }
    //荷兰国旗问题
    var partition = function (l, r, x) {
        first = l, last = r, i = l;
        while (i <= last) {
            if (nums[i] < x) {
                swap(first, i);
                first++;
                i++;
            } else if (nums[i] > x) {
                swap(last, i);
                last--;
            } else if (nums[i] == x) {
                i++
            }
        }
    }
    var swap = function (i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    if (nums.length <= 1) {
        return nums
    }
    // 全局
    let first, last;
    quickSort(0, nums.length - 1)
    return nums
}

