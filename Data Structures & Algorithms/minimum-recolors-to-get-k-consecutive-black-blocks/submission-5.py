class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        currentWhites = 0

        # first window of K
        for i in range(k):
            if blocks[i] == "W":
                currentWhites += 1
        
        minOps = currentWhites

        for i in range(k, len(blocks)):
            if blocks[i]== "W":
                currentWhites += 1

            if blocks[i - k] == "W":
                currentWhites -= 1

            minOps = min(minOps, currentWhites)

        return minOps

# Time Complexity = O(N)
# Space Complexity 0(1)
        