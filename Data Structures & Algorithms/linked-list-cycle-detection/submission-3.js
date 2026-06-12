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
        
        let curr = head;
        const set = new Set();

        while (curr !== null) {
            if (set.has(curr)) { 
                return true;
            } 
            set.add(curr);       
            curr = curr.next;    
        }
        return false;
    }
}

//Time Complexity: O(N)
//Space Complexity: O(N)
