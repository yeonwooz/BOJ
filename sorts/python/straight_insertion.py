import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(sys.path)

from py_module.perf import time
from py_module.perf import memory

from typing import MutableSequence

# 단순 삽입 정렬 : 현재 위치보다 더 앞쪽의 원소들을 알맞은 위치로 이동
def si_sort(ls: MutableSequence) -> None:
    n = len(ls)
    for i in range(1, n):
        j = i
        tmp = ls[i]
        while j > 0 and ls[j - 1] > tmp:
            ls[j] = ls[j - 1]
            j -= 1
        ls[j] = tmp

if __name__ == "__main__":
    ls = [1] * 1000
    for i in range(len(ls)):
        ls[i] *= (len(ls) - i)

    start = time()
    si_sort(ls)
    print(ls)
    end = time()

    # 실행시간
    print(f"time: {end - start:.5f} sec")

    # 메모리 사용량
    print(f"memory usage: {memory: 10.5f} MB")
