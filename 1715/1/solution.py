#started at 7:51
#https://claude-u.tistory.com/341
import sys
import heapq

heap = [] # 최소힙
N = int(sys.stdin.readline())

for _ in range(N):
    size = int(sys.stdin.readline())
    heapq.heappush(heap, size)

if len(heap) == 1:
    print(0)
else:
    sum = 0
    while len(heap) > 1:
        tmp1 = heapq.heappop(heap)
        tmp2 = heapq.heappop(heap)
        sum += tmp1 + tmp2
        heapq.heappush(heap, tmp1 + tmp2)
    print(sum)