class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    //sliding window
    containsNearbyDuplicate(nums, k) {
        const windowSet = new Set();

        for(let i=0; i<nums.length; i++){

            if(i > k){
                windowSet.delete(nums[i - k - 1])
            }

            if(windowSet.has(nums[i])){
                return true
            }

            windowSet.add(nums[i])
        }
        return false;
    }
}
//Time Complexity: O(N)
//Space Complexity: O(min(n,k))
