class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let pointer = nums.length - 1;

         while(pointer >= 0  ) {

             if( nums[pointer] === nums[pointer - 1]) {
                 nums.splice(pointer, 1)
             };

             pointer--;
         }
   
        return nums.length;
    }
}

//This is a slow solution. Go to solution2 for a better solution
//Also. Switch to Python to view the solution in Python.
//Time Complexity = O(N^2)
//Space Complexity: O(1) (Constant Space)