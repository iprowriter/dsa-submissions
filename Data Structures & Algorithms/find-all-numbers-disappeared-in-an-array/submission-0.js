class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let missingNums = [];
        let allNumSet = new Set()

        for(let num of nums){
            allNumSet.add(num)
        };

        for(let i=1; i<nums.length + 1; i++){
            if(!allNumSet.has(i)){
                missingNums.push(i)
            }
        }

        return missingNums
    }
}
//Time Complexity = O(n)
//Space Complexity = O(n)
