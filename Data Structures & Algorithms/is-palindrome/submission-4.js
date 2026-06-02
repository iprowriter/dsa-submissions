class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
    let right = s.length - 1;

    function isAlphaNumeric(c) {
        if (!c) return false; // Handle undefined edge case
        const code = c.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    }

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        if (!isAlphaNumeric(s[left])) {
            left++;
            continue; 
        }
        // Skip non-alphanumeric characters from the right
        if (!isAlphaNumeric(s[right])) {
            right--;
            continue;
        }

        // Compare characters case-insensitively
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
    }
}

//Time Complexity: O(N)
//Space Complexity: O(1)
