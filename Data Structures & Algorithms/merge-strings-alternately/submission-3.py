class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        word1Pointer = 0
        word2Pointer = 0
        result = []

        while word1Pointer < len(word1) or word2Pointer < len(word2):
            if word1Pointer < len(word1):
                result.append(word1[word1Pointer])
                word1Pointer +=1
            
            if word2Pointer < len(word2):
                result.append(word2[word2Pointer])
                word2Pointer +=1

        return "".join(result)


