#started at 8:32
import sys, heapq

N = int(sys.stdin.readline())

# 1. 마감일 최대힙 혹은 내림차순 정렬
dheap = []
for i in range(N):
    d, w = map(int, sys.stdin.readline().split())
    heapq.heappush(dheap, (-d, w))

# 2. 
# if 이번과제 마감일과 다음 과제 마감일이 다를떄:
    # if. 점수 maxheap이 비어있다면 바로 선택
    # elif 점수 maxheap에 값이 있다면 비교후 큰 것 선택

# else (이번 과제 마감일과 다음 과제 마감일이 같을 때): #둘중 큰 점수를 이번에 하고, 
        # 작은 점수는 maxheap에 채워넣음 
    
score_heap = []
max_work = dheap[0]
day_cnt = -max_work[0]
score = 0

while day_cnt > 0:
    while dheap:
        d, w = heapq.heappop(dheap)
        if day_cnt == -d:
            heapq.heappush(score_heap, -w)
        else:
            heapq.heappush(dheap, (d, w))
            break
    if score_heap:
        score += -heapq.heappop(score_heap)
    day_cnt -= 1

print(score)
#finished at 10:20 -> 틀림
# 거꾸로 탐색하는 아이디어는 맞았으나, 구현에서 틀렸다
#https://yiyj1030.tistory.com/233