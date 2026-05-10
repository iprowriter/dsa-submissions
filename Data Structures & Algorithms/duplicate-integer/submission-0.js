class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const seen = new Set()

        for (let num of nums) {
          
          const duplicate = seen.has(num)
          if(duplicate) {
            return true
          } else {
            seen.add(num);
          }
        }
        return false
    };

    
}
