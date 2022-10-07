#https://slllju.tistory.com/76
import sys, heapq

# 높이는 우선순위 큐로 관리한다 (끝점과 함께)
# 끝점도 리스트로 관리한다 
# 탐색이 끝나는 건물들의 끝점을 set으로 관리한다

n = int(sys.stdin.readline())
arr = []            # 건물정보 리스트
height = [0] * n    # 건물 높이 리스트
q = []              # 높이 최대힙

end = [0] * n # 건물 끝점 리스트
check = set() 
for i in range(n):
    l, h, r = map(int, sys.stdin.readline().split())
    # print(i, h)
    arr.append((l, i, 1))       # 시작점좌표, 인덱스, 시작점플래그
    arr.append((r, i, -1))      # 끝점좌표, 인덱스, 끝점플래그
    height[i] = h               # 높이 리스트 기록
    end[i] = r                  # 끝점 리스트 기록

arr.sort(key = lambda x: (x[0], -x[2], -height[x[1]]))   
# print(arr)
'''
시작점기준 정렬, 
시작점이 같다면 내림차순 정렬을 통해 시작점이 먼저 오고 끝점이 그다음에 오도록 정렬, 
시작 끝 여부가 같다면 높이가 내림차순이 되도록 인덱스 정렬
'''

now_height = 0
answer = []

for i in range(len(arr)):
    point, idx, dir = arr[i]

    if dir == 1:
        # point가 건물 시작점일 때
        if now_height < height[idx]:
            now_height = height[idx]
            answer.append((point, now_height))
        heapq.heappush(q, (-height[idx], end[idx]))

    else:
        # point가 건물 끝점일 때
        check.add(point)
        while q:
            # 높이 큐에 높이가 있을 때(스카이라인 그릴 수 있음)
            if q[0][1] not in check: # 최대높이 건물의 끝점(힙의 맨앞원소의 두번째 원소) 이 check 집합에 없으면, queue 상의 제일 높은 건물이 아직 안끝난 것이므로 지금 그리고 있는 스카이라인을 이어서 그려야 함
                break
            
            # 최대높이 건물이 끝났다면(check set에 존재한다면) 힙에서 제거
            heapq.heappop(q)
        
        if not q:
            # 높이 큐에 높이가 없을 때, 스카이라인이 종료되고 높이는 0이 된다 
            if now_height:
                now_height = 0
                answer.append((point, now_height))
        else:
            if -q[0][0] != now_height:
                # 높이 큐에 높이가 있을 때, q의 맨 앞의 최대높이가 현재높이가 아니라면 스카이라인을 이어서 그리되 높이가 달라져야 한다 
                    now_height = -q[0][0]
                    # 현재높이를 교체
                    answer.append((point, now_height))
    
for i in answer:
    print(i[0], i[1], end=' ')