class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // Handle cases where k is larger than the array length
         k = k % nums.length; 
        //reverse all the arrays
        reverse(nums, 0, nums.length - 1);

        //reverse the first k arrays (index)
        reverse(nums, 0, k - 1);

        //reverse the remaining elements
        reverse(nums, k, nums.length - 1)

        function reverse(array, start, end) {

            while(start < end){
                let temp = array[start];
                array[start] = array[end];
                array[end] = temp
                start++
                end--
            }
        }
    }
}
//Time Complexity: O(N)
//Space Complexity: O(1)
