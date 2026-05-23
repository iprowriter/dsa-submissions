class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {

        const resultSet = new Set();

        for (const num of nums1){
            if(nums2.indexOf(num) !== -1) {
                resultSet.add(num)
            }
        }

        return Array.from(resultSet)
    }
}
//Time Complexity: O(N * M)
//Space Complexity: O(min(N, M)