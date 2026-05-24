class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        // let needlePointer = 0;
        // let haystackPointer = 0;
        // let firstIndex = -1;

        // while(needlePointer < needle.length && haystackPointer < haystack.length) {

        //     if(needle[needlePointer] === haystack[haystackPointer]) {
        //         needlePointer++
        //     };

        //     haystackPointer++
        // }

        return haystack.indexOf(needle)
    }
}
