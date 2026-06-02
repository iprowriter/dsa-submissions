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

        for (let i=0; i< Math.trunc((alphaNumeric.length) / 2); i++) {

            if (alphaNumeric[i] !== alphaNumeric[alphaNumeric.length - 1 - i]) {
                return false
            }
        }

        return true


    }
}
