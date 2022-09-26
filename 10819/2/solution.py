import sys
from itertools import permutations
N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))
max_sum = -1e9

def get_sum(ls):
    sum = 0
    for i in range(N - 1):
        sum += abs(ls[i] - ls[i-1])
    return sum

def solve():
    global max_sum
    for tup in permutations(nums, N):
        perm = list(tup)
        sum = get_sum(perm)
        max_sum = max(sum, max_sum)
    print(max_sum) 

if __name__ == "__main__":
    solve()