//测试 对数器
function findNumber(arr, num) {
    const N = 100//随机生成的数组的最大长度
    const V = 1000//随机生成的数组的最大值
    const testTime = 5000
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
        // console.log(`exist查找结果：${exist(orderArr, num)}`)
        if (right(orderArr, num) != exist(orderArr, num)) {
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
// Array实例方法 Array.prototype.includes()
// 暴力法 [2,5,5,6,8,8,10,10] 5

function right(arr, num) {
    for (const [index, element] of arr.entries()) {
        if (element == num) {
            return true
        }
    }
    //return false 写错位置导致出错
     return false
}
// right([2,5,5,6,8,8,10,10],5)
// 二分法
function exist(arr, num) {
    if (arr == null || arr.length == 0) {
        return false
    }
    let l = 0, r = arr.length - 1, m = 0;
    while (l <= r) {
        m = Math.floor(l + (r - l) / 2)
        if (arr[m] == num) {
            return true
        } else if (arr[m] > num) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return false
}

findNumber()
