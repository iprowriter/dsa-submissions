class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    //permutation, same word, positions of letters changed 
    //return true or false
    checkInclusion(s1, s2) {
     if(s1.length > s2.length) return false;

     const s1counts = new Array(26).fill(0);
     const s2counts = new Array(26).fill(0);
     
     const getIndex = (char) => char.charCodeAt(0) - 97;

    //Populate frequencies for s1 and the very first window of s2
     for(let i=0; i<s1.length; i++){
        s1counts[getIndex(s1[i])]++
        s2counts[getIndex(s2[i])]++
     }

     //helper function for comparing matches

     const matches = (arr1, arr2) => {
        for(let i=0; i<26; i++){
            if(arr1[i] !== arr2[i])return false 
        }
        return true;
     }

     //check first window
     if(matches(s1counts, s2counts)) return true;

     //check the rest of windows if first window is false
     for(let i=s1.length; i<s2.length; i++){
        s2counts[getIndex(s2[i])]++

        s2counts[getIndex(s2[i - s1.length])]--

        if(matches(s1counts, s2counts)) return true;
     }

     return false
    }
}
