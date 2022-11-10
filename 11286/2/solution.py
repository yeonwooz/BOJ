#started at 11:05
from heapq import heappush, heappop
from sys import stdin

n = int(stdin.readline())

heap = []

for _ in range(n):
    x = int(stdin.readline())
    if x:
        heappush(heap, (abs(x), x))
    else:
        # x가 0일 때 => 절댓값이 가장 작은 값을 출력한다. 그게 여러개라면 가장 작은 수를 출력하고 힙에서 제거한다
        if heap:
            popped = heappop(heap)
            print(popped[1])    
        else:
            print(0)

#finished at 11:24