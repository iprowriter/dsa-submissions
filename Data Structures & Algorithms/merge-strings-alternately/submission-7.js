class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    //This solution was also solved in Python, switch to Python to see .PY Solutions
    mergeAlternately(word1, word2) {

        let word1Pointer = 0;
        let word2Pointer = 0;
        let result = [];

        while(word1Pointer < word1.length || word2Pointer < word2.length) {

            if(word1Pointer < word1.length) {
                result.push(word1[word1Pointer])
                word1Pointer++
            }

             if(word2Pointer < word2.length) {
                result.push(word2[word2Pointer])
                word2Pointer++
            }
        }
        return result.join("")
    }
}
//Time Complexity: O(W1 + W2) (Linear Time)
//Space Complexity: O(W1 + W2):