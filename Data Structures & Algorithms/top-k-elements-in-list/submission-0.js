class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //I would create new Map to store unique values
        //check if key exit, otherwise create it
        //return the values

        const frequencyMap = new Map();

        for(let i=0; i<nums.length; i++){

            if(frequencyMap.has(nums[i])){
               frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1)
            } else {
                frequencyMap.set(nums[i], 1)
            }
        }
         console.log("map", frequencyMap)
        const mostFrequent = [...frequencyMap.entries()].sort((a,b)=> b[1] -a[1]).slice(0, k).map(entry => entry[0]);
        return mostFrequent
    }
}