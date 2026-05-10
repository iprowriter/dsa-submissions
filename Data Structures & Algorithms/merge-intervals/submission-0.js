class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastAddedInterval = result[result.length - 1];
        let currentInterval = intervals[i];

        // 2. Check for overlap
        // If current start is <= last added end, they overlap!
        if (currentInterval[0] <= lastAddedInterval[1]) {
            // Merge them by picking the furthest end time
            lastAddedInterval[1] = Math.max(lastAddedInterval[1], currentInterval[1]);
        } else {
            // 3. No overlap, just add the new interval to the list
            result.push(currentInterval);
        }
    }

    return result;
}
}