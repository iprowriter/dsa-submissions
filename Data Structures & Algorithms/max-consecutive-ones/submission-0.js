class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

//Second method with Normal Loop
    // findMaxConsecutiveOnes(nums) {

    //     let currentStreak = 0;
    //     let maxStreak = 0;

    //     for(let i = 0; i < nums.length; i++) {
    //         if(nums[i] === 1){
    //             currentStreak++
    //            maxStreak = Math.max(currentStreak, maxStreak)
    //         } else {
    //             currentStreak = 0
    //         }
    //     };
    //     console.log("maxOnes Now: ", maxStreak)
    //     return maxStreak
        
    // }




    
}
