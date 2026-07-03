class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    //Customers array are equal to grumpy arrays
    //customers[i] number of customers that enter store at the start of the ith mins
    //enter at 08:00 - leaves at 08:01
    //grumpy[1] = grumpy and grumpy[0] = happy
    //grumpy[0] === happy customers
    //minute === cancel grumpiness (used it on the biggest number of customer batch)
    maxSatisfied(customers, grumpy, minutes) {

        let initialSatisfiedCustomers = 0;
        let currentWindowExtraSatisfied = 0;

         // 1. Calculate baseline satisfied customers (when owner is NOT grumpy)
         for(let i=0; i<customers.length; i++){
            if(grumpy[i] === 0){
                initialSatisfiedCustomers += customers[i]
            }
         }
         // 2. Find the best first window of size 'minutes' to see how many extra we can save
         for(let i=0; i<minutes; i++){
            if(grumpy[i] === 1){
                currentWindowExtraSatisfied += customers[i]
            }
         }

         let maxSatisfiedCustomers = currentWindowExtraSatisfied;
        // 3. Slide the window across the rest of the array
        for(let i= minutes; i< customers.length; i++){
            //add current grumpy
            if(grumpy[i]=== 1){
                currentWindowExtraSatisfied += customers[i]
            }

            //remove old grumpy
            if(grumpy[i - minutes]=== 1){
                currentWindowExtraSatisfied -= customers[i - minutes]
            }

            maxSatisfiedCustomers = Math.max(maxSatisfiedCustomers, currentWindowExtraSatisfied)
        }

        return maxSatisfiedCustomers + initialSatisfiedCustomers

    }
}
//Time Complexity: O(n)
//Space Complexity: O(1)