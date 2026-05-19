class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const seen = new Set();

        for(const num of nums) {
            if(seen.has(num)){
                seen.delete(num)
            } else {
                seen.add(num)
            }
        }
        return seen.size === 0
    }
}

//Time Complexity: O(n)
//Space Complexity: O(n)
