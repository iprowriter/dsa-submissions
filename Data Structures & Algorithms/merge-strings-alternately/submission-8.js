class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    //check a better approach with Two pointers in solution 2
    mergeAlternately(word1, word2) {

        let newString = ""

        for(let i=0; i<word1.length; i++) {

            if(i=== word1.length -1 && word2[i + 1]) {
                 newString += word1[i]
                 newString += word2.slice(i)
            } else {
                newString += word1[i]
                if(word2[i]) {
                    newString += word2[i]
                }
            }
        };

        return newString
    }
}
//Time Complexity: O(W1 + W2) (Linear Time)
//Space Complexity: O(W1 + W2): this solution construct a brand-new string newString that holds every single character from both word1 and word2.