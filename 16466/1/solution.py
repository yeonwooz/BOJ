import sys

# counts = [False] * 1000001

def solve(N, nums):
    # global counts # 참조객체지만 명시적으로 전역변수 사용함을 선언
    for i in range(1, N+1):
        if nums[i-1] != i:
            print(i)
            sys.exit()
    print(N+1)
    
def main():
    N = int(sys.stdin.readline().rstrip())
    nums = list(map(int, sys.stdin.readline().split()))
    nums.sort()
    solve(N, nums)

if __name__ == "__main__":
    main()