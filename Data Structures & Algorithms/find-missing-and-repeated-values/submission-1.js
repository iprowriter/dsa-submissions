class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    
    findMissingAndRepeatedValues(grid) {
        let n = grid.length;
        let totalElements = n * n;

        // 1. Calculate what the Sum and Square Sum SHOULD be
        let expectedSum = (totalElements * (totalElements + 1)) / 2;
        let expectedSquareSum = (totalElements * (totalElements + 1) * (2 * totalElements + 1)) / 6;

        let actualSum = 0;
        let actualSquareSum = 0;

        // 2. Compute the actual sums from the grid
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let val = grid[i][j];
                actualSum += val;
                actualSquareSum += val * val;
            }
        }

        // 3. Solve the algebraic equations
        let sumDiff = actualSum - expectedSum;               // This equals (a - b)
        let squareSumDiff = actualSquareSum - expectedSquareSum; // This equals (a^2 - b^2)

        let sumAB = squareSumDiff / sumDiff;                 // This equals (a + b)

        // Systems of equations: 
        // a = ((a + b) + (a - b)) / 2
        // b = ((a + b) - (a - b)) / 2
        let repeatedNum = (sumAB + sumDiff) / 2;
        let missingNum = (sumAB - sumDiff) / 2;

        return [repeatedNum, missingNum];
    }   
}

//Time Complexity: O(M) or O(n^2)
//Space Complexity: O(1) 
