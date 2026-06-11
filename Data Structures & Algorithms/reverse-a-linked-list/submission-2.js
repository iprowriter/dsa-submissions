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
        let prev = null;
        let curr = head;

       while(curr !== null){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
       }

    // while (curr !== null) {
    //     let nextNode = curr.next; // 1. Save the next node (so we don't lose the rest of the list)
    //     curr.next = prev;         // 2. Reverse the pointer (point backward)
    //     prev = curr;              // 3. Move prev forward
    //     curr = nextNode;          // 4. Move curr forward
    // }

    return prev;
    }
}
