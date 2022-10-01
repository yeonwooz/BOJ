#started at 11:06
import sys
K = int(sys.stdin.readline())

stack = []
for _ in range(K):
    called = int(sys.stdin.readline())
    if called == 0:
        stack.pop()
    else:
        stack.append(called)

print(sum(stack))
#finished at 11:11