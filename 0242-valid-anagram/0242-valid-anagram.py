class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # time complexity is O(n) or O(s+t)
        # because we're going to iterate both of the strings
        # memory complexity is the same O(s+t)
        if len(s) != len(t):
            return False
        
        countS, countT = {}, {}
        
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False
            
        return True

# Another solution that works, same runtime and space complexity, but above answer better
        # return Counter(s) ==  Counter(t)
    
# Another solution that works, memory is O(1)
        # return sorted(s) == sorted(t)

        