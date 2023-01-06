import sys
N,M,H = map(int,sys.stdin.readline().split())

matrix = []     # 교차점 행렬 
for i in range(H):
    matrix.append([0] * (N))  # 마지막 세로선에서 시작하는 가로선 없음

for i in range(M):
    a,b = map(int,sys.stdin.readline().split())
    a -= 1
    b -= 1
    matrix[a][b] = 1
    
# 요소들을 모두 0으로 상쇄하기 위해 필요한 선의 개수 구하기

def move():
    for i in range(N):
        cur = i
        for h in range(H):
            if matrix[h][cur]:  # 우측이동
                cur += 1
            elif cur > 0 and matrix[h][cur - 1]:  # 좌측이동
                cur -= 1
        if cur != i:
            return False
    return True

def dfs(cnt, x, y):
    global answer
    if answer <= cnt:
        return
    if move():
        answer = min(answer, cnt)
        return
    if cnt == 3:
        return
    for i in range(x, H):
        k = 0
        if i == x:
            k = y
        for j in range(k, N - 1):
            if matrix[i][j]:
                j += 1
            else:
                matrix[i][j] = 1
                dfs(cnt + 1, i, j + 2)
                matrix[i][j] = 0

answer = 4
dfs(0, 0, 0)
print(answer if answer < 4 else -1)
