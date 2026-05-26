class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let word1Pointer = 0;
        let word2Pointer = 0;

        let newString = ""

        for(let i=0; i<word1.length; i++) {

            if(i=== word1.length -1 && word2[i + 1]) {
                 newString += word1[i]

                 const rem = word2.slice(i)

                 newString += rem
            } else {
                   newString += word1[i]
            if(word2[i]) {
                newString += word2[i]
            }
            }

           

        }

        return newString
    }
}
