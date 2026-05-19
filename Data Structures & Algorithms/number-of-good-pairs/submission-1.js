class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let goodPairCount = 0
        const map = new Map();

        for(const num of nums){
            if(map.has(num)){
                // Add the number of previous occurrences to our pairs
                goodPairCount += map.get(num);
               // Increment the count
               map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1)
            }
        }

        return goodPairCount;
    }
}
//Time Complexity: O(n);
//Space Complexity: O(n)
