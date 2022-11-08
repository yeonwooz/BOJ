#started at 3:20
from sys import stdin
N = int(stdin.readline())
drinks = list(map(int, stdin.readline().split()))
drinks.sort()

amount = 0
for i in range(N-1):
    left = drinks[i]
    right = drinks[i+1]
    while (left > 0.000001):
        left = left / 2
        right += left
    amount = right

print(amount)
    