class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //Brute force solution. Not elegant. check solution 2
    validPalindrome(s) {

      let left = 0;
      let right = s.length - 1;

      while(left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right -1)
        }
        left++
        right--
      }

      return true;

    

      //Helper function to check Palindrome
      function isPalindrome(s, l, r){

        while(l < r) {
            if(s[l] !== s[r]) return false;
            l++
            r--
        };
        return true;
      }

    }
}
//Time Complexity: O(N)
//Space Complexity: O(1)
