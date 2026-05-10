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
     * @return {boolean}
     */
    hasCycle(head) {
        //use two pointers and move one faster, faster one will eventually catch slow one if it is a cycle
        //initialize pointers
        //both pointers start at the same node
         let slow = head;
         let fast = head;
        
        //ensure fast.next exist to avoid our code crashing 
         while(fast !== null && fast.next !== null) {

            slow = slow.next;
            fast = fast.next.next;

            if( slow === fast){
                return true;
            };
         };
         return false
    }
}
