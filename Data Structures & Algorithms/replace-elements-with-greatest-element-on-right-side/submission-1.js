class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let MaxSoFar = - 1;

       //walk backwards
        for(let i = arr.length -1; i >= 0; i--) {
            let currentNum = arr[i];
            
            arr[i] = MaxSoFar;

            if(currentNum > MaxSoFar){
                MaxSoFar = currentNum
            }

        };

        return arr;
    }
}
