/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

// ====================================================
// apporach 1:
// ====================================================
    // Find the length of both linked lists
    let lenA = 0, lenB = 0;
    let currA = headA, currB = headB;

    while (currA) {
        lenA++;
        currA = currA.next;
    }

    while (currB) {
        lenB++;
        currB = currB.next;
    }

    // Reset pointers to the heads of the lists
    currA = headA;
    currB = headB;

    // Align the pointers to the same starting point by advancing the longer list
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currA = currA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            currB = currB.next;
        }
    }

    // Now traverse both lists together and check for intersection
    while (currA && currB) {
        if (currA === currB) {
            return currA; // intersection found
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection

    // ==========================================================
    // apporach 2: using 2 pointers:
    // ==========================================================
    
    let currA = headA;
    let currB = headB;

    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }

    return currA; // Either the intersection node or null if no intersection
};
