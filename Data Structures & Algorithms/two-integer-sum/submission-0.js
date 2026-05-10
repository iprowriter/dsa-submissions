class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Use map. 
    //Loop and minus current loop from target. Check if difference exist in the map
    //if it exists, we end the loop and return their indices in array, otherwise we add it
    //We use the indices as value and the actual numbers as their key in our map.
    const indicesMap = new Map();
    for(let i=0; i<nums.length; i++) {
        const currentNum = nums[i];
        const complementExist = target - currentNum;

        if(indicesMap.has(complementExist)) {
            return [indicesMap.get(complementExist), i]
        };

        indicesMap.set(currentNum, i)

    }
    }

    

}
