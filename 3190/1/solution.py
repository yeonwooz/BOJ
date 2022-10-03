#started at 1:05
#상하좌우 큐를 만들자
N = int(input())
K = int(input())
apples = []
for _ in range(K):
    r,c = map(int, input().split())
    apples.append({'r':r, 'c':c})

apples.sort(key=lambda d:d['c'])

cd = int(input())
cmds = []

vq1 = [[1,1]]
hq1 = []
vq2 = []
h12 = []

time = 0
posC = 1
posR = 1
for _ in range(K):
    X, C = map(int, input().split())
    while time < X:
        if apples[0]['r'] == posR and apples[0]['c'] == posC:
            vq1.pop(0)
        posC += 1
        time += 1
    if time == X:
        if C == 'D':
            if vq1
        elif C =='L':
