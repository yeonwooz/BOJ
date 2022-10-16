#started at 10:58
n = int(input())

dp = [0] * (n+1)

if n >= 2:  
    dp[2] = 1
    # 2보다 큰 수는 최소한 1개의 동전을 사용할 수 있다 

for i in range(4, n+1):
    # 3은 2나 5를 가지고 만들 수 없다
    if i % 5 == 0:
        # 5의 배수라면 5를 가지고 만들 수 있다
        dp[i] = i//5
    else:
        # 2 작은 수에서 2원을 더 써서 만들 수 있다
        dp[i] = dp[2] + dp[i-2]

answer = dp[n]
print(-1 if answer == 0 else answer)