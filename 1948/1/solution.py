#started at 1:33
#1948 임계경로
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
times = [[0] * (n+1) for _ in range(n+1)]
for i in range(3, m+3):
    a,b,c = map(int, input().split())
    graph[a].append(b)
    times[a][b] = c

start, end = map(int, input().split())
print(times)