/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 测试地址  https://leetcode.cn/problems/reverse-linked-list/
 */
var reverseList = function (head) {
    let pre = null;
    let next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};

var reverseDoubleList = function (head) {
    let pre = null;
    let next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        head.last = next
        pre = head;
        head = next;
    }
    return pre;
}