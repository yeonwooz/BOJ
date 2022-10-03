#started at 8:33
#https://kspsd.tistory.com/10
import sys
import heapq

people = []
n = int(sys.stdin.readline())
for _ in range(n):
    h, o = map(int, sys.stdin.readline().split()) # house, office
    pos = (min(h, o), max(h, o))
    # heapq.heappush(people, pos)
    people.append(pos)
d = int(sys.stdin.readline())

people.sort(key=lambda d:d[1])
# people.sort(key=lambda x: (x[1], x[0]))
# y좌표 기준으로 소트하는 이유는, 차례대로 있는 end에 대해 start를 힙으로 관리하고 싶기 때문

start_heap = []
max_cnt = 0
for i in range(n):
    # 사람들의 포지션들에 대하여,
    start = people[i][0]
    end = people[i][1]

    if end - start <= d:
        heapq.heappush(start_heap, start)
        # d안에 두 점 모두 존재한다면 시작점을 힙에 넣는다
    else:
        continue

    while len(start_heap) > 0:
        tmp = start_heap[0]
        # 힙 가장 앞에있는 원소(가장 빠른 시작지점)
        if end - tmp <= d:
            # 두 점이 모두 d안에 들어온다면
            break
        else:
            # 두점이 d 안에 존재할 수 없다면
            heapq.heappop(start_heap)

    max_cnt = max(max_cnt, len(start_heap))   
print(max_cnt)
#finished at 9:00 -> 시간초과