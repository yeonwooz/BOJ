import sys
from typing import MutableSequence

def merge_sort(ls: MutableSequence, left: int, right: int) -> None:
    if left < right:
        center = (left + right) // 2

        merge_sort(ls, left, center) # 배열 앞부분을 병합정렬
        merge_sort(ls, center + 1, right) # 배열 뒷부분을 병합정렬

        p = j = 0
        i = k = left

        while i <= center:
            buff[p] = ls[i]
            p += 1
            i += 1
        
        while i <= right and j < p:
            if buff[j] <= ls[i]:
                ls[k] = buff[j]
                j += 1
            else:
                ls[k] = ls[i]
                i += 1
            k += 1
        
        while j < p:
            ls[k] = buff[j]
            k += 1
            j += 1


if __name__ == "__main__":
    N = int(sys.stdin.readline())
    ls = []
    for s in sys.stdin.readlines():
        ls.append(int(s.rstrip()))

    n = len(ls)
    buff = [None] * n   # 정렬된 결과를 담을 추가 배열 생성
    merge_sort(ls, 0, n - 1) # 배열 전체 병합정렬
    del buff # 작업용 배열 소멸
    print("\n".join(str(s) for s in ls))
