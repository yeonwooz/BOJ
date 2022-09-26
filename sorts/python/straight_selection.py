from perf import time
from perf import memory

def ss_sort(ls):
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
