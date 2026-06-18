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

        let headACur = headA;
        let headBCur = headB;

        let comparison = 0

        while(headACur !== null) {

            while(headBCur !== null) {
                comparison++
                console.log(`Comparison ${comparison}: `, headACur.next)
                console.log(`Comparison ${comparison}: `, headBCur.next)

                if(headACur === headBCur){
                    return headACur
                }
        
              headBCur = headBCur.next
            }
            headBCur = headB
            headACur = headACur.next
        }

        return null;
    }
}
