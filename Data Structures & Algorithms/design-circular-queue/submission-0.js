class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = new Array(k); // Fixed-size storage array
        this.maxSize = k;          // Maximum total capacity
        this.size = 0;             // Current element tracking count
        this.front = 0;            // Points to the front element index
        this.rear = -1;  
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;

        // Use modulo to wrap the rear index back to 0 if it goes past the array boundary
        this.rear = (this.rear + 1) % this.maxSize;
        this.queue[this.rear] = value;
        this.size++;
        
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
         if (this.isEmpty()) return false;

        // Use modulo to wrap the front index forward cleanly in a circle
        this.front = (this.front + 1) % this.maxSize;
        this.size--;
        
        return true;

    }

    /**
     * @return {number}
     */
    Front() {
         if (this.isEmpty()) return -1;
        return this.queue[this.front];
    }

    /**
     * @return {number}
     */
    Rear() {
         if (this.isEmpty()) return -1;
        return this.queue[this.rear];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.maxSize;
    }
}



/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
