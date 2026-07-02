class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    //take any combination of array
    //each sub-array must be equal to 'k'
    //the correct sub-array must have average greater or equal to 'threshold'
    //average is calculated by taking the sub-array and dividing by 'k'
    //Do I need to sort this array? not really needed
    numOfSubarrays(arr, k, threshold) {

        let subArraysCount = 0;

        for(let i=0; i<=arr.length - k; i++){
            let sub = 0;
            for(let j=i; j< i + k; j++){
               sub += arr[j]
            }
    
            if( sub / k >= threshold){
                subArraysCount++
            }
        }
        return subArraysCount
    }
}
