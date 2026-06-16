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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        // Create a temporary dummy node pointing to the head
        let dummy = new ListNode(0)
        dummy.next = head;

        let curr = dummy
         
         // Scan through the list checking the NEXT node's value
        while(curr.next !== null){
            if(curr.next.val === val) {
                // Bypass the target node by skipping over it
                curr.next = curr.next.next
            } else {
                // Only advance curr if we didn't delete a node
                curr = curr.next
            }
        }

        return dummy.next
    }
}
//Time Complexity: O(N). 
//Space Complexity: O(1).
