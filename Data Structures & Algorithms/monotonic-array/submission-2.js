class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let isIncreasing = true;
        let isDecreasing = true;

        for(let i=0; i<nums.length - 1; i++){
            // If a number drops, it can NO LONGER be monotone increasing
            if(nums[i] > nums[i + 1]){
                isIncreasing = false;
            }
            // If a number rises, it can NO LONGER be monotone decreasing
            if(nums[i] < nums[i + 1]){
                isDecreasing = false;
            }
            // Optimization: If it broke BOTH rules, it's a rollercoaster! Stop early.
            if(!isIncreasing && !isDecreasing ){
                isIncreasing = false;
            }
        }
        // It is monotonic if it successfully kept at least one of its titles
        return isIncreasing || isDecreasing;
    }
}
