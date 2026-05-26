class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
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
