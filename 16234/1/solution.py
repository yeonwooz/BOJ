# 인구 이동 
# https://www.acmicpc.net/problem/16234
# started at 11:24
#

import sys

def getInput():
    return sys.stdin.readline().rstrip()

N,L,R = map(int, getInput().split())

colors = []
matrix = []
for i in range(N):
    arr = list(map(int, getInput().split()))
    matrix.append(arr)
    colors.append([0]*N)

colorIdx = 1
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

#국경선 열기, 연합국가 표시
for r in range(N):
    for c in range(N):
        for i in range(4):
            nr = r + dr[i]
            nc = c + dc[i]
            if 0 <= nr < N and 0 <= nc < N and colors[nr][nc] == 0:
                if L <= abs(matrix[r][c] - matrix[nr][nc]) <= R:
                    if (colors[r][c] == 0):
                        colors[r][c] = colorIdx
                        colorIdx += 1
                    colors[nr][nc] = colors[r][c]


# # 인구이동
# for color in range(1, colorIdx):

