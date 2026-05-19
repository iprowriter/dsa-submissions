class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        //500 contraints
        const bucket = new Array(501).fill(0)

        for (let i=0; i<nums.length; i++){
            bucket[nums[i]]++
        }

        
        //correct: Senior style
        return !bucket.some(n => n % 2);
        
        
        //return !arr.some(n => n && n % 2);
        //correct: mid-level style
        //  for (const n of arr) {
        //     if (n && n % 2) return false;
        // }
        // return true;
        //correct: junior style
        // for (let i=0; i<arr.length; i++) {
        //     if(arr[i] !== 0 && arr[i]  % 2 !==0){
        //         return false
        //     }
        // }
        //return true;

        
    }
}
//Time Complexity: O(n)
//Space Complexity: O(1)
