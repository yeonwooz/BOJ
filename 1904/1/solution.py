N = int(input())
C = 15746

dp = [0,1,2]
for i in range(3,N+1):
    sum = dp[i-2] + dp[i-1]
    dp.append((dp[i-2] % C + dp[i-1] % C) % C)  # (a + b) mod c = (a mod c + b mod c) mod c

print(dp[N])

