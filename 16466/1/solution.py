import sys

counts = [0] * 1000001

def solve(N, nums):
    global counts # 참조객체지만 명시적으로 전역변수 사용함을 선언

    for num in nums:
        counts[num] += 1

    for i in range(1, N + 1):
        if counts[i] == 0:
            print(i)
            break

def main():
    N = int(sys.stdin.readline().rstrip())
    nums = list(map(int, sys.stdin.readline().split()))
    solve(N, nums)

if __name__ == "__main__":
    main()