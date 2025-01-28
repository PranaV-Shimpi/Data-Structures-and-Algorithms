/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    // solution1:
//     let list = [];

//     while (head != null) {
//         list.push(head.val);
//         head = head.next;
//     }

//     let left = 0;
//     let right = list.length - 1;
//     while (left < right) {
//         if (list[left] !== list[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

    // solution:2
    //1. Find the middle of the linked list using the slow and fast pointer approach.
    //2. Reverse the second half of the linked list.
    //3. Compare the first half with the reversed second half.
    //4. Restore the list (optional, but good practice).

  if (!head || !head.next) return true; // Single node or empty list is a palindrome

    let slow = head, fast = head;

    // Step 1: Find the middle of the linked list (slow pointer will point to the middle)
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // Step 3: Compare the first half with the reversed second half
    let firstHalf = head;
    let secondHalf = prev; // The reversed second half

    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false; // Not a palindrome
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
};
