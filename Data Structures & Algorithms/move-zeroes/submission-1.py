class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        writePointer = 0

        for readPointer in range(len(nums)):
            if nums[readPointer] is not 0:
                temp = nums[writePointer]
                nums[writePointer] = nums[readPointer]
                nums[readPointer] = temp
                writePointer += 1
        