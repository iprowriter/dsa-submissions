class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        // 1. Create a frequency array for heights 1 to 100
        const countBucket = new Array(101).fill(0);
        for (let h of heights) {
            countBucket[h]++;
        }

        let diffCount = 0;
        let currentExpectedHeight = 0;

        // 2. Walk through the original positions
        for (let i = 0; i < heights.length; i++) {
            // Find the next height that actually has students remaining
            while (countBucket[currentExpectedHeight] === 0) {
                currentExpectedHeight++;
            }

            // If the current student's height doesn't match the expected height
            if (heights[i] !== currentExpectedHeight) {
                diffCount++;
            }

            // "Place" the student by decrementing their count in the bucket
            countBucket[currentExpectedHeight]--;
        }

        return diffCount;
    }
}
