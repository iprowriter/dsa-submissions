class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length === 1) return true;
        
        //I used nums.length - 1 to avoid comparison of last element against undefined
        for(let i=0; i<nums.length -1; i++) {
            
            // if(nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0 || 
            //    nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) 
               
            if (nums[i] % 2 === nums[i + 1] % 2)    {
               return false
            }
        }
        return true;
    }
}
//Time Complexity: O(n);
//Space Complexity: O(1)
