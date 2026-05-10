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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummyNode = new ListNode(0); //dummy node to gather the two nodes into 1
        let mergedNode = dummyNode;

        // 2. While both lists have nodes left
        while(list1 !== null && list2 !== null ){

            if(list1.val < list2.val){
                mergedNode.next = list1;  // Link the smaller node
                list1 = list1.next;  // Move forward in list1
            } else {
                mergedNode.next = list2;  // Link the smaller node
                list2 = list2.next; // Move forward in list2
            }
            mergedNode = mergedNode.next; // Move our new list's tail forward
        };
         // 3. If one list is finished, attach the remainder of the other
        if (list1 !== null) {
            mergedNode.next = list1
        } else {
            mergedNode.next = list2
        };
            
            // 4. Return the head (which is the node AFTER dummy)
        return dummyNode.next;
    }
}
