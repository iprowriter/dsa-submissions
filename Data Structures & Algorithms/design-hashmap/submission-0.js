
//This solution takes a lot of memory space. So I optimized it in solution 2
class MyHashMap {
    constructor() {
      //  this.mapBoard = new Array(1000001).fill([false, null])
        this.mapBoard = Array.from({ length: 1000001 }, () => [false, null]);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.mapBoard[key][0] = true
        this.mapBoard[key][1] = value
    }

    

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.mapBoard[key][0] === true){
            return this.mapBoard[key][1]
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.mapBoard[key][0] = false
        this.mapBoard[key][1] = null
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

//Time Complexity: O(1) for all methods
//put, get, and remove all directly look up the key index in your master array. This takes instant, constant time.
//Space Complexity: O(M): \(M\) is the maximum possible key value (\(1,000,000\)). You allocate this array in the constructor up front.
