class DDLLNode:
    def __init__(self, url: str):
        self.url = url
        self.prev = None
        self.next = None



class BrowserHistory:

    def __init__(self, homepage: str):
        self.current = DDLLNode(homepage)
        

    def visit(self, url: str) -> None:
        newPage = DDLLNode(url)

        self.current.next = newPage
        newPage.prev = self.current

        self.current = newPage
        

    def back(self, steps: int) -> str:
        while steps > 0 and self.current.prev != None:
            self.current = self.current.prev
            steps -= 1
        
        return self.current.url
        

    def forward(self, steps: int) -> str:
        while steps > 0 and self.current.next != None:
            self.current = self.current.next
            steps -= 1

        return self.current.url
        


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)