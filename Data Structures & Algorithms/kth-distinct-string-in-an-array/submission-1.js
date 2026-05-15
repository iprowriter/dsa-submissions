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
//Time Complexity: O(n): We pass through the array to populate the frequency map
//This takes O(n) time.Loop 2: We loop through the keys of the map to extract distinct elements.
// This takes at most O(n) time.
//Total: O(n) + O(n) = O(2n), which simplifies strictly to O(n).
//Space Complexity: O(n)
