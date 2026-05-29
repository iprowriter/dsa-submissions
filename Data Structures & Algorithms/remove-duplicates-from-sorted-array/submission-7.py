class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        
        writePointer = 1

        for readPointer in range(1, len(nums)):
            if nums[readPointer] != nums[readPointer -1]:
                nums[writePointer] = nums[readPointer]
                writePointer += 1

        return writePointer
        