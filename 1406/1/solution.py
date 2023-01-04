import sys
from collections import deque

def getInput():
    return sys.stdin.readline().strip()

s = getInput()
N = len(s)   # N <= 100,000
cursor = N    # cursor 위치 
idx = N     # string의 idx까지 stack에 담겼을 때 idx값
M = int(getInput())

stack = deque()

newchar = None
for i in range(M):
    cmd = getInput()
    print(stack)
    print('idx', idx, 'cursor', cursor, 'newChar', newchar)
    if cmd[0] == 'L':
        if idx == 0:
            continue
        if cursor <= idx:
            if newchar:
                stack.appendleft(newchar)
                newchar = None
            else:
                stack.appendleft(s[cursor-1])
            idx -= 1
        cursor -= 1
    elif cmd[0] == 'D':
        if idx >= N + 1:
            continue
        if cursor <= idx:
            if newchar:
                stack.appendleft(newchar)
                newchar = None
            else:
                stack.appendleft(s[cursor-1])
            idx -= 1
        cursor += 1
    elif cmd[0] == 'B':
        if idx == 0:
            continue
        idx -= 1
        cursor -= 1
    elif cmd[0] == 'P':

        cursor += 1
        idx += 1
        newchar = cmd[2]
        stack.appendleft(newchar)



# 나머지 담기
while idx > 0:
    stack.appendleft(s[idx-1])
    idx -= 1

print(stack)