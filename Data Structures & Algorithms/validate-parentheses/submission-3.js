class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //Early check if it is even
         if(s.length % 2 !==0) {
            return false
        }; 
       
       //a map of all possible parenthesis
        const map = {
            ")":"(",
            "]":"[",
            "}":"{"
        };

        //stack
        const stack = [];

        //iteration
        for(let i=0; i<s.length; i++){
            const char = s[i]
            if(char == "(" || char == "[" ||char =="{") {
                stack.push(char);
            }else if(stack.pop() !== map[char]){
                return false
            }
        };

        return stack.length === 0
    }
}
