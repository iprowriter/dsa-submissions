class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const arr = new Array(501).fill(0)

        for (let i=0; i<nums.length; i++){
            arr[nums[i]]++
        }

        for (let i=0; i<arr.length; i++) {
            if(arr[i] !== 0 && arr[i]  % 2 !==0){
                return false
            }
        }

        return true;
    }
}
