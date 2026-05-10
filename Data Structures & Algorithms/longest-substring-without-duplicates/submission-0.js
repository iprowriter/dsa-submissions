class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       
        let nonDuplicates = new Set();
        let left = 0;
        let maxLength = 0;

        for(let right = 0; right< s.length; right++) {

            while(nonDuplicates.has(s[right])){
                nonDuplicates.delete(s[left]);
                left++;
            };

            nonDuplicates.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1)
            
        };
        return maxLength
    }
}
