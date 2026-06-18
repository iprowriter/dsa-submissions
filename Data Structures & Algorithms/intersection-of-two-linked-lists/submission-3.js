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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        if (!headA || !headB) return null;

        let pA = headA;
        let pB = headB;

        while (pA !== pB){
            pA = (pA == null)? headB : pA.next;
            pB = (pB == null)? headA : pB.next;
        }

        return pA;
    }
}
//Time Complexity: O(N + M)
//Space Complexity: O(1)
