#started at 2:43
# https://vitriol95.github.io/posts/polygon_area/
# 신발끈 정리 
import sys

x,y = [],[]

N = int(sys.stdin.readline())
for _ in range(N):
    a,b =  map(int, sys.stdin.readline().split())
    x.append(a)
    y.append(b)

x = x + [x[0]]
y = y + [y[0]]

answer = 0
for i in range(N):
    answer += (x[i] * y[i+1]) - (x[i+1] * y[i])
print(round(abs(answer) / 2, 1))