class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //We look for min price for buy
        //we look for min price for sell (which may happen in the future)

        let minPrice = Infinity;
        let maxPrice = 0;

        for(let price of prices) {
            if(price < minPrice) {
                minPrice = price;
            } else {
                const profit = price - minPrice;
                maxPrice = Math.max(maxPrice, profit)
            }
        };
        return maxPrice;  
    }
}
