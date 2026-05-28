class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {

        let writePointer = 0;

        // readPointer scans ahead looking for non-zero values
        for(let readPointer = 0; readPointer<nums.length; readPointer++) {

            if(nums[readPointer] !==0) {
                // Swap the elements in place
                const temp = nums[writePointer];
                nums[writePointer] = nums[readPointer];
                nums[readPointer] = temp;
                
                // Move the write pointer to the next slot
                writePointer++
            }
        }
    }
}
//Time Complexity: O(N)
//Space Complexity: O(1)