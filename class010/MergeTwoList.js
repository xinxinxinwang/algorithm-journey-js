/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 == null || list2 == null) {
        return list1 == null ? list2 : list1
    }
    //先找到head,注意判断条件
    let head = list1.val <= list2.val ? list1 : list2;
    // 设置3个指针
    let cur1 = head.next;
    let cur2 = head == list1 ? list2 : list1;
    let pre = head;
    while (cur1 != null && cur2 != null) {
        if (cur1.val <= cur2.val) {
            pre.next = cur1;
            cur1 = cur1.next;
        } else {
            pre.next = cur2;
            cur2 = cur2.next
        }
        pre = pre.next
    }
    //收尾
    pre.next = cur1 != null ? cur1 : cur2;
    return head

};