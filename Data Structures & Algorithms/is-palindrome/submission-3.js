class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let alphaNumeric = ''
         
        function isAlphaNumeric(c){
            const code = c.charCodeAt(0)

            return (
                (code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122)
            )
        };

        for(const char of s) {
            if(isAlphaNumeric(char)) {
                alphaNumeric += char.toLowerCase();
            }
        }

        let left = 0
        let right = alphaNumeric.length - 1

        while (left < right) {
            if(alphaNumeric[left] === alphaNumeric[right]){
                left++
                right--
            } else {
                return false
            }
        };

        return true
    }
}
//Time Complexity: O(N)
//Space Complexity: O(N)
