class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {

        let count = 0;

        for(let i=0; i<flowerbed.length; i++){

         //We only consider empty plots i.e = 0
         if(flowerbed[i] === 0) {

            //check is it beginning or is left neighbor empty
            let leftEmpty = (i===0 || flowerbed[i-1] === 0)

            //check is it the end or is right neighbor empty
            let rightEmpty = (i === flowerbed.length -1 || flowerbed[i+1] === 0)

            if(leftEmpty && rightEmpty){

                //if both empty, we plant the flower. by mutating the original array
                flowerbed[i] = 1;

                //increment count
                count++

                 // Optimization: if we already hit n, we can stop early
                if (count >= n) {
                    return true
                }
            }

         }  
        }
        return  count >= n;
    }
}

//Time Complexity: O(n) : We have only 1 loop. Checking flowerbed[i - 1] or flowerbed[i + 1] is just looking at a specific index, which is O(1). Even though we are "planting" a flower by changing 0 to 1, that is also a constant time operation
// If the bed has \(1,000\) plots, you do roughly \(1,000\) checks. That is Linear Time.

//Space Complexity: O(1): We are modifying original array without creating new one so its constant space. We only
//create small variable count that stays the same irrespective of the number.