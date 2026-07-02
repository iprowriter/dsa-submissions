class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let subArrayCount = 0;
        let currentSum = 0;

        let targetSum = threshold * k;

        //add the first window
        for(let i=0; i<k; i++){
            currentSum += arr[i]
        }

        if(currentSum >= targetSum) subArrayCount++;

        //Add up rest of the windows
        for(let i=k; i<arr.length; i++){
            currentSum += arr[i] - arr[i - k]

            if (currentSum >= targetSum) subArrayCount++;
        }

        return subArrayCount;
    }
}
//Time Complexity: O(N)
//Space Complexity: O(1)
