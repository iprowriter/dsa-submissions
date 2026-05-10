class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //We use set set
        const nonDuplicatedNums = new Set(nums);
        let longestLength = 0;

        for (let num of nonDuplicatedNums) {
            if(!nonDuplicatedNums.has(num -1)){
                // only start if it's the beginning of a sequence
                let currentNum = num;
                let currentLength = 1;

                while(nonDuplicatedNums.has(currentNum+1)){
                    currentNum++;
                    currentLength++;
                };
                //this is important because we are comparing different sets
               longestLength = Math.max(currentLength,  longestLength)
            }
        };
        return longestLength;
    }
}
