class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphaNumeric = ''

        def is_alphanumeric(c):
            code = ord(c)
            return (
                48 <= code <= 57 or
                65 <= code <= 90 or
                97 <= code <= 122
            )

        for char in s:
            if(is_alphanumeric(char)):
                alphaNumeric += char.lower()

    
        left = 0
        right = len(alphaNumeric) - 1

        while left < right:
            if alphaNumeric[left] == alphaNumeric[right]:
                left += 1
                right -= 1
            else: 
                return False    

        return True