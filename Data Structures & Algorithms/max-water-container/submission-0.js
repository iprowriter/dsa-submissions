class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //we found height, width (difference btw indices), and we found area
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while(left < right){
            //we take the minimum height because it is limiting us. to avoid water spillage.
            const h = Math.min(heights[left], heights[right]);
            const w = right - left;
            const a = h * w;  //area

            maxWater = Math.max(maxWater, a);

            if(heights[left]  < heights[right]) {
                left++;
            } else {
                right--;
            }
        };
        return maxWater
    }
}
