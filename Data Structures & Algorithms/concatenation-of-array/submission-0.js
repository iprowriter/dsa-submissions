class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let concatNums = [...nums]

        for (let num of nums){
           concatNums.push(num)
        }
        return concatNums;
    }
}
