class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length === t.length){

        const sortedS = s.trim().split("").sort().join("");
        const sortedT = t.trim().split("").sort().join("");

        return sortedS === sortedT

     } else{
        return false;
     }
    }
}
