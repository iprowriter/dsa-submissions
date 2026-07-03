class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        initialSatisfiedCustomers = 0
        currentWindowExtra = 0

        for i in range(0, len(customers)):
            if grumpy[i] == 0:
                initialSatisfiedCustomers += customers[i]

        
        # first window
        for i in range(0, minutes):
            if grumpy[i] == 1:
                currentWindowExtra += customers[i]

        maxSavedWindow = currentWindowExtra

        ## rest of the window
        for i in range(minutes, len(customers)):
            if grumpy[i]== 1:
                currentWindowExtra += customers[i]

            if grumpy[i - minutes]== 1:
                currentWindowExtra -= customers[i - minutes]

            maxSavedWindow  = max(maxSavedWindow, currentWindowExtra)

        return maxSavedWindow + initialSatisfiedCustomers 