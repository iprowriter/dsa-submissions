class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const map = new Map();

        // 1. Count the frequencies of all strings
        for(let str of arr){
            map.set(str, (map.get(str)|| 0) +1)
        };
       
       // 2. Walk through the strings again in their original order
        for(let str of arr){
             // If it is a distinct string...
            if(map.get(str)===1){
                k-- // One less distinct string left to find
                // If k hits 0, this is the k-th distinct string!
                if(k === 0){
                    return str;
                }
            }
        };
        return ""
    }
}
