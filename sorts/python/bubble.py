import time

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

    print(f"{end - start:.5f} sec")

