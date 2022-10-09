# https://campkim.tistory.com/17
# BFS 를 이용한 풀이 

# import sys
# from collections import deque
# input = sys.stdin.readline

# def BFS(ls, start):
#     cnt = 0
#     visited[start] = True

#     stack = deque()  # 
#     stack.append(start)

#     while stack:
#         dot = stack.popleft()
#         for i in ls[dot]:
#             if not visited[i]:
#                 cnt += 1
#                 visited[i] = True
#                 stack.append(i)
#     return cnt

# N,M = map(int, input().split())
# heavys = [[] for _ in range(N+1)]
# lights = [[] for _ in range(N+1)]

# mid = (N+1) // 2  # 이진 탐색 트리의 중간 인덱스 

# for i in range(M):
#     a,b = map(int, input().split())  # 무거운 것, 가벼운 것
#     heavys[b].append(a) 
#     lights[a].append(b)

# answer = 0
# for i in range(1, N+1):
#     visited = [False] * (N+1)
#     if BFS(heavys, i) >= mid:
#         answer += 1
#     if BFS(lights, i ) >= mid:
#         answer += 1

# print(answer)

##################

# DFS

import sys
from collections import deque
input = sys.stdin.readline

def DFS(ls, N):
    global cnt
    for i in ls[N]:
        if not visited[i]:
            visited[i] = True
            cnt += 1
            DFS(ls, i)

N,M = map(int, input().split())

heavys = [[] for _ in range(N+1)]
lights = [[] for _ in range(N+1)]
mid = (N+1) // 2

for i in range(M):  #값 입력후 배열
    a,b=map(int,input().split())
    heavys[b].append(a)
    lights[a].append(b)

answer = 0
for i in range(1, N+1):
    visited = [False] * (N+1)
    cnt = 0
    DFS(heavys, i)
    if cnt >= mid:
        answer += 1
    cnt = 0
    DFS(lights, i)
    if cnt >= mid:
        answer += 1

print(answer)