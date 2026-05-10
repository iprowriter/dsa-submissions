class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        function sinkIsland(r, c){
            if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0"){
                return;
            };

            //turn the founded "1" to "0" to sink the island
            grid[r][c] = "0";

            //then sink all connected islands (grids) to water by turning all 1's to 0's
            sinkIsland(r + 1, c);
            sinkIsland(r - 1, c);
            sinkIsland(r, c + 1);
            sinkIsland(r, c - 1);

        };
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++) {
                if(grid[i][j] === "1"){
                    islands++;
                    sinkIsland(i, j)
                }
            }
        }
        return islands
    }
}
