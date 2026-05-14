class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        if(nums.length === 0) return 0

        let cur = nums[0]
        let maxSum = nums[0]

        for(let i=1; i<nums.length; i++){

            if(nums[i] > nums[i-1]){
                cur += nums[i]
                maxSum = Math.max(maxSum, cur)
            } else {
                cur = 0;
                cur = nums[i]
            }

        }

        return maxSum
        // let subArrayTotal = 0;

        // for(let i=0; i<nums.length; i++){
            
        //     if(nums[i] > nums[i-1]){
        //         subArrayTotal += nums[i];
        //     } else {
        //         subArrayTotal = 0
        //         subArrayTotal += nums[i];
        //     }
        // };
        // return subArrayTotal;
    }
}
