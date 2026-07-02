class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        subListCount = 0
        currentSum = 0
        targetSum = threshold * k

        ## Add the first window
        for i in range(0, k):
            currentSum += arr[i]

        if currentSum >= targetSum:
            subListCount += 1

        ## Add the remaining windows
        for i in range(k, len(arr)):
            currentSum += arr[i] - arr[i - k]

            if currentSum >= targetSum:
                subListCount += 1

        return subListCount
        