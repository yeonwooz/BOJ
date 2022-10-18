# https://velog.io/@piopiop/%EB%B0%B1%EC%A4%80-1202-%EB%B3%B4%EC%84%9D-%EB%8F%84%EB%91%91-Python
import sys
from heapq import heappop, heappush

n,k = map(int, sys.stdin.readline().split())
stones = []
for _ in range(n):
    heappush(stones, list(map(int, sys.stdin.readline().split())))
    # 보석들의 무게를 최소힙(우선순위 큐)에 넣는다 

bags = []
for _ in range(k):
    bags.append(int(sys.stdin.readline()))
bags.sort()
# 가방에 담을 수 있는 최대 무게를 작은 것부터 정렬 

answer = 0
values = []  # 보석의 가치를 담아둘 우선순위큐

for bag in bags:
    # 각 가방에 대해
    while stones and bag >= stones[0][0]:
        # 담을 보석이 아직 남아있고, 가장 가벼운 보석이 가방의 최대무게 이하인 동안 (담는다)
        heappush(values, -heappop(stones)[1])
        # 보석의 가치는 큰것부터 담는다 
    if values:
        answer -= heappop(values) # 음수로 넣었기 때문에 음수를 취해줌
    elif not stones:
        # 가치 힙도 없고 무게 힙도 없을 때
        break
print(answer)
