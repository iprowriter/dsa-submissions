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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) { 
        let dummy = new ListNode(0);
        let curr = dummy

        let carry = 0  // Tracks the carried digit (0 or 1)

        while(l1 !== null || l2 !== null || carry > 0) {
            let sum = carry;

            if(l1 !== null){
                sum += l1.val;
                l1 = l1.next; 
            };

            if(l2 !== null){
                sum += l2.val;
                l2 = l2.next; 
            };

            // Calculate new carry and the single digit to store
            carry = Math.floor(sum / 10);
            let digit = sum % 10; //Modulo e.g., 14 % 10 -> digit = 4

            curr.next = new ListNode(digit)
            curr = curr.next;
        }
       
        return dummy.next
    }
}
//Time Complexity: O(max(N, M))
//Space Complexity: O(max(N, M))
