class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        for(let i = nums.length - 1; i > 0; i--){

            while (k > 0) {
               const cur = nums.splice(i)
    
               nums.unshift(...cur)
               k--
        }
        }
    }
}
