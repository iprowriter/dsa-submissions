class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {

        let count = 0;

        for (let det of details) {
            let a = det.length - 4
            let aNum = det[a]
            

            let b = det.length - 3
            let bNum = det[b]
        
            let age = Number(`${aNum}${bNum}`)

            if (age > 60){
                count++;
            }
        };

        return count;
    }
}
