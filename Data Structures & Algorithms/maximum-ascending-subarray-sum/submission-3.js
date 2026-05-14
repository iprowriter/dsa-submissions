class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        if(nums.length === 0) return 0

        let cur = nums[0]
        let maxSum = nums[0]

        for(let i=1; i<nums.length; i++){

            if(nums[i] > nums[i-1]){
                cur += nums[i]
            } else {
                cur = nums[i]
            }
            
            maxSum = Math.max(maxSum, cur)
        }

        return maxSum;
    }
}
//Time Complexity: O(n): We iterate through the nums array exactly once starting from index 1.
//Inside the loop, we performed basic additions and comparisons, which are O(1) operations.
//Space Complexity: O(1): We only store two variables, cur and maxSum. This remains constant regardless of the size of the input array
