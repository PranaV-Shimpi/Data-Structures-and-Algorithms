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
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current) {
        let isDuplicate = false;

        while (current.next && current.val === current.next.val) {
            isDuplicate = true;
            current = current.next;
        }

        if (isDuplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }

        current = current.next;
    }

    return dummy.next;
};

Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]

