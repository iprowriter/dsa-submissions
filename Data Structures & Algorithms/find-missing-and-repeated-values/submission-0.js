class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {

        let repeatedNum, missingNum;
        let uniQueSet = new Set();
        let n = grid.length;
        let totalElements = n * n; // This is our rigid upper boundary (n^2)

        // 1. Unravel the 2D grid and find the duplicate
        for(let i = 0; i < n; i++){
        for(let j = 0; j < grid[i].length; j++){
            let current = grid[i][j];
            if(uniQueSet.has(current)){
                repeatedNum = current;
            } else {
                uniQueSet.add(current);
            }
        }
        }
        // 2. Safely scan from 1 up to totalElements using our rigid boundary
        for(let i=1; i <= totalElements; i++){
            if(!uniQueSet.has(i)){
                missingNum = i;
                break // Found it! We can stop scanning early
            }
        }
       
       console.log("set size: ", uniQueSet.size, "set: ", uniQueSet)
       console.log("ans :", [repeatedNum, missingNum])
        return [repeatedNum, missingNum]
    }
}
//Time Complexity: O(M) or O(n^2)
//Space Complexity: O(M) or O(n^2)