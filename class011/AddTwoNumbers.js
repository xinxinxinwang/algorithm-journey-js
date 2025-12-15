//https://leetcode.cn/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //虚拟头节点
    const dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;
    while (l1 != null || l2 != null || carry > 0) {
        //按位相加
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;
        let curVal = sum % 10;
        //保持进位
        carry = Math.floor(sum / 10);
        //拼接节点
        cur.next = new ListNode(curVal)
        cur = cur.next
        //循环继续
        if (l1) { l1 = l1.next }
        if (l2) { l2 = l2.next }
    }
    return dummy.next
};