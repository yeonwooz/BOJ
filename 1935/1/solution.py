#started at 11:47
import sys
from collections import deque
N = int(sys.stdin.readline())
cmds = deque(sys.stdin.readline().strip())
nums = deque()
for _ in range(N):
    nums.append(int(sys.stdin.readline()))

while cmds:
    popped = cmds.pop()
    num = ord(popped) - 64
    if num >= 1 and num <= 26:
        print(num)
    else:
        print(popped)



print(N, cmds, nums)