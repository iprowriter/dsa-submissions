class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let p1 = m - 1;
        let p2 = n - 1;

        let write_p = m + n - 1 //Pointer for the write-location at the very back of nums1

        //Loop as long as there are elements left in both arrays to compare
        while (p1 >=0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]){
                nums1[write_p] = nums1[p1]
                p1 -= 1
            } else {
                nums1[write_p] = nums2[p2]
                p2 -= 1
            }
            write_p -= 1
        }

        //Clean-up Step: If nums1 ran out of elements first, copy over any remaining elements from nums2.
        while (p2 >= 0) {
            nums1[write_p] = nums2[p2]
            p2 -= 1
            write_p -= 1
        }

 }

}

//Time Complexity: O(M + N) (Linear Time)
//Space Complexity: O(1) (Constant Space)
