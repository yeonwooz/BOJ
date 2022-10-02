#started at 1:33
import sys

N = int(sys.stdin.readline())

queue = []
top = 2 * N + 1
bottom = N + 1

for i in range(top):
    if i < bottom:
        queue.append(0)
    else:
        queue.append(top - i)

cnt = 1
while top > bottom:
    top -= 1
    if cnt % 2 == 0:
        bottom -= 1
        queue[bottom] = queue[top]
        queue[top] = 0
    cnt += 1

print(queue[bottom])
#finished at 1:57