class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        // 1. Calculate the total sum of the entire array up front
        let totalSum = 0

        for(let num of nums){
            totalSum += num;
        };

        let leftSum = 0;
        // 2. Scan through to find the balance point
        for (let i=0; i<nums.length; i++){
             // Calculate rightSum instantly using O(1) math instead of a loop
             let rightSum = totalSum - leftSum - nums[i]

             if(leftSum === rightSum){
                return i  // Found the leftmost pivot!
             };
            // Add the current number to the left sum before moving to the next index
             leftSum += nums[i]
        }
        return -1
    }
}
//Time Complexity: O(n): We have two separate independent loops. Both takes O(n) to do their jobs
//Space Complexity: O(1)