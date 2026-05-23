class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set1 = new Set(nums1);
    
        // Convert nums2 to a set to automatically handle its duplicates, 
        // then filter for elements that exist in set1
        return [...new Set(nums2)].filter(num => set1.has(num));
    }
}

//Time Complexity: O(N+M)
//Space Complexity:  O(N + min(N, M)) 