#started at 10:48
import sys
input = sys.stdin.readline

def solve(N, coins, target):
    coins = coins
    dp = [[0] * (target+1) for _ in range(N)]
    # N+1 * N+1 행렬
    for i in range(N):
        for j in range(0, target+1):
            #i번째 인덱스의 동전으로 j만들 수 있나?
            if j % coins[i] == 0:
                dp[i][j] = int(j / coins[i])
    print(dp)        
    answer = [0] * (N+1)  # coins의 i번째 동전을 사용하여 N 을 만드는 횟수
    
    # for i in range(N):
        # for j in range(0, target+1):
        # diff = target - coins[i]
        # print(diff)
        # for j in range(N):
        #     if i != j and diff <= N and dp[j][diff] > 0:
        #         print(dp[j][diff])
        #         answer[i] = dp[j][diff]

    # print(answer)

T = int(input())

for i in range(T):
    N = int(input())
    coins = list(map(int, input().split(' ')))
    target = int(input())
    print(f"\n\ncase {i+1}")

    solve(N, coins, target)


