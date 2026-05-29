class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let k = 0;
        let pointer = nums.length - 1;

        for (let i=0; i < nums.length; i++) {

            if(nums[i] !== nums[i + 1]) {
                k++
            } 
        };
console.log("top k: ", nums)
         while(pointer >= 0  ) {

             if( nums[pointer] === nums[pointer - 1]) {
                 nums.splice(pointer, 1)
             };

             pointer--;
         }

      console.log("duplicat nums: ", nums)
      console.log("count: ", k)
        return k;
    }
}



//  removeDuplicates(nums) {

//         let k = 0;
//         let pointer = nums.length - 1;

//         for (let i=0; i < nums.length; i++) {

//             if(nums[i] !== nums[i + 1]) {
//                 k++
//             } else {
//                  nums[i] = nums[i] * -1
//             }
//         };
// console.log("top k: ", nums)
//          while(pointer >= 0  ) {

//              if( nums[pointer] < 0 ) {
//                  nums.splice(pointer, 1)
//              };

//              pointer--;
//          }

//       console.log("duplicat nums: ", nums)
//       console.log("count: ", k)
//         return k;
//     }
