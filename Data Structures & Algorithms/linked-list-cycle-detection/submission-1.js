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

        while (curr !== null){
            console.log("current curr: ", curr)
            if(set.has(curr.next)){
                return true
            } 
            set.add(curr.next)

            let nextNode = curr.next;
            curr = nextNode;
        }
        return false;
    }
}
