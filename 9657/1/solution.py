#started at 9:37
n = int(input())

# 1: SK
# 0: CY
dp = [-1, 1, 0, 1, 1]   # 1 시작한 사람이 이김 / 0 상대방이 이김

for i in range(5, n+1):
    # C부터 시작하는 경우로 바꾼 후에, 한번이라도 상대가 이길 수 있다면
    if dp[i-1] == 0 or dp[i-3] == 0 or dp[i-4] == 0:
        dp.append(1)
    else:
        dp.append(0)

print('SK' if dp[n] == 1 else 'CY')