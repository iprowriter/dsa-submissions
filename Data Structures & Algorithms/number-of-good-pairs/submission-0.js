class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let goodPairCount = 0;

        for(let i = 0; i<nums.length; i++) {

            for(let j = i + 1; j<nums.length; j++) {
                if(nums[i] === nums[j]) goodPairCount++;
            }
        }

        return goodPairCount;
    }
}
//Time Complexity: O(n);
//Space Complexity: O(1)
