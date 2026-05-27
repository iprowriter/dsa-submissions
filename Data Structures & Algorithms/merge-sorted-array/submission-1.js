class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        for(let i=0; i<n; i++){
            nums1.pop()
        }

        for(let i=0; i<nums2.length; i++){
            nums1.push(nums2[i])
        }

        nums1.sort((a,b)=>a-b)
    }
}
//Time Complexity: O((M + N)log (M + N)
//Space Complexity: O(1) to O(M + N) (Engine Dependent)