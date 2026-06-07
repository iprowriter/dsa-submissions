class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //Method: Floyd's Cycle Detection Algorithm (Tortoise and Hare)
    findDuplicate(nums) {
        // Phase 1: Finding the intersection point in the cycle
        let tortoise = nums[0]
        let hare = nums[0]

        // Phase 2: Finding the entrance to the cycle (the duplicate)
        do {
            tortoise = nums[tortoise]  //moves 1 step
            hare = nums[nums[hare]]    //moves 2 step
        } while (tortoise !== hare)

        let pointer1 = nums[0];
        let pointer2 = tortoise

        while (pointer1 !== pointer2){
            pointer1 = nums[pointer1]     //moves 1 step
            pointer2 = nums[pointer2]     //moves 1 step
        }

        return pointer1;
    }
}

//Time Complexity: O(N)
//Space Complexity:  O(1)
