import time
import psutil

def b_sort(list):
    n = len(list)
    for i in range(0, n):
        for j in range(n-1, i, -1): # 역순 탐색하려면 음수 간격을 지정 
            if list[i] > list[j]:
                list[i], list[j] = list[j], list[i]

if __name__ == "__main__":
    ls = [1] * 1000
    for i in range(len(ls)):
        ls[i] *= (len(ls) - i)

    start = time.time()
    sorted = b_sort(ls)
    print(ls)
    end = time.time()

    # 실행시간
    print(f"time: {end - start:.5f} sec")

    # 메모리 사용량
    p = psutil.Process()
    rss = p.memory_info().rss / 2 ** 20 # Bytes to MB
    print(f"memory usage: {rss: 10.5f} MB")

    # 메모리 사용량 코드 참고 : https://jybaek.tistory.com/895