class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
    let k = 0; // This is our "Write Pointer"

    for(let i=0; i<nums.length; i++){
         // If the current number is NOT the one we want to remove
        if(nums[i] !==val){
            // Move it to the "good" section at index k
            nums[k] = nums[i]
               // Move the Write Pointer forward
            k++
        }
    }

    // Return the count of good numbers
    return k;
    }
}

//This is trick question. In-place means leave it as is.
//Time Complexity: O(n) because we walk through the array exactly once.
//Space Complexity: O(1) because we didn't create a new array or any data structure
