class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    let count = 0;
    
    // Precompute powers of 2 because numbers will get large quickly
    const powerOfTwo = new Array(n);
    powerOfTwo[0] = 1;
    for (let i = 1; i < n; i++) {
        powerOfTwo[i] = (powerOfTwo[i - 1] * 2) % MOD;
    }
    
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            // Add the number of valid subsequences for this window
            count = (count + powerOfTwo[right - left]) % MOD;
            // Move left pointer to check the next minimum
            left++;
        } else {
            // Sum is too large, reduce the maximum element
            right--;
        }
    }
    
    return count;
    }
}
