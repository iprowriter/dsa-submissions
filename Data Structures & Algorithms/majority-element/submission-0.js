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
