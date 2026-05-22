class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {

        let duplicatedNum;
        let missingNum;

        const set = new Set();

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

//Time Complexity: O(N)
//Space Complexity: O(N)
