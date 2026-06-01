class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let writePointer = 0;

        for(let readPointer = 0; readPointer < nums.length; readPointer++) {
           
           if(nums[readPointer] % 2 == 0) {
             const temp = nums[writePointer];
             nums[writePointer] = nums[readPointer]
             nums[readPointer] = temp;

             writePointer++
           }

        }

        return nums
    }
}

//Time Complexity: O(N)
//Space Complexity: O(1)