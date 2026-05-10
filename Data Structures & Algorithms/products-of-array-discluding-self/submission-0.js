class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let multiples = [];
        for(let i=0; i<nums.length; i++) {
            const numsCopy = [...nums];
            numsCopy.splice(i, 1);
            const multiplyRemainingNumbers = numsCopy.reduce((acc, cur) => acc*cur, 1)
            multiples.push(multiplyRemainingNumbers)
        };
        return multiples;
    }
}
