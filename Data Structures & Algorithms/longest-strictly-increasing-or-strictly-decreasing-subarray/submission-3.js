class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        if (nums.length === 0) return 0
      
        let longestInCreasingStreak = 1;
        let currentIncreasingStreak = 1;

        let longestDecreasingStreak = 1;
        let currentDecreasingStreak = 1;

        for(let i=1; i<nums.length; i++){

            if(nums[i] > nums[i-1]){
                currentIncreasingStreak ++;
                longestInCreasingStreak = Math.max(longestInCreasingStreak, currentIncreasingStreak);

                currentDecreasingStreak = 1;
                
            } else if(nums[i] < nums[i-1]){
                currentDecreasingStreak ++;
                longestDecreasingStreak = Math.max(longestDecreasingStreak, currentDecreasingStreak);

                currentIncreasingStreak = 1;

            } else {
                currentIncreasingStreak = 1;
                currentDecreasingStreak = 1;
            }

        }
        console.log("longestInCreasingStreak: ", longestInCreasingStreak)
       console.log("longestDecreasingStreak: ", longestDecreasingStreak)
        return Math.max(longestInCreasingStreak, longestDecreasingStreak)
    }
}
