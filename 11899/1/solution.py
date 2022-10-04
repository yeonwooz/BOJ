#started at 10:55
import sys
from collections import deque
stack = deque(sys.stdin.readline().rstrip())

wrong = []
while len(stack) > 0:
    popped = stack.popleft()
    if popped == ')':
        if len(wrong) > 0 and wrong[-1] == '(':
            wrong.pop()
        else:
            wrong.append(popped)
    else:
        # popped = '('
        wrong.append(popped)


print(len(wrong))
# finished 11:36 -> rstrip잊지말자