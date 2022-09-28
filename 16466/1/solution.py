import sys

possible_min = 1

def get_min(ls):
    global possible_min
    n = len(ls)
    for i in range(n - 1):
        for j in range(n - 1, i, -1):
            if ls[i] > ls[j]:
                ls[i], ls[j] = ls[j], ls[i]
            if ls[i] == possible_min:
                possible_min += 1

def solve(N, nums):
    get_min(nums)
    print(possible_min)

def main():
    N = int(sys.stdin.readline().rstrip())
    nums = list(map(int, sys.stdin.readline().split()))
    solve(N, nums)

if __name__ == "__main__":
    main()