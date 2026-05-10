class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {

        let resultSet = new Set();

        for(let i = 0; i<words.length; i++){
            let current = words[i];

            for(let j = 0; j<words.length; j++) {

                if( i !== j && words[j].includes(current)){
                    resultSet.add(current);
                    break;
                }
            }
        };
        return Array.from(resultSet);
    }
}
//Time Complexity:  Time Complexity: O(n^2 . m^2)
//Space Complexity:  Time Complexity: O(n . m)

