class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {

        const nextGreaterMap = new Map();
        const stack = [];
        const result = [];

        // 1. Scan nums2 to find the next greater element for EVERY number
        for (let num of nums2){
             // While the stack has numbers AND the current number is BIGGER
             // than the number on top of the stack...
            while(stack.length > 0 && num > stack[stack.length - 1]){
                // Pop the smaller number and map it to its bigger neighbor
                const smallerNum = stack.pop();
                nextGreaterMap.set(smallerNum, num)
            };
            // Push the current number onto the stack
            stack.push(num)
        }
         // 2. Build the result for nums1 using our fast O(1) Map lookups
        for (let num of nums1){
            // If it's in the map, use it. If not, it means there was no greater neighbor (-1)
            result.push(nextGreaterMap.has(num)? nextGreaterMap.get(num) : -1)
        }

        return result;
    }
}

//Time Complexity: O(N + M): We only loop through nums2 once and nums1 once. 
//Even though there is a while loop inside the for loop, each number gets pushed onto the stack exactly once and popped off exactly once.
//Space Complexity: O(M): We use extra space for the Map and the stack to keep track of elements in nums2.
