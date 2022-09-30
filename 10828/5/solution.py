import sys
N = int(sys.stdin.readline())
stack = []

for _ in range(N):
    cmds = sys.stdin.readline().split()
    if cmds[0] == 'push':
        stack.append(int(cmds[1]))
    elif cmds[0] == 'pop':
        try:
            print(stack.pop())
        except:
            print(-1)
    elif cmds[0] == 'size':
        print(len(stack))
    elif cmds[0] == 'empty':
        print(1 if len(stack) == 0 else 0)
    elif cmds[0] == 'top':
        try:
            print(stack[len(stack) - 1])
        except:
            print(-1)