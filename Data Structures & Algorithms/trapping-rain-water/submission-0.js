class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //This is different from max water between two containers
        //We are looking for water trapped in between two longest bars but above smallers bars inside those 2 longest bars.
        //
        let left = 0;
        let right = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;
        let maxWaterArea = 0;

        while(left < right){
            if(height[left] < height[right]) {
                if(height[left] > maxLeft) {
                    maxLeft = height[left]
                } else {
                    //Add water (means that this is a valley)
                    //minus the current height of bar (because we only interested in knowing water ontop of it)
                    maxWaterArea += maxLeft - height[left];
                }
                left++;
            } else {
                if(height[right] > maxRight){
                    maxRight = height[right]
                } else {
                    maxWaterArea += maxRight - height[right]
                }
                right--;
            }

        };
        return maxWaterArea;
    }
}
