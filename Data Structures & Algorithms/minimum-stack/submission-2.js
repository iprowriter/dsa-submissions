class MinStack {
    constructor() {
        this.array = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {

        const currentMin = this.array.length === 0 
            ? val 
            : this.getMin();
        
        const newMin = Math.min(val, currentMin);
        
        // Store the value and the minimum at this point together
        this.array.push({ value: val, min: newMin });

    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const topEl = this.array[this.array.length -1].value
        return topEl
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.array.length ===0) return null;
        return this.array[this.array.length-1].min
    }
}
