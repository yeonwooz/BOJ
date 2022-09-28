import sys
N, K = map(int, sys.stdin.readline().split())

i = 1
max_value = -1e9
while i <= K:
    value = str(N * i)[::-1]
    if max_value < int(value):
        max_value = int(value)
    i += 1

print(max_value)