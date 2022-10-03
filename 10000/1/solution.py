#started at 10:59
#원은 교차하지 않는다. 문제 똑바로 읽기!
N = int(input())
circles = []
for _ in range(N):
    x,r = map(int, input().split())
    circles.append({'x':x,'r':r})

circles.sort(key=lambda d:d['x'])
