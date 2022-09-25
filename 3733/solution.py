import sys
import math

lines = sys.stdin.readlines()
for line in lines:
    N, S = list(map(int, line.split()))
    quot = math.floor(S / (N + 1))
    print(quot)