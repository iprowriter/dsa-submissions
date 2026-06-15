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
    
    isPalindrome(head) {
        if (!head || !head.next) return true;
        
        // Step 1: Find the middle of the linked list
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Step 2: Reverse the second half of the list
        let prev = null;
        let curr = slow;
        while (curr !== null) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        
        // Step 3: Compare the first half and the reversed second half
        let firstHalf = head;
        let secondHalf = prev; // 'prev' is now the head of the reversed second half
        
        while (secondHalf !== null) {
            if (firstHalf.val !== secondHalf.val) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }
        
        return true;

}
}
