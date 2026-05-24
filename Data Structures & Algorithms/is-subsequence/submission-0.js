class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let sPointer = 0;
        let tPointer = 0;
        
        // Run until we run out of letters in either string
        while(sPointer < s.length && tPointer < t.length) {
            // If the letters match, move the checklist pointer forward
            if(s[sPointer] === t[tPointer]) {
                sPointer++
            };
            // Always move the conveyor belt pointer forward
            tPointer++
        }
        // If sPointer reached the end, it means we found all characters in order
        return sPointer === s.length
    }
}

//Time Complexity: O(T) (Linear Time): In the worst-case scenario, our tPointer steps through the entire string t exactly once.
// Because we only look at each character of t a single time, the runtime scales linearly with the size of the larger string.
//Space Complexity: O(1): We only maintain two integer pointer variables (sPointer and tPointer). No extra arrays or strings are created.