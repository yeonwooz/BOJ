#started at 4:50
import sys
from collections import deque
# 1 2 3 4 =? min(2,3)
# 1 3 2 =? 2  ( 크기 대소비교 후 중간값)

N = int(sys.stdin.readline())

prq = deque() # 최소힙
prq.append(0)
idx = 0 # 마지막 원소 인덱스 (현재 비어있음)

for i in range(N):
    num = int(sys.stdin.readline())
    prq.append(num)
    idx += 1
    # 힙 정렬
    last = idx
    # print("====last", last)
    while last >= 2:
        if idx % 2 > 0:
            # 양쪽 자식 대소 비교
            if prq[last] < prq[last - 1]:
                prq[last], prq[last - 1] = prq[last - 1], prq[last]
                last = last - 1
        
        if last >= 2 and prq[last // 2] > prq[last]:
            prq[last // 2], prq[last] = prq[last], prq[last // 2]
            last = last // 2
            continue
        break

    # 중간값 
    print(prq, idx)
    if idx % 2 == 0:
        print(prq[idx // 2])
    else:
        print(prq[idx // 2 + 1])
