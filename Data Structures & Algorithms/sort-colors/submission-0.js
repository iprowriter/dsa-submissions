class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        const k = new Array(3).fill(0)

        console.log("original k:", k)

        for(let i=0; i<nums.length; i++){
           
           k[nums[i]]++
        }

        console.log("k occurence:", k)

        let pointer = 0;

        for(let i=0; i<3; i++) {
            let count = k[i]
            while(count > 0){
                nums[pointer] = i
                pointer++
                count --
            }
        }

    }
}
