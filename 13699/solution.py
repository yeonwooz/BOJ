#started at 9:07
import sys
n = int(sys.stdin.readline())

dp = [1] + ([0] * (n))
for i in range(1, n+1):
    for j in range(i // 2):
        dp[i] += dp[j] * dp[i-j-1]
    dp[i] *= 2
    if i % 2 == 1:
        dp[i] += dp[i//2] ** 2
print(dp[n])