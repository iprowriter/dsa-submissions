class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right){
            let temp = s[left];

            s[left] = s[right];
            s[right] = temp;

            right--;
            left++; 
        };
        return s
    }
}
//Time Complexity: O(N) Linear Time. 
//Space Complexity: O(1) Constant time.