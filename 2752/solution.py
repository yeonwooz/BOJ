import sys

# insertion sort
def i_sort(ls):
    n = len(ls)
    for i in range(1, n):
        j = i
        tmp = ls[i] # 리스트의 정렬안된 부분 중 맨앞
        while j > 0 and ls[j - 1] > tmp : # 임시로 저장한값보다 앞 원소가 더 커지는 순간까지는 계속 앞으로 인덱스를 이동시킨다
            ls[j] = ls[j - 1]  # 이동하면서 앞 값을 한칸씩 뒤로 민다
            j -= 1
        ls[j] = tmp  # 리스트의 정렬안된 부분 중 맨앞으로 tmp를 이동시킨다
    

if __name__ == "__main__":
    ls = list(map(int, sys.stdin.readline().split()))
    i_sort(ls)
    answer = ' '.join(str(s) for s in ls)
    print(answer)
