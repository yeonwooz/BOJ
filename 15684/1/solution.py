import sys
N,M,H = map(int,sys.stdin.readline().split())

matrix = []     # 교차점 행렬 
for i in range(H):
    matrix.append([0] * (N-1))  # 마지막 세로선에서 시작하는 가로선 없음

for i in range(M):
    a,b = map(int,sys.stdin.readline().split())
    a -= 1
    b -= 1
    matrix[a][b] = 1
    
# 요소들을 모두 0으로 상쇄하기 위해 필요한 선의 개수 구하기


def track():
    global cnt
    for i in range(N):
        cur = i
        stack = []
        for j in range(H+1):
            if matrix[i][j] == 1:
                stack.append((i,j))
                


cnt = 0
track()
print(cnt)
