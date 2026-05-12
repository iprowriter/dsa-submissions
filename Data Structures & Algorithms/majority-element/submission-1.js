class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const map = new Map();
        let maxKey = 0
        let maxVal = 0

        for(let num of nums){
            if(map.has(num)){
                
                map.set(num, map.get(num) + 1);
                
                if(map.get(num) > maxVal) {
                    maxKey = num;
                    maxVal = map.get(num);
                }

            } else {  
               map.set(num, 1)
               if(map.get(num) > maxVal) {
                    maxKey = num;
                    maxVal = map.get(num);
                }
            }
        };
        console.log("major: ", maxKey, maxVal)
        return maxKey
    }
}
//Time Complexity: O(n): We loop through the array once
//Inside the loop, map.get, map.set, and map.has are all O(1)
//Space complexity: O(n): In the worst case (if almost every number was unique), your Map would grow to the size of the input array.
