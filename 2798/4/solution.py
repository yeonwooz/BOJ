import sys

N, M = sys.stdin.readline().split()
N = int(N)
M = int(M)
cards = list(map(int, sys.stdin.readline().split()))

max_sum = 0
for i in range(len(cards) - 2):
    for j in range(i+1, len(cards) - 1):
        for k in range(j+1, len(cards)):
            sum = cards[i] + cards[j] + cards[k]
            if max_sum < sum and sum <= M:
                max_sum = sum

print(max_sum)