class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1Counts = [0] * 26
        s2Counts = [0] * 26

        #helper function
        def getIndex(char):
            return ord(char) - ord('a')

        #populate both for the first window
        for i in range(0, len(s1)):
            s1Counts[getIndex(s1[i])] += 1
            s2Counts[getIndex(s2[i])] += 1

        #helper function to check matches
        def matches(list1, list2):
            if(list1 != list2):
                return False
            return True

        #check the first match
        if matches(s1Counts, s2Counts):
            return True

       #Check the rest of the window
        for i in range(len(s1), len(s2)):
            s2Counts[getIndex(s2[i])] += 1

            s2Counts[getIndex(s2[i - len(s1)])] -= 1

            if matches(s1Counts, s2Counts):
                return True

        return False
        