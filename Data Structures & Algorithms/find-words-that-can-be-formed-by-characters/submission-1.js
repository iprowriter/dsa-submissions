class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {

        let totalLength = 0;

        // Step 1: Count frequencies of available characters
        const charCounts = new Array(26).fill(0);
        for (let i = 0; i < chars.length; i++) {
            charCounts[chars.charCodeAt(i) - 97]++;
        }

        // Step 2: Check each word
        for (const word of words) {
            const wordCounts = new Array(26).fill(0);
            let canForm = true;

            for (let i = 0; i < word.length; i++) {
                const index = word.charCodeAt(i) - 97;
                wordCounts[index]++;

                // If we need more of this letter than we have available, stop
                if (wordCounts[index] > charCounts[index]) {
                    canForm = false;
                    break;
                }
            }

            if (canForm) {
                totalLength += word.length;
            }
        }

        return totalLength;
    }
}
