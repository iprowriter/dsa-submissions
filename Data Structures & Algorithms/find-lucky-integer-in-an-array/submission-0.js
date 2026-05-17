class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const map = new Map();
        let luckyNum = -1;

        for(let i=0; i<arr.length; i++){ 
            map.set(arr[i], (map.get(arr[i]) || 0)+1)
        };

        for(const [key, value] of map){
            if( key === value ){
                luckyNum = Math.max(luckyNum, key)
            }
        }

        return luckyNum
    }
}
//Time Complexity: O(n)
//Space Complexity: O(n)
