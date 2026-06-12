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
    //Floyd’s Tortoise and Hare (for finding duplicates)
    //Also called fast pointer and slow pointer
    hasCycle(head) {
        if(!head || !head.next) return false

        let tortoise = head;
        let hare = head;

        while(hare !== null && hare.next !== null){

            tortoise = tortoise.next;
            hare = hare.next.next;

            if(tortoise === hare){
                return true;
            }
        }
        return false;
    }
}

//Time Complexity: O(N)
//Space Complexity: O(1)
