class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        // 1. Array goes up to 501 to safely index up to the value 500
        let countBucket = new Array(501).fill(0);

       // 2. Walk BACKWARDS from 500 down to 1 to find the LARGEST lucky number first!
        for(let num of arr){
            countBucket[num]++
        }

        for(let i = 500; i >=1; i--){
            if(countBucket[i] === i){
                return i // Found it! Since we went backwards, this is guaranteed to be the largest.
            }
        }

        return -1
    }
}
//Time Complexity: O(n)
//Space Complexity: O(1)