class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        //We guard against unforeseen edge condition
     if(intervals.length === 0) return 0;

     //we sort the interval in their ascending order using endtime in the array
     intervals.sort((a,b) => a[1] - b[1]);

     //we set count to hold number of overlapping intervals needed to be removed
     let count = 0;

     //we set the endtime of the first interval
     let lastEnd = intervals[0][1];

     for(let i = 1; i < intervals.length; i++){
        const currentStart = intervals[i][0];
        const currentEnd = intervals[i][1];

        //overlapp happens if currentStart is less than lastEnd;
        if(currentStart < lastEnd){
            count++;
        } else {
            lastEnd = currentEnd;
        }
     }

     return count;
    }
}
