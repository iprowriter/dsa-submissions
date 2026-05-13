class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */

    //This is a brute force solution. Better solution in solution 2
    nextGreaterElement(nums1, nums2) {

        let arr = []

        for (let i=0; i<nums1.length; i++){

            for (let j = nums2.indexOf(nums1[i]); j<nums2.length; j++){
                    if( nums2[j] > nums1[i]){
                       arr.push(nums2[j])
                       break;
                    } else if (j === nums2.length -1 ){
                        arr.push(-1)
                    }
            }
        };
        console.log("nums1: ", arr)
        return arr;
    }
}
//Time complexity: O(N x M)
//Space complexity: O(N)