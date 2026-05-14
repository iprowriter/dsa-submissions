class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let leftSum = 0;
        

        for(let i=0; i<nums.length; i++){

            let rightSum = 0;

            for(let j=i+1; j<nums.length; j++) {
                rightSum += nums[j]
            }

            if(leftSum === rightSum){
                return i
            } else {
                leftSum += nums[i]
            }

        }
        console.log("leftSum: ", leftSum)
       return -1
    }
}
