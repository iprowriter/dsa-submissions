class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //I will create a hashMpa
        //I will trim, split, sort, join the element and check if it exist as key in the map
        //, it if exists, push the value to the array, if not set it as a new array
        //return all the values

        const grouped = new Map();
        for(let i=0; i<strs.length; i++) {
            const originalWord = strs[i]
            const sortedKey = strs[i].split("").sort().join("");
            
            if(grouped.has(sortedKey)) {
                grouped.get(sortedKey).push(originalWord)
            } else {
                grouped.set(sortedKey, [originalWord])
            };
        };
        return Array.from(grouped.values())
    }
}
