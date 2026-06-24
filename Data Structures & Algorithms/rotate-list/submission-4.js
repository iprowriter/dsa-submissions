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
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
     
        // Edge Cases: Empty list, single node, or 0 rotations
        if (!head || !head.next || k === 0) return head;

        // Step 1: Compute the length of the list and locate the tail node
        let tail = head;
        let length = 1;
        while (tail.next !== null) {
            tail = tail.next;
            length++;
        }

        // Step 2: Handle cases where k is greater than the total length
        k = k % length;
        if (k === 0) return head; // No rotation needed if k matches length perfectly

        // Step 3: Connect tail to head to form a complete circle
        tail.next = head;

        // Step 4: Find the node right before the new head position
        let stepsToNewTail = length - k;
        let newTail = head;
        
        // Move stepsToNewTail - 1 times to stand on the node that will become the new tail
        for (let i = 1; i < stepsToNewTail; i++) {
            newTail = newTail.next;
        }

        // Step 5: Set up the new head and break the ring connection
        let newHead = newTail.next;
        newTail.next = null;

        return newHead;


    }
}



// while (curr !== null) {

//             if(curr === head) {
//                 newHead = new ListNode(curr.val);
//             } else {
//                 let newNode = new ListNode(curr.val);
//                  newNode.next = newHead;
//                  newHead = newNode
//             }

//             curr = curr.next
//         }