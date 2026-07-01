class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
    
       let minSoFar = 0;

        nums.sort((a,b) => a - b);

        for(let i=0; i<=nums.length - k; i++){

            let curr = nums[i + k - 1] - nums[i];
           
            if(minSoFar === 0){
                minSoFar = curr
            } else {
                minSoFar = Math.min(minSoFar, curr)
            }
        }

        return minSoFar

    }
}
