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
               }
            }
            console.log("current: ", currentOpsCount)

            minSoFar = Math.min(minSoFar, currentOpsCount)
            }

            
        }

        return minSoFar



        // let opsCount = 0
        // let whiteTracker = 0
        // for(let i=0; i<blocks.length; i++){
        //     if (opsCount < k){
        //        if(blocks[i] === "W"){
        //          whiteTracker++
        //        }
        //        opsCount++
        //     }
        // }

        // return whiteTracker
    }
}
