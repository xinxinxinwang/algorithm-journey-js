/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//https://leetcode.cn/problems/merge-k-sorted-lists/description/


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const swap = function (arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    const heapInsert = function (arr, i) {
        while (arr[i].val < arr[Math.floor((i - 1) / 2)].val) {
            swap(arr, i, Math.floor((i - 1) / 2))
            i = Math.floor((i - 1) / 2)
        }
    }
    const heapipy = function (arr, i, size) {
        let l = 2 * i + 1;
        while (l < size) {
            let best = l + 1 < size && arr[l + 1].val < arr[l].val ? l + 1 : l;
            if (best == i) {
                break;
            }
            swap(arr, i, best);
            i = best;
            l = 2 * i + 1;
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
            heapipy(arr, 0, size)
        }
        arr.reverse()
    }

    /**
     * 建一个小根堆
     * 将链表首元素添加入小根堆
     * 将堆排好序
     * 保存堆顶部第一个元素为返回结果的头指针
     * 从堆顶弹出一个元素
     * 只要next指针不为空，将next元素换入堆顶，并重新排列堆
     * 如果next为空，则判断堆是否为空，不为空则取堆中的下一个元素的next元素放入堆并将堆重新排序
     * 
     */
    if (lists.length == 0) {
        return null;
    }
    let heapArr = [];
    for (const listNode of lists) {
        heapArr.push(listNode)
    }
    heapSort(heapArr);
    //先弹出一个节点做总头部
    const head = heapArr.shift();
    let pre = head;
    if (pre.next != null) {
        heapArr.push(pre.next)
        heapInsert(heapArr, heapArr.length - 1)
    }

    while (heapArr.length != 0) {
        let cur = heapArr.shift();
        //连到总链表上
        pre.next = cur;
        pre = cur;
        if (cur.next != null) {
            heapArr.push(cur)
            heapInsert(heapArr, heapArr.length - 1)
        }
    }
    return head;

};