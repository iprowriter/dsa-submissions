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



