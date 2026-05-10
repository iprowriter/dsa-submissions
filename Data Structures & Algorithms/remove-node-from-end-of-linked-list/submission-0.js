/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head;
        let fast = head;

        // move fast n steps ahead
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // if fast is null → remove head
        if (fast === null) {
            return head.next;
        }

        // move both until fast reaches end
        //fast !==null gives the exact location of n, but we used fast.next to stop a list before the one to be removed.
        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // delete node
        slow.next = slow.next.next;

        return head;
    }
}
