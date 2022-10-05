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
cur_work = 
score = 0
while dheap:
    cur_work = heapq.heappop(dheap)
    # day = -work[0]
    if not dheap:
        score += cur_work[1]
        break

    next_work  = heapq.heappop(dheap)
    print(-cur_work[0], -next_work[0])


    if -cur_work[0] != -next_work[0]:
        if not score_heap:
            score += cur_work[1]
        else:
            if score_heap[0] < cur_work[1]:
                score += cur_work[1]
            else:
                score += heapq.heappop(score_heap)
                heapq.heappush(score_heap, cur_work[1])
    else:
        if cur_work[1] < next_work[1]:
            score += next_work[1]
            heapq.heappush(score_heap, cur_work[1])
        else:
            score += cur_work[1]
            heapq.heappush(score_heap, next_work[1])

print(score)