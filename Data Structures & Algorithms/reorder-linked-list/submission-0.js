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
     * @return {void}
     */
    reorderList(head) {
        //check that head is not null
        if(!head || head.next === null){
            return
        }
        //cut the list in half
        let slow = head;
        let fast = head;
        

        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        };

        //reverse
        let prev = null;
        let current = slow.next;
        slow.next = null //cut it half

        while(current !== null){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        };

        let first = head;
        let second = prev;

        while(second){
            let next1 = first.next;
            let next2 = second.next;

            first.next = second;
            second.next = next1;

            first = next1;
            second = next2;
        }
 
    }
}
