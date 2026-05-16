class MyHashMap {
    constructor() {
        // Create a flat array of 1,000,001 items initialized to -1.
        // This is incredibly memory efficient compared to 1 million nested arrays!
        //If a slot holds -1, it means the key does not exist.
        //If a slot holds any other number, that number is the value.
        this.mapBoard = new Array(1000001).fill(-1)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
         // Just overwrite the -1 with the real value
       this.mapBoard[key] = value 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // If it's -1, it returns -1 automatically. Otherwise, it returns the value!
       return this.mapBoard[key]
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
         // To remove it, we just reset it back to -1
        this.mapBoard[key] = -1
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

//Time Complexity stays O(1): It's still a direct index lookup.
//Space Complexity stays O(M)
