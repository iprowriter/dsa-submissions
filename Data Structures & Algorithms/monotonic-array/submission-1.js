class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //This is a brute force that is not attractive. Check solution 2
    isMonotonic(nums) {

        let isMonotonic = "";

        for(let i=0; i<nums.length - 1; i++){
            if(nums[i] > nums[i +1]) {
                 
                 if(isMonotonic === "" ){
                    isMonotonic = true;
                 } else if(isMonotonic === false){
                    return false
                 }
            } else if(nums[i] < nums[i +1]){
                if(isMonotonic === "" ){
                    isMonotonic = false;
                 } else if(isMonotonic === true){
                    return false
                 }
            }
        }
      
       return true
    }
}
//Time Complexity = O(n)
//Space Complexity = O(1)
