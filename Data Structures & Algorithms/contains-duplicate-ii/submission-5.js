class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        const map = new Map();

        for(let i=0; i<nums.length; i++){
            let num = nums[i];

            if(map.has(num)){
                let dup = Math.abs(map.get(num) - i)
                if(dup <= k){
                    return true
                }
                map.set(num, i)
            } else {
                map.set(num, i)
            }
        }
        
        return false
    }
}

//Time Complexity: O(N)
//Space Complexity: O(N)
//This solution does not make use of sliding window. Check solution 2 for sliding window.
