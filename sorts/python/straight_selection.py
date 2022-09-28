import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(sys.path)

from py_module.perf import time
from py_module.perf import memory

from typing import MutableSequence

# 단순 선택 정렬 : 가장 작은 원소부터 알맞은 위치로 옮긴다 
def ss_sort(ls: MutableSequence) -> None:
    n = len(ls)
    for i in range(n - 1):
        min = i
        for j in range(i + 1, n):
            if ls[j] < ls[min]:
                min = j
        ls[i], ls[min] = ls[min], ls[i]

    return ls

if __name__ == "__main__":
    ls = [1] * 1000
    for i in range(len(ls)):
        ls[i] *= (len(ls) - i)

    start = time()
    sorted = ss_sort(ls)
    print(ls)
    end = time()

    # 실행시간
    print(f"time: {end - start:.5f} sec")

    # 메모리 사용량
    print(f"memory usage: {memory: 10.5f} MB")
