class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;
        let writePointer = 1;

        for(let readPointer = 1; readPointer < nums.length; readPointer++) {
            if(nums[readPointer] !== nums[readPointer - 1]) {
               
                nums[writePointer] = nums[readPointer];
                writePointer++
            }
        }

        return writePointer;
    }
}

//The trick here is we dont have to do any deletion of duplicates. just overwrite them
//Time Complexity = O(N)
//Space Complexity: O(1) (Constant Space)