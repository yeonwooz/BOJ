import sys
N = int(sys.stdin.readline())

def selection_sort(ls):
    n = len(ls)
    for i in range(n - 1):
        min = i
        for j in range(i + 1, n):
            if ls[j] < ls[min]:
                min = j
        ls[i], ls[min] = ls[min], ls[i]
    return

if __name__ == "__main__":
    ls = []
    for i in range(N):
        ls.append(int(sys.stdin.readline()))
    selection_sort(ls)
    for num in ls:
        print(num)

