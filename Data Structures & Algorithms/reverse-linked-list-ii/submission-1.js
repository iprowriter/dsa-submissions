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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if(!head || left === right) return head

        let dummy = new ListNode(0);
        dummy.next = head

        let prev = dummy
        for(let i=1; i < left; i++){
            prev = prev.next
        }


        // 'curr' becomes the first node inside our targeted reversal segment
        let curr = prev.next; 

        // Step 3: Shift pointers in-place to flip connections one by one
        // We execute this exactly (right - left) times
        for(let i =0; i< right - left; i++){
            let nextNode = curr.next
             curr.next = nextNode.next;
             nextNode.next = prev.next;
              prev.next = nextNode;
        }
        return dummy.next
    }
}
