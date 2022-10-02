#started at 11:48
# 파이썬 큐 : append / pop(0)
# 파이썬 스택 : append / pop()
import sys
N = int(sys.stdin.readline().rstrip())

queue = []
top = 0
bottom = 0

for _ in range(N):
    cmds = list(sys.stdin.readline().split())
    if cmds[0] == 'push':
        queue.append(cmds[1])
        top += 1
    elif cmds[0] == 'pop':
        try:
            print(queue[bottom])
            queue[bottom] = 0
            bottom += 1
        except:
            print(-1)
    elif cmds[0] == 'size':
        print(top - bottom)
    elif cmds[0] == 'empty':
        print(1 if top == bottom else 0)
    elif cmds[0] == 'front':
        if top == bottom:
            print(-1)
        else:
            print(queue[bottom])
    elif cmds[0] == 'back':
        if top == bottom:
            print(-1)
        else:
            print(queue[top-1])
#finished at 11:54 -> 시간초과
#finished at 12:00