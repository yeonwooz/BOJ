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

score = 0
prev_work = heapq.heappop(dheap)
day_cnt = -prev_work[0]

if not dheap:
    score += prev_work[1]

while dheap:
    cur_work = heapq.heappop(dheap)

    print(f"{-prev_work[0]}일 후 마감 {prev_work[1]}점, {-cur_work[0]}일 후 마감, {cur_work[1]}점")

    if -prev_work[0] != -cur_work[0]:
        print(1111, "another dday")
        # 두과제 마감일이 다름.
        if not score_heap:
            # 추가할 점수 후보 없음
            score += prev_work[1]
        else:
            # 추가할 점수 후보 있음. 대소비교 필요
            if score_heap[0] < prev_work[1]:
                score += prev_work[1]
            else:
                score += heapq.heappop(score_heap)
                heapq.heappush(score_heap, prev_work[1])
    else:
        print(2222, "same dday")
        # 두과제 마감일이 같음.
        if prev_work[1] > cur_work[1]:
            # 이전 과제가 점수 더 높음
            heapq.heappush(score_heap, cur_work[1])
            if score_heap[0] > prev_work[1]:
                #추가할 점수후보보다 이전 과제 점수가 낮음
                score += heapq.heappop(score_heap)
                heapq.heappush(score_heap, prev_work[1])
            else:
                score += prev_work[1]
        else:
            # 이번 과제가 점수 더 높음
            heapq.heappush(score_heap, prev_work[1])

            if score_heap[0] > cur_work[1]:
                #추가할 점수후보보다 이번 과제 점수가 낮음
                score += heapq.heappop(score_heap)
                heapq.heappush(score_heap, cur_work[1])
            else:
                #추가할 점수후보보다도 이번 과제 점수가 더 높음
                score += cur_work[1]


            # score += cur_work[1]
            # heapq.heappush(score_heap, prev_work[1])
    
    print("score", score, 'score_heap', score_heap, 'day_cnt', day_cnt)
    prev_work = cur_work

print(score)