class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        for(let i=0; i<nums.length; i++){
            let cur = nums[i];

            for(let j= i + 1; j<nums.length; j++){
                if (cur === nums[j]){
                    return cur;
                }
            }
        }
    }
}
