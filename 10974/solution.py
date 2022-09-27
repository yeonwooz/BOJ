import sys
from itertools import permutations

if __name__ == "__main__":
    N = int(sys.stdin.readline())
    for perm in permutations(range(1, N + 1), N):
        print(" ".join(str(s) for s in list(perm)))