class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {

        g.sort((a,b)=> a - b)
        s.sort((a,b)=> a - b)

        let left = 0;
        let right = 0;

        while(left < g.length && right < s.length) {
            if(s[right] >= g[left]) {
                left ++
            }

            right++
        }

        return left;

    }
}

//Time Complexity:  O(NlogN + MlogM)
//Space Complexity: O(1) or O(N + M)

