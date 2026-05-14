class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        if (nums.length === 0) return 0;

    let maxStreak = 1;
    let currentStreak = 1;
    
    // We keep track of the current direction: 
    // 1 for increasing, -1 for decreasing, 0 for neutral/start
    let direction = 0; 

    for (let i = 1; i < nums.length; i++) {
        let currentDirection = 0;

        if (nums[i] > nums[i - 1]) {
            currentDirection = 1; // Increasing
        } else if (nums[i] < nums[i - 1]) {
            currentDirection = -1; // Decreasing
        }

        // If it's a flat line (numbers are equal), currentDirection is 0
        if (currentDirection === 0) {
            currentStreak = 1;
        } 
        // If the direction continues the same way, or we just started (direction === 0)
        else if (direction === 0 || currentDirection === direction) {
            currentStreak++;
        } 
        // The direction flipped! (e.g., went from increasing to decreasing)
        else {
            currentStreak = 2; // It's 2 because nums[i-1] and nums[i] form a new 2-element streak
        }

        // Save the current direction for the next iteration
        direction = currentDirection;
        maxStreak = Math.max(maxStreak, currentStreak);
    }

    return maxStreak;
    }
}
