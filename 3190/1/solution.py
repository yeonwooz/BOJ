#started at 1:35
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


time = 0
posC = 1
posR = 1

vq1 = [{'r':posR, 'c':posC}]
hq1 = []
vq2 = []
h12 = []

for _ in range(K):
    X, C = input().split()
    X = int(X)
    while time <= X:
        if time == X:
            print("it's time!", time)
        else:
            print(time)
        time += 1

