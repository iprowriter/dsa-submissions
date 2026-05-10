class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        //check for edge cases before we start solving
        if(strs.length === 0) return "";

        //we take the first el in array as the longest common longestCommonPrefix

        let prefix = strs[0] //bat

        for(let i = 0; i<strs.length; i++){

            while(strs[i].indexOf(prefix) !== 0){

                //we chop off the last letter from behind
                prefix = prefix.substring(0, prefix.length -1);

                //return empty string if prefix is empty
                if(prefix === "") return "";
            }
        }
        return prefix;
    }
}

//Space Complexity: is O(1) because We aren't creating any new arrays or sets that grow with the input. We only store the prefix string.
//Time Complexity is O(S) or O(n * k) because In the worst case (e.g., all strings are exactly the same), you look at every single character in the array.
