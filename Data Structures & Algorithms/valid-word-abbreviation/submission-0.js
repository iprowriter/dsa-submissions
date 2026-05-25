class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let wordPointer = 0;
        let abbrPointer = 0;

        while (wordPointer < word.length && abbrPointer < abbr.length) {
           const char = abbr[abbrPointer];
           
           // Check if the current character in abbr is a digit
           if(char >= "0" && char <= "9") {
              
              //return false if it is a leading zero
              if(char === "0") return false;

              //Gather all multi-digit nums
              let num = 0;
              while(abbrPointer < abbr.length && abbr[abbrPointer] >= "0" &&
              abbr[abbrPointer] <= "9" ) {
                num = num * 10 + parseInt(abbr[abbrPointer]);
                abbrPointer++;
              }

              // Skip the word pointer forward by that parsed number
              wordPointer += num;
           } else {
                if(word[wordPointer] !== abbr[abbrPointer]) {
                    return false
                }

                wordPointer++;
                abbrPointer++
           }
        }
        
        // Both pointers must reach the exact end of their respective strings
        return wordPointer === word.length && abbrPointer === abbr.length;
    }
}
//Time Complexity: O(W + A) (Linear Time)
// We step through both strings from left to right exactly once. Even when we parse multi-digit numbers, the inner loop just advances abbrPointer forward. No characters are re-scanned.
//Space Complexity: O(1) (Constant Space)
