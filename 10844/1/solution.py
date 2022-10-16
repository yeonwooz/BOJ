n = int(input())

dp = [[0] * 10 for _ in range(n+1)] # N자리수이면서 끝자리가 i
divisor = 1000000000
for i in range(1, n+1):
    for j in range(10):
        if i == 1 and j > 0:
            dp[i][j] = 1
        else:
            if j == 0:
                dp[i][j] = dp[i-1][1]
            elif j == 9:
                dp[i][j] = dp[i-1][8]
            if 1 <= j <= 8:
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

sum = 0
for cnt in dp[n]:
    sum += cnt

print(sum % divisor)
