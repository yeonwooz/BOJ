import sys

global nums
global target_sum
global visited
global cnt

def recur(cur, sum):
    if sum == target_sum:
        global cnt
        cnt += 1
    if cur == N-1:
        return 
    
    for i in range(cur + 1, N):
        if i > cur and visited[i] == False:
            visited[i] = True
            recur(i, sum + nums[i])
            visited[i] = False

def solve():
    for i in range(N):
        visited[i] = True
        recur(i, nums[i]) 
        visited[i] = False
    print(cnt)

if __name__ == "__main__":
    N, S = map(int, sys.stdin.readline().split())
    nums = list(map(int, sys.stdin.readline().split()))
        
    # 전역변수 초기화
    target_sum = S
    visited = [False] * N
    cnt = 0
    solve()