import sys
N = int(sys.stdin.readline())

bottom_total = N * 2 + 2
upper_sides = (N - 1) * 2

print(bottom_total + upper_sides)