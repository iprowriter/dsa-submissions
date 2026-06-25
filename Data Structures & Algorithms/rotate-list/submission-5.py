# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        
        if not head or not head.next  or k == 0:
            return head

        tail = head
        length = 1
        while tail.next != None:
            tail = tail.next
            length += 1

        k = k % length
        if k == 0:
            return head

        tail.next = head
        stepsToNewTail = length - k
        newTail = head

        for i in range(1, stepsToNewTail):
            newTail = newTail.next

        newHead = newTail.next
        newTail.next = None

        return newHead