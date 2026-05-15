class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {

        const map = new Map();
        let distinct = [];

        for(let i = 0; i<arr.length; i++){


           map.set(arr[i], (map.get(arr[i]) || 0) +1 )
            
        }

        for(const [key, value] of map) {
            if(value === 1) {
                distinct.push(key)
            }
        }

        if(distinct.length < k){
            return ""
        } 
        // console.log("map: ", map)
        // console.log("distinct: ", distinct)
        return distinct[k - 1]
    }
}
