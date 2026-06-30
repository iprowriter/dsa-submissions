class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {

        let minSoFar = k;

        for(let i=0; i<blocks.length; i++){

            if(blocks.length - i >= k){

                let currentOpsCount = 0;

                for(let j=i; j< i + k; j++){
                    if(blocks[j] === "W"){
                        currentOpsCount++
                    };
                };

                minSoFar = Math.min(minSoFar, currentOpsCount)
            };
        };
        return minSoFar
    }
}
//Time Complexity: O(N.M)
//Spaice Complexity: O(1)
//Brute force... See solution 2
