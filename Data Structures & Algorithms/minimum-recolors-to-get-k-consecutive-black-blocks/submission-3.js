class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let currentWhites = 0

        for(let i=0; i<k; i++){
            if(blocks[i] === "W"){
                currentWhites++
            }
        }

        let minOps = currentWhites;

        for(let i=k; i<blocks.length; i++){
            if (blocks[i] === "W") currentWhites++

            if(blocks[i - k] === "W") currentWhites--

            minOps = Math.min(minOps, currentWhites)
        }


        return minOps;
    }
}
