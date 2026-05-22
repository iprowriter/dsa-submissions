class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {

        let duplicatedNum;
        let missingNum;

        const set = new Set();

        // for(let i=0; i<nums.length - 1; i++) {

        //     if(nums[i] === nums[i + 1]) {
        //         duplicatedNum = nums[i]
        //         missingNum = nums[i + 1] + 1
        //     }
        // }

        for (const num of nums) {
            if(set.has(num)){
                duplicatedNum = num;
            } else {
                set.add(num)
            }
        };

        for (let i = 1; i<= nums.length ; i++) {
             if(!set.has(i)){
                missingNum = i;
                break
             }
        }

        return [duplicatedNum, missingNum]
    }
}
