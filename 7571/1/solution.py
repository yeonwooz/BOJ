import sys

from typing import MutableSequence

def q_sort(ls: MutableSequence, left: int, right: int):
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while ls[pl] < pivot:
            pl += 1
        while pivot < ls[pr]:
            pr -= 1

        if pl <= pr:
            # 교차할 때까지 
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
    
    if left < pr: q_sort(ls, left, pr)
    if pl < right: q_sort(ls, pl, right)
    return

def get_min_dist(ls):
    n = len(ls)
    median = 0
    if len(ls) % 2 > 0:
        median = ls[n // 2] 
    else:
        l_med = ls[n // 2 - 1]
        r_med = ls[n // 2]
        median = (l_med + r_med) // 2
    
    distance = 0
    for i in range(len(ls)):
        distance += abs(ls[i] - median)
    return distance


if __name__ == "__main__":
    N, M = map(int, sys.stdin.readline().split())
    # board =[ [0 for _ in range(N)] for _ in range(N)]
    xs = []
    ys = []
    for i in range(M):
        r, c = map(int, sys.stdin.readline().split())
        xs.append(r)
        ys.append(c)

    q_sort(xs, 0, len(xs) - 1)
    q_sort(ys, 0, len(ys) - 1)
    print(get_min_dist(xs) + get_min_dist(ys))