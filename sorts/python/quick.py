from perf import time
from perf import memory
from typing import MutableSequence

def q_sort(ls: MutableSequence) -> None:
    n = len(ls)
    pl = 0  # 왼쪽포인터
    pr = n - 1  # 오른쪽 포인터
    x = ls[n // 2] #    피벗값
    while pl <= pr:
        # 왼쪽 포인터는 오른쪽 포인터보다 작아야 한다
        while ls[pl] < x:  # TODO ls[pl] <= x 로 이퀄관계 포함시키면 안되는지?
            # 왼쪽포인터값은 피벗값보다 작아야 한다
            # 왼쪽포인터값은 피벗값보다 크다면 정지
            pl += 1
        while ls[pr] > x:
            pr -= 1
        if pl <= pr:
            # 피벗보다 큰 왼쪽값, 피벗보다 작은 오른쪽 값을 만났는데 아직 포인터들이 못만났다면,
            ls[pl], ls[pr] = ls[pr], ls[pl]
            # 서로 스왑
            pl += 1
            pr -= 1
            # 스왑한 결과에 맞게 포인터 이동 

    print("피벗 이하인 그룹")
    print(*ls[0 : pl])
    print(f"\n피벗은 {x}\n")

    if pl > pr + 1:
        print("피벗과 일치하는 그룹")
        print(*ls[pr : pl])
    
    print("피벗 이상인 그룹")
    print(*ls[pr : n])


if __name__ == "__main__":
    ls = [1] * 1000
    for i in range(len(ls)):
        ls[i] *= (len(ls) - i)

    start = time()
    q_sort(ls)
    print(ls)
    end = time()

    # 실행시간
    print(f"time: {end - start:.5f} sec")

    # 메모리 사용량
    print(f"memory usage: {memory: 10.5f} MB")