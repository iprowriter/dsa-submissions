class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    //increment elements
    //sort the element
    maxFrequency(nums, k) {
        nums.sort((a,b)=> a - b);

        let left = 0;
        let currentSum = 0
        let maxFreq = 0
 
           // 2. Expand the window using the 'right' pointer
        for(let right = 0; right<nums.length; right++){
            currentSum += nums[right]

           // 3. Shrink the window from the left if the operations needed exceed k
        // Operations needed = (Window Width * Target Value) - Current Sum
            while((right - left + 1) * nums[right] -  currentSum > k){
                currentSum -= nums[left];
                left++
            };
            // 4. Update the maximum window size (frequency) found so far
            maxFreq = Math.max(maxFreq, right - left + 1)
        }
        return maxFreq;
    }
}
//Time Complexity: O(nlogn)
//Space Complexity: O(1)
