#started at 4:50
#https://hongcoding.tistory.com/93
import sys
import heapq
# 1 2 3 4 =? min(2,3)
# 1 3 2 =? 2  ( 크기 대소비교 후 중간값)

N = int(sys.stdin.readline())

lheap = [] # 최대힙 (절대값이 큰 값들)
rheap = [] # 최소힙. (rheap의 원소는 lheap의 원소보다 절대값이 작게 유지)

# heapq는 heap은 기본적으로 최소힙이다.
# 최대힙을 만들려면 (우선순위, 값) 형식의 튜플을 삽입하고 값을 읽을 때는 인덱스1을 읽어온다.
# https://www.daleseo.com/python-heapq/

for i in range(N):
    num = int(sys.stdin.readline())
    # 번갈아 넣으면서 중간값이 lheap에 들어가도록 한다.
    if len(lheap) == len(rheap):
        # 길이가 같다면 lheap에 넣되, 음수로 넣는다. 새로 추가된 값을 rheap의 최소값과 비교해서 작으면 중간값이다. 
        heapq.heappush(lheap, -num)
    else:
        # 길이가 다르다면 rheap에 넣는다. 새로 추가된 값과 lheap의 가장 앞에 있는 값의 절댓값과 비교해서 작으면 중간값이다.
        heapq.heappush(rheap, num)
    
    if rheap and rheap[0] < -lheap[0]:
        # rheap에 값이 있고, rheap의 최소값이 만약에 lheap의 가장 앞에 있는 최대값(최소값 * -1 = 최대)보다 작다면, 

        lvalue = heapq.heappop(lheap) # 
        rvalue= heapq.heappop(rheap) # 
        # 두 힙의 가장 앞에 있는 값을 뺀 후에

        heapq.heappush(lheap, -rvalue) 
        heapq.heappush(rheap, -lvalue)
        # 두 힙에 바꿔서 넣어준다. 
        
    print(-lheap[0])
