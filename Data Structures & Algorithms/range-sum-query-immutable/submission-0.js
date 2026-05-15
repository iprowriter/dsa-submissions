class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        // Create an array to hold our running totals.
        // We make it 1 element larger to easily handle index 0 edge cases
        this.prefixSums = new Array(nums + 1).fill(0);

        // Build the running totals: [0, -2, -2, 1, -4, -2, -3]
        for(let i=0; i<nums.length; i++){
            this.prefixSums[i + 1] = this.prefixSums[i] + nums[i]
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        //// Return the difference instantly with math subtraction!
        return this.prefixSums[right + 1] - this.prefixSums[left]
    }
}
//Time Complexity: O(n)
//Space Complexity: O(n)
