class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    //This uses Sliding Window and Two pointers
    strStr(haystack, needle) {

        let needleLength = needle.length;
        let haystackLength = haystack.length;

        //edge cases
        if (needleLength === 0) return 0;

        //edge case. needleLength should never be greater than haystack since it is haystack substring
        if(needleLength > haystackLength) return -1;

        //haystackLength - needleLength. Because this is a sliding window. 
        //Stopping early prevents our code from looking at blank spaces outside the string
        // We only need to slide the window up to the point where the remaining 
        // characters in haystack are at least as long as the needle. 
        for(let i=0; i <= haystackLength - needleLength; i++) {

            let match = true

            //sliding window itself
            // Check if the substring starting at index 'i' matches 'needle
            for(let j=0; j<needleLength; j++) {
                if(haystack[i + j] !== needle[j]) {
                    match = false; // Mismatch found, break inner loop and slide the window
                    break;
                }
            }

            if(match){
                //we return the current index
                return i;
            }

        }

        //return -1 if we did not find a match
        return -1
    }
}
//Time Complexity: O(H * N) in the worst case.
//Space Complexity: O(1) (Constant Space)
