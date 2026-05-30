class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    //Solved using in-built JS sort method
    sortedSquares(nums) {
        for(let i=0; i<nums.length; i++){

            nums[i] = nums[i] * nums[i];
        }

        return nums.sort((a,b)=> a-b)
    }
}
