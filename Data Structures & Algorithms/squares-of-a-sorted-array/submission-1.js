class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {

        let left = 0
        let right = nums.length - 1
        let result = new Array(nums.length).fill(0)
        let write = nums.length - 1

        while (left <= right){

            if (Math.abs(nums[left]) > Math.abs(nums[right])){
                result[write] = nums[left] * nums[left]
                left++
            } else {
                result[write] = nums[right] * nums[right]
                right--
            };

            write--
        }
            
        return result
    }
}

