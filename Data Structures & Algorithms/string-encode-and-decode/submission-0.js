class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";

        for(let str of strs) {
             string += str.length + "#" + str;
        };
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //we first make an empty array to save our returned word
        //we keep variable track of currentIndex. 
        // Inside our while loop, we check if we have reached '#' else we keep going until we hit it;
        //We then cut out the number before # and use parseInt to make a number;
        //Next, we start cutting out the word after the index of # (hashIndex + 1)
        //We stop cutting by adding length of the word to the start index;
        // we push to array. set the currentIndex to the end of the word we just cut out, this breaks this loop
        //the next loop repeats this process until we ran out of words to loop.

      let res = [];
      let currentIndex = 0;

      while (currentIndex < str.length) {
        let hashIndex = currentIndex;
        while (str[hashIndex] !== '#') {
            hashIndex++;
        }

        let length = parseInt(str.substring(currentIndex, hashIndex));
        let start = hashIndex + 1;
        let end = start + length;

        const word = str.substring(start, end);
        res.push(word);

        currentIndex = end;
      };
      return res;


    }
}
