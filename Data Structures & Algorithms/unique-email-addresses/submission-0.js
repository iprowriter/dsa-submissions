class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {

        let uniqueSet = new Set();

        for(let email of emails){

            //obtain the local and domain
            let [local, domain] = email.split('@');

            //ignore + in the local name
            local = local.split("+")[0]

            //remove the dots in the local name
            local = local.split('.').join('');

            //add to the set
            uniqueSet.add(local + '@' + domain)
        }

        return uniqueSet.size;
    }
}
//Time Complexity: O(N.M) Where N is number of emails and M is length of emails. .split(), .join(), and .add() all touch the characters of the string once.
//Space Complexity: O(N.M) In the worst case, every email is unique, so the Set stores all of them
