import sys
N = int(sys.stdin.readline())

def selection_sort(ls):
    n = len(ls)
    for i in range(n - 1): # i는 오른쪽에 값이 있는 동안만 순회한다 (0 ~ n-1). i는 최솟값이 위치할 자리이다. 다른값이 있다면 최솟값과 교체해야 한다
        min = i
        print(f"i가 {i}일 때")
        for j in range(i + 1, n):   # j는 i의 오른쪽부터 시작하여 n까지 순회하며 현재까지 갱신된 최솟값보다 더 작은 값인지 체크한다. 더 작다면, 이 배열의 최소값의 위치(min)는 j가 된다
            print(j)
            print(f"[min]={ls[min]}", f"[i]={ls[i]}", f"[j]={ls[j]}", ls)
            if ls[j] < ls[min]:
                min = j
        print(f"[{i}], [{min}] 교체\n")
        ls[i], ls[min] = ls[min], ls[i]   # 현재 단계에서 찾은 최솟값(ls[min])을 최소값이 위치할 맨왼쪽 자리(i)로 보낸다.
    return

if __name__ == "__main__":
    ls = []
    for i in range(N):
        ls.append(int(sys.stdin.readline()))
    selection_sort(ls)
    for num in ls:
        print(num)

