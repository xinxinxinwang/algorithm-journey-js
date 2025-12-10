var findPeakElement = function (nums) {
    const n = nums.length;
    if (n == 1) {
        return 0
    }
    if (nums[0] > nums[1]) {
        return 0
    }
    if (nums[n - 1] > nums[n - 2]) {
        return n - 1
    }
    let l = 0, r = n - 1, m = 0, ans = -1;
    while (l <= r) {
        m = Math.floor(l + (r - l) / 2)
        if (nums[m - 1] > nums[m]) {
            r = m - 1
        } else if (nums[m] < nums[m + 1]) {
            l = m + 1
        } else {
            ans = m
            break;
        }
    }
    return ans
};

findPeakElement([1,2,3,1])