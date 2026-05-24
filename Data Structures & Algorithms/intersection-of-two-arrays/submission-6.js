class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    //Let me solve this with two pointers
    //Two pointers is a bad solutin here because of time complexity
    intersection(nums1, nums2) {
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        let num1Pointer = 0;
        let num2Pointer = 0;
        let resultSet = new Set();

        while(num1Pointer < nums1.length && num2Pointer < nums2.length) {
            if(nums1[num1Pointer] === nums2[num2Pointer]) {
                //move both on a match
                resultSet.add(nums1[num1Pointer])
                num1Pointer++;
                num2Pointer++
            } else if (nums1[num1Pointer] < nums2[num2Pointer]) {
                num1Pointer++; // nums1 value is too small, move it forward
            } else {
                 num2Pointer++; // nums2 value is too small, move it forward
            }
           
        };

        return [...resultSet]
    }
}
//Time Complexity: O(N log N + M log M)
//Space Complexity: O(min(N, M))
