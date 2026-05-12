class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const map = new Map();
    let maxKey = nums[0]; // Start with the first number
    let maxVal = 0;

    for (let num of nums) {
        // Update the count in the Map
        let count = (map.get(num) || 0) + 1;
        map.set(num, count);

        // Check if this is the new "leader"
        if (count > maxVal) {
            maxVal = count;
            maxKey = num;
        }
    }
    return maxKey;
    }
}
