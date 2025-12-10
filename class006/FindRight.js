//测试 对数器
function findNumber(arr, num) {
    const N = 100//随机生成的数组的最大长度
    const V = 1000//随机生成的数组的最大值
    const testTime = 50000
    console.log("测试开始")
    for (let i = 0; i < testTime; i++) {
        const arrLength = Math.floor(Math.random() * N)
        const arr = randomArray(arrLength, V)
        //测试时，忘记排序导致出错
        const orderArr = arr.sort((a, b) => a - b)
        // console.log(`测试数组：${orderArr}`)
        const num = Math.floor(Math.random() * V)
        // console.log(`测试查找值：${num}`)
        // console.log(`right查找结果：${right(orderArr, num)}`)
        // console.log(`exist查找结果：${findRight(orderArr, num)}`)
        if (right(orderArr, num) != findRight(orderArr, num)) {
            console.log("出错了")
        }
    }
    console.log('测试结束')

}
//生成随机数组
function randomArray(len, max) {
    const arr = new Array(len)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * max + 1)
    }
    return arr
}

// 暴力法 
function right(arr, num) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] <=num) {
            return i
        }
    }
    return -1
}

// 二分法
function findRight(arr, num) {
    let l = 0, r = arr.length - 1, m = 0;
    let ans = -1
    while (l <= r) {
        m = Math.floor(l + (r - l) / 2)
        if (arr[m] <= num) {
            ans = m
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return ans
}
// findRight([4,5,7,9],9)
findNumber()
