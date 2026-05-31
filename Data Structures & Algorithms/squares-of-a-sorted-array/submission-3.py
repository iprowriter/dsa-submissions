class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        result = [0] * len(nums)
        write = len(nums) - 1

        while left <= right:
            if abs(nums[left]) > abs(nums[right]):
                result[write] = nums[left] * nums[left]
                left += 1
            else:
                result[write] = nums[right] * nums[right]
                right -= 1
            
            write -= 1
        return result
        