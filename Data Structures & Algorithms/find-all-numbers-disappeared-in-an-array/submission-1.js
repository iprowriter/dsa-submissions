class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {

        let missingNums = [];

        // 1. Mark the seats of the numbers we see by making them negative
        for (let i = 0; i < nums.length; i++) {
            // Use Math.abs because the current spot might have been flipped already!
            let seatIndex = Math.abs(nums[i]) - 1;
            
            // Only flip it if it hasn't been flipped yet
            if (nums[seatIndex] > 0) {
                nums[seatIndex] = -nums[seatIndex];
            }
        }

        // 2. Scan the seats. Any positive number means its owner never checked in!
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                missingNums.push(i + 1);
            }
        }

        return missingNums;
    }
}
//Time Complexity = O(n)
//Space Complexity = O(1)