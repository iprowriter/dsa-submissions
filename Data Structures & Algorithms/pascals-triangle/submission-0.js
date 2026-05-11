class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if(numRows === 0) return [];
        let result = [[1]];

        for(let i=1; i<numRows; i++){
            let prevRow = result[i - 1];
            let nextRow = [1];

            for(let j=1; j < prevRow.length; j++){
              nextRow.push(prevRow[j -1] + prevRow[j])
            };

            nextRow.push(1);
            result.push(nextRow);
        }


        return result;
    }
}
