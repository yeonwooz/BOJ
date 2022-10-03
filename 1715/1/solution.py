#started at 7:51
import sys
import heapq

heap = [] # 최소힙
N = int(sys.stdin.readline())

for _ in range(N):
    size = int(sys.stdin.readline())
    heapq.heappush(heap, size)

tmp = 0
sum = 0
cnt = 0
while heap:
    if cnt < 2:
       num = heapq.heappop(heap)
       tmp += num
       sum += num
       cnt += 1
    else:
        sum += tmp
        tmp = 0
        cnt = 0

print(sum)