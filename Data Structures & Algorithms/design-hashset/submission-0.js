class MyHashSet {
    constructor() {
        //question say dont use JS new Set() method. Also observe the constraints 0 <= key <= 1,000,000
        // Create a fixed-size array filled with false.
        // It spans up to 1,000,001 to safely cover all possible keys.
       this.setBoard = new Array(1000001).fill(false)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.setBoard[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.setBoard[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.setBoard[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
//Time Complexity: O(1)
//Space Complexity: O(M)