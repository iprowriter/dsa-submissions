class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
 
        let dropsCount = 0;

    //Since it should be originally sorted (and rotated), 
    //we walk through the array and find drops (i > 1+1) and increment dropsCount
    //If it is more than 1, then it is not sorted originally
        for(let i=0; i<nums.length; i++){
            
            if(i === nums.length -1){
                if(nums[i] > nums[0]) dropsCount++
            } else if(nums[i] > nums [i + 1]){
                dropsCount++
            }
        }
    
        return dropsCount <= 1
    }
}
//Time Complexity: O(n)
//Space Complexity: O(1)
