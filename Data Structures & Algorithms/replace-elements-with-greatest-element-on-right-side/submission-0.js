class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

       //Create a variable to store changed array
        let changedArr = [];

        //Make a copy to mutate to preserve original array when we use mutating .shift
        let copy = [...arr]

        for(let i = 0; i < arr.length; i++){
            
            if (i === arr.length - 1){
                //fix the last array to -1
                changedArr.push(-1)
             
            } else {
                //remove the first element in the copied array
                copy.shift(i);
                //push the biggest el in the remaining array into the new array (changedArray)
                changedArr.push(Math.max(...copy))
            }
        }
        
        //return changed array
        return changedArr;


    }
}
