class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
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
