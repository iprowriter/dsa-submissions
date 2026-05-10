class MinStack {
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMinVal = this.array.length === 0? val : this.getMin();
        const minVal = Math.min(val, currentMinVal)
        const currentVal = {value: val, min: minVal}
        this.array.push(currentVal);
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
        if(this.array.length === 0) return null;
        return this.array[this.array.length -1].min
        
    }
}
