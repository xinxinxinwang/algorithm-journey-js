function swap1(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
//选择排序
function selectionSort(array) {
    if (array == null || array.length < 2) {
        return;
    }
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
}


//冒泡排序
function bubbleSort(array) {
    if (array == null || array.length < 2) {
        return;
    }
    // 使 0 ~ end 有序
    for (let end = array.length - 1; end > 0; end--) {
        // 0 ~ end 范围上，把最大的值放在最后面
        for (let j = 0; j < end; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

//插入排序
function insertSort(array) {
    if (array == null || array.length < 2) {
        return;
    }
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
            swap(array, j, j + 1);
        }
    }
}

function randomArray(length, max) {
    const arr = new Array(length)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * max + 1)
    }
    return arr
}
function arrayEqual(arr1, arr2) {
    return Array.isArray(arr1) && Array.isArray(arr2) && arr1.every((val, index) => val === arr2[index])
}

function testAll() {
    console.log('测试开始')
    const length = 10;
    const max = 10;
    const testTimes = 2;
    for (let i = 0; i < testTimes; i++) {
        const arr = randomArray(length, max);
        const arr1 = Array.from(arr);
        const arr2 = Array.from(arr);
        const arr3 = Array.from(arr);
        selectionSort(arr1);
        console.log(arr1)
        bubbleSort(arr2);
        console.log(arr2)
        insertSort(arr3);
        console.log(arr3)
        if (!arrayEqual(arr1, arr2) || !arrayEqual(arr1, arr3)) {
            console.log('出错了')
        }

    }
    console.log('测试结束')
}
