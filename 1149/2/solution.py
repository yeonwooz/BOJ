import sys
n = int(sys.stdin.readline())
MAX = 1000
DP = [[MAX] * 3 for i in range(n)]
costs = []
for i in range(n):
    costs.append(list(map(int, sys.stdin.readline().split())))

DP[0][0] = costs[0][0]
DP[0][1] = costs[0][1]
DP[0][2] = costs[0][2]

for i in range(1, n):
    DP[i][0] = min(DP[i-1][1], DP[i-1][2]) + costs[i][0]
    DP[i][1] = min(DP[i-1][0], DP[i-1][2]) + costs[i][1]
    DP[i][2] = min(DP[i-1][0], DP[i-1][1]) + costs[i][2]

print(min(DP[n-1]))