#started at 10:58
import sys
sys.setrecursionlimit(10**9)
n = int(input())

MIN = 50000
dp = [MIN] * (n+5)
dp[0] = 0
dp[1] = 0

answer = 0
def change(n, cnt, money):
    global answer
    if money == n:
        answer = dp[n]
        return
    if money > n:
        answer = -1
        return
    
    if money + 5 <= n:
        dp[money+5] = min(cnt+1, dp[money+5])
        change(n, cnt+1, money+5)
    if money + 2 <= n:
        dp[money+2] = min(cnt+1, dp[money+2])
        change(n, cnt+1, money+2)

change(n, 0, 0)
print(answer)