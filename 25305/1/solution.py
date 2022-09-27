import sys
from typing import MutableSequence

def q_sort(ls: MutableSequence, left: 0, right: 0) -> None:
    # 내림차순 정렬
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        # pl이 pr을 지나쳐넘기 전까지 
        while ls[pl] > pivot:
            pl += 1
        while ls[pr] < pivot:
            pr -= 1
        if pl <= pr:
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
    
    # 한번의 탐색을 끝냈는데 만약 아직 정렬할 포인터가 남아있다면
    if left < pr: q_sort(ls, left, pr)
    if pl < right: q_sort(ls, pl, right)

    return

if __name__ == "__main__":
    N, k = list(map(int, sys.stdin.readline().split()))
    scores = list(map(int, sys.stdin.readline().split()))
    q_sort(scores, 0, len(scores) - 1)
    print(scores[k - 1])