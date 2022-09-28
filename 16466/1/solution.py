import sys

def solve(N, nums):
    nums.sort()
    for i in range(1, N + 1):
        if i not in nums: 
            print(i)
            break   

def main():
    N = int(sys.stdin.readline().rstrip())
    nums = list(map(int, sys.stdin.readline().split()))
    solve(N, nums)

if __name__ == "__main__":
    main()