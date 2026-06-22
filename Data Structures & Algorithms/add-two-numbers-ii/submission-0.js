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
    //The difference between Add Numbers I and Add Numbers II (this one) is that Add Numbers I is 
    //already reversed making it easier to calculate it like we would do by hand.
    addTwoNumbers(l1, l2) {
        let stack1 = [];
        let stack2 = [];

        let head = null;
        let carry = 0;

        while (l1 !== null){
            stack1.push(l1.val)
            l1 = l1.next
        }

        while (l2 !== null){
            stack2.push(l2.val)
            l2 = l2.next
        }

        while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
            let sum = carry;

            if (stack1.length > 0) sum += stack1.pop();
            if (stack2.length > 0) sum += stack2.pop()



            carry = Math.floor(sum / 10);
            let digit = sum % 10

            let newNode = new ListNode(digit)
            newNode.next = head;
            head = newNode;
        }

        return head
    }
}
//Time Complexity: O(N + M)
//Space Complexity: O(1) extra space 


