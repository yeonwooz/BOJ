# 14712 넴모넴모 / 수연
# started at 10:34

# idea :  '12345'  / '135' 각 열의 문자열 같은지 비교하기?

from sys import stdin

N,M = map(int, stdin.readline().split())
arr = [[(0) for i in range(M+1)] for j in range(N+1)]
cnt = 0

def dfs(x,y):
    global cnt;
    nx = 0
    ny = 0
    if (x,y) == (1, N+1):
        cnt += 1
        return
    
    # 행이나 열 끝에 도달하면 다음 행 / 열로 교체
    if x == M:
        nx, ny = 1, y+1
    else:
        nx, ny = x+1, y

    
    # x행 y열에 넴모를 넣는다.
    dfs(nx, ny)

    if arr[y-1][x] == 0 or arr[y-1][x-1] == 0 or arr[y][x-1] == 0:
        arr[y][x] = 1
        dfs(nx, ny)
        arr[y][x] = 0
    
dfs(1,1)
print(cnt)