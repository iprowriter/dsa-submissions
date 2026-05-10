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
     * @return {ListNode}
     */
    reverseList(head) {
        //We set variable prev to remember where we came from
        //curr to point to the one we want to flip
        //we save next to point to the next one 
        //always remember that linked-list is not an array
        let prev = null
        let curr = head

        console.log("curr: ", curr)

        while(curr != null) {
                let next = curr.next; // save next
                curr.next = prev;     // reverse
                prev = curr;          // move prev
                curr = next;          // move curr
        };
        return prev
    }
}
