class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        
        let count = 0;
        const expected = [...heights].sort((a,b) => a  - b)

        for(let i=0; i<heights.length; i++){

           if(heights[i] !== expected[i]){
                    count++
                }
        }

        return count
    }
}
//Time Complexity: O(nlogn)The Clone: [...heights] takes O(n) time to copy the values.
//The Sort: In JavaScript, .sort((a, b) => a - b) uses high-performance sorting algorithms
// (like Timsort) [1] which take O(nlogn) time. This is the clear performance bottleneck.
//The Loop: Comparing the elements takes O(n) time.
//Total: O(n) + O(n log n) + O(n) simplifies directly to the largest boss: 
// O(nlogn).
//Space Complexity: O(n). We created a duplicate array expected of size (n) to hold the sorted values.