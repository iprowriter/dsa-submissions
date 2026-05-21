class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let count = 0;

        let allowedCount = new Array(26).fill(0)

        for(let i=0; i<allowed.length; i++) {
            allowedCount[allowed.charCodeAt(i) - 97] ++;

        }
       // console.log("allowedCount: ", allowedCount)

        for(const word of words) {

            let canForm = true;
             
             for(let i=0; i<word.length; i++){
               const index =  word[i].charCodeAt(0) - 97

               if(allowedCount[index] === 0){
                canForm = false;
                break
               };
             };

            if (canForm) count++
        };

        return count;
    }
}
//Let "A" be the length of the allowed string, "N" be the number of words in the words array, and "L" be the average length of each word.
//Time Complexity: O(A + N * L)
//We loop through the allowed string once to populate your frequency array, 
//which takes O(A) time. Then, we iterate through every character of every word in the words array, 
//which takes O(N * L) time. Inside the inner loop, looking up the index in allowedCount takes O(1) constant time.

//Space Complexity: O(1) - constant Space
//Our allowedCount array is always exactly 26 elements long, matching the size of the English alphabet. This fixed memory usage remains identical whether you process 5 words or 5 million words