//测试链接 : https://leetcode.cn/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let leftHead = null, leftTail = null, rightHead = null, rightTail = null;
    while (head != null) {
        let next = head.next;
        head.next = null;
        if (head.val < x) {
            if (leftHead == null) {
                leftHead = head
            } else {
                leftTail.next = head
            }
            leftTail = head
        } else {
            if (rightHead == null) {
                rightHead = head
            } else {
                rightTail.next = head
            }
            rightTail = head
        }
        head = next
    }
    if (leftHead == null) {
        return rightHead
    }
    leftTail.next = rightHead;
    return leftHead


};