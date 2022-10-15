#started at 8:58
import sys
N = int(sys.stdin.readline())

a = [1,1]
dp = [4, 6]

for i in range(2, N+1):
    a.append(a[i-2] + a[i-1])
    dp.append(dp[i-1] + 2 * a[i])

print(dp[N-1])