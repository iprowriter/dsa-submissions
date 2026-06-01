class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        writePointer = 0

        for readPointer in range(len(nums)):
            if nums[readPointer] % 2 == 0:
                temp = nums[writePointer]
                nums[writePointer] = nums[readPointer]
                nums[readPointer] = temp

                writePointer +=1
        
        return nums