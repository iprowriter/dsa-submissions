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
