import sys
N = int(sys.stdin.readline())
stack = [None] * N
ptr = -1

for _ in range(N):
    cmds = sys.stdin.readline().split()
    if cmds[0] == 'push':
        ptr += 1
        stack[ptr] = int(cmds[1])
    elif cmds[0] == 'pop':
        if ptr == -1:
            print(-1)
        else:
            print(stack[ptr])
            ptr -= 1
    elif cmds[0] == 'size':
        print(ptr + 1)
    elif cmds[0] == 'empty':
        print(1 if ptr == -1 else 0)
    elif cmds[0] == 'top':
        print(stack[ptr] if ptr >= 0 else -1)