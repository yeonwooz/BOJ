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
    
print(matrix)