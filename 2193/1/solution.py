#started at 9:28
n = int(input())

dp = [0] * (n+2)
dp[0] = 0
dp[1] = 1
dp[2] = 1

for i in range(3, n+1):
    dp[i] = dp[i-2] + dp[i-1]
# i-2자리까지 채우는 경우의 수와, i-2, i-1자리가 0,1인 경우를 더함

print(dp[n])