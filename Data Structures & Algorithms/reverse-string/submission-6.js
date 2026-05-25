class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {

        for(let i=0; i<s.length/2; i++) {
            let cur = s[i];

            s[i] = s[s.length - 1 -i ];
            s[s.length - 1 -i ] = cur
        };

      //  return s;
    }
}
//Time Complexity: O(N) Linear Time. In Big O notation, we drop constants like the fraction 1/2, which leaves us with a clean O(N) runtime. 
//Space Complexity: O(1) Constant time.