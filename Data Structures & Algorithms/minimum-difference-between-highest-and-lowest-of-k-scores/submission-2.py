class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        
        nums.sort()
        minSoFar = float('inf')

        for i in range(0, len(nums) - k + 1):
            curr = nums[i + k  - 1] - nums[i]
            minSoFar = min(minSoFar, curr)

        return minSoFar

   
        