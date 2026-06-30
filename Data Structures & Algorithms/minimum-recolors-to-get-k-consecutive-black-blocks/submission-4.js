class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let currentWhites = 0
        
         // 1. Count 'W's in the very first window of size k
        for(let i=0; i<k; i++){
            if(blocks[i] === "W"){
                currentWhites++
            }
        }

        let minOps = currentWhites;
         // 2. Slide the window across the rest of the string
        for(let i=k; i<blocks.length; i++){
            // Add the new element entering the right side of the window
            if (blocks[i] === "W") currentWhites++

            // Remove the old element leaving the left side of the window
            if(blocks[i - k] === "W") currentWhites--

            minOps = Math.min(minOps, currentWhites)
        }


        return minOps;
    }
}
