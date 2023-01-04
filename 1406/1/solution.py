import sys
from collections import deque

def getInput():
    return sys.stdin.readline().strip()

s =  list(getInput())   # 문장 캐릭터 스택
N = len(s)   # N <= 100,000
cursor = N    # cursor 위치 
M = int(getInput())

stack = deque()  # 커서의 궤적

for i in range(M):
    cmd = getInput()
    if cmd[0] == 'L':
        if s:
            curchar = s.pop()
            stack.append(curchar)
    elif cmd[0] == 'D':
        if stack:
            curchar = stack.pop()
            s.append(curchar)
    elif cmd[0] == 'B':
        if s:
            s.pop()
    elif cmd[0] == 'P':
        newchar = cmd[2]
        s.append(newchar)

while stack:
    s.append(stack.pop())

print(''.join(s))