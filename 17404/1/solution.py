import sys
MAX = 2147000000
n = int(sys.stdin.readline())
costs = []
for _ in range(n):
    costs.append(list(map(int, sys.stdin.readline().split())))

answer = MAX
for idx in range(3):
    DP = [[MAX] * 3 for _ in range(n)]
    DP[0][idx] = costs[0][idx]

    for i in range(1, n):
        DP[i][0] = min(DP[i-1][1], DP[i-1][2]) + costs[i][0]
        DP[i][1] = min(DP[i-1][0], DP[i-1][2]) + costs[i][1]
        DP[i][2] = min(DP[i-1][0], DP[i-1][1]) + costs[i][2]
    
    for j in range(3):
        if idx != j:
            answer = min(answer, DP[n-1][j])

print(answer)