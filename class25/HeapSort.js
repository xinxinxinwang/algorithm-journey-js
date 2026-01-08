//堆排序
//https://leetcode.cn/problems/sort-an-array/description/
var sortArray = function (nums) {
    const swap = function (arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    const heapInsert = function (arr, i) {
        while (arr[i] > arr[Math.floor((i - 1) / 2)]) {
            swap(arr, i, Math.floor((i - 1) / 2));
            i = Math.floor((i - 1) / 2)
        }
    }
    const heapIpy = function (arr, i, size) {
        let l = 2 * i + 1;
        while (l < size) {
            //对比左侧右侧哪个大
            let best = l + 1 < size && arr[l] < arr[l + 1] ? l + 1 : l;
            //和i对比
            best = arr[best] > arr[i] ? best : i;
            if (best == i) {
                break;
            }
            swap(arr, best, i)
            //继续往下比大小
            i = best;
            l = 2 * i + 1
        }
    }
    const heapSort = function (arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            heapInsert(arr, i)
        }
        let size = n;
        while (size > 1) {
            swap(arr, 0, --size);
            heapIpy(arr, 0, size);
        }
    }
    heapSort(nums);
    return nums

}