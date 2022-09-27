# 퀵정렬
import sys
from typing import MutableSequence

def q_sort(ls : MutableSequence, left: int, right: int) -> None:
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        # 포인터 두개가 만날 때까지
        while ls[pl] < pivot:
            pl += 1
        while ls[pr] > pivot:
            pr -= 1

        if pl <= pr:
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
    if left < pr: q_sort(ls, left, pr)
    if pl < right: q_sort(ls, pl, right)

def get_final_score(ls: MutableSequence) -> None:
    ls.pop(0)
    ls.pop()
    n = len(ls)
    flag = ls[n - 1] - ls[0]
    if flag < 4:
        sum = 0
        for num in ls:
            sum += num
        return sum
    return "KIN"

if __name__ == "__main__":
    T = int(sys.stdin.readline())
    for i in range(T):
        scores = list(map(int, sys.stdin.readline().split()))
        q_sort(scores, 0, len(scores) - 1)
        print(get_final_score(scores))