/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let leftBefore = dummy;
    for (let i = 0; i < left - 1; i++) {
        leftBefore = leftBefore.next;
    }
    let leftNode = leftBefore.next;

    let rightNode = leftNode;
    for (let j = 0; j < right - left; j++) {
        rightNode = rightNode.next
    }

    let succ = rightNode.next
    rightNode.next = null
    let pre = null;
    let cur = leftNode;
    while (cur != null) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    leftBefore.next = pre;
    leftNode.next = succ;
    return dummy.next


}