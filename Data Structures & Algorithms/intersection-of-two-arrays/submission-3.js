class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {

        const set = new Set();
        const resultSet = new Set();

        for(const num of nums1){
            set.add(num)
        }
        

        for(const num of nums2){
            if(set.has(num)){
                resultSet.add(num)
            } 
        };
        
        return [...resultSet]; //Array.from(resultSet);
    }
}

//Time Complexity: O(N+M) :  We iterate through nums1 once to populate the set O(N).
// Then, we loop through nums2 once to check for matches O(M).
// Because Set lookups (set.has()) take O(1) constant time on average, the total time is linear.

//Space Complexity:  O(N + min(N, M)) 
//Why: The first set stores up to N unique elements. 
//The resultSet will store at most the total number of overlapping elements, which cannot exceed the size of the smaller array.
