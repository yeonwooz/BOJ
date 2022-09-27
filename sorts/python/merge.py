from perf import time
from perf import memory
from typing import Sequence, MutableSequence

def m_sort(a: Sequence, b: Sequence, c: MutableSequence) -> None:
    # 정렬을 마친 배열 a와 b를 병합하여 c에 저장
    pa, pb, pc = 0, 0, 0    # 각 배열의 커서
    na, nb, nc = len(a), len(b), len(c) # 각 배열의 원소 수

    while pa < na and pb < nb:
        # pa 와 pb를 비교해서 작은 값을 pc에 저장하고 해당 배열(a또는 b)과 배열 c의 커서 한칸 이동
        # c배열이라는 추가 메모리가 필요함
        if a[pa] < b[pb]:
            c[pc] = a[pa]
            pa += 1
        else:
            c[pc] = b[pb]
            pb += 1
        pc += 1
    
    while pa < na:
        # a에 남은 원소를 c에 복사
        c[pc] = a[pa]
        pa += 1
        pc += 1

    while pb < nb:
        # b에 남은 원소를 c에 복사
        c[pc] = b[pb]
        pb += 1
        pc += 1

if __name__ == "__main__":
    # 정렬을 이미 마친 두 배열의 병합
    a = [2, 4, 6, 8, 11, 13]
    b = [1, 2, 3, 4, 9, 16, 21]
    c = [None] * (len(a) + len(b))

    start = time()
    m_sort(a, b, c)
    print(c)
    end = time()

    # 실행시간
    print(f"time: {end - start:.5f} sec")

    # 메모리 사용량
    print(f"memory usage: {memory: 10.5f} MB")