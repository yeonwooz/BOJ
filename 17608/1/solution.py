#started at 11:19
import sys
N = int(sys.stdin.readline())

stack = []
top = -1
for i in range(N):
    h = int(sys.stdin.readline())
    if i == 0 or top == -1:
        stack.append(h)
        top += 1
    else:
        if stack[top] > h:
            stack.append(h)
            top += 1
        else:
            while top >= 0 and stack[top] <= h:   
                stack.pop()
                top -= 1
            stack.append(h)
            top += 1
print(top + 1)
#finished at 11:38