class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {

        return (
            details.filter((passenger) =>{
                //age are always at position index 11 and 12
                //we use slice, slice takes start and end without getting the end, thus add 1.
                let age = Number(passenger.slice(11, 13))
                return age > 60;
            }).length
        )
    }
}
