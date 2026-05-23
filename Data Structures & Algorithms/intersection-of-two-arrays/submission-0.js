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
                set.add(resultSet)
            } 
        };
        
        return [...resultSet]; //Array.from(resultSet);
    }
}
