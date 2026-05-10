class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {

        let arr = [];
        let set = new Set()

        for(let i = 0; i<words.length; i++) {
            let currentWord = words[i];

            for(let j = 0; j<words.length; j++){

                if(i !== j && words[j].includes(currentWord)){
                    
                    if(set.has(currentWord) == false){
                        set.add(currentWord)
                        arr.push(currentWord)
                    }
                }
            }
        };

        return arr;
    }
}
