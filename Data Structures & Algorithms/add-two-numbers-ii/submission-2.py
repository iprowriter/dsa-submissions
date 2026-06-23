# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        stack1 = []
        stack2 = []

        head = None
        carry = 0

        while l1 != None:
            stack1.append(l1.val)
            l1 = l1.next

        while l2 != None:
            stack2.append(l2.val)
            l2 = l2.next

        while len(stack1) > 0 or len(stack2) > 0 or carry > 0:
            sum = carry

            if len(stack1) > 0:
                sum += stack1.pop()

            if len(stack2) > 0:
                sum += stack2.pop()

            carry = sum // 10
            digit = sum % 10

            newNode = ListNode(digit)
            newNode.next = head
            head = newNode

        return head
        