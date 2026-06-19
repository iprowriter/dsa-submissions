
class DDLLNode {
    constructor(url){
        this.url = url;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.current = new DDLLNode(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newPage = new DDLLNode(url)

        this.current.next = newPage;
        newPage.prev = this.current;

        this.current = newPage
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {

        while (steps > 0 && this.current.prev !== null){
            this.current = this.current.prev;
            steps --;
        }
        return this.current.url
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.current.next !== null){
            this.current = this.current.next;
            steps --;
        }
        return this.current.url
    }
}
//Time Complexity: O(1)
//Space Complexity: O(N)
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
