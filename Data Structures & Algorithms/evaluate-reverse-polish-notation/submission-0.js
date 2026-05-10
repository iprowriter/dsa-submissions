class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        //in RPN, there could only be two numbers so we can use a,b
        let stack = [];

        for(let token of tokens) {

            if(token === "+" || token === "-" || token === "*" || token === "/"){
                const b = stack.pop();
                const a = stack.pop();

                let result;

                if(token ==="+"){
                    result = a+b
                } else if(token ==="-") {
                    result = a-b;
                } else if(token === "*") {
                    result = a*b;
                } else {
                    result = Math.trunc(a/b);
                }

                stack.push(result)
            } else {
                stack.push(Number(token))
            }
        };
        return stack[0];
    }
}
