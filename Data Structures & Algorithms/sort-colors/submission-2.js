class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while(mid <= high) {
             
            if(nums[mid]=== 0) {
                // Swap mid with low to move 0 to the front
                [nums[low], nums[mid]] = [nums[mid], nums[low]]
                low++;
                mid++
            } else if(nums[mid]=== 1) {
                // 1 is in the correct place for now, just move forward
                mid++
            } else if(nums[mid]=== 2) {
                // Swap mid with high to move 2 to the back
                [nums[high], nums[mid]] = [nums[mid], nums[high]]
                high--
                // Do NOT increment mid here because the new nums[mid] 
            // from the back needs to be evaluated next!
            }
        }
    }
}
//Time Complexity: O(N)
//Space Complexity: O(1)