import sys

def i_sort(ls):
    # 내림차순 정렬
    n = len(ls)
    for i in range(1, n):
        current_front_value = ls[i]
        j = i
        while j > 0 and current_front_value > ls[j-1]:
            ls[j] = ls[j - 1]
            j -= 1
        ls[j] = current_front_value
    return

def get_score(ls):
    return ls[0] + ls[1] + ls[2]

if __name__ == "__main__":
    ws = []
    ks = []
    for i in range(10):
        ws.append(int(sys.stdin.readline()))
    for i in range(10):
        ks.append(int(sys.stdin.readline()))

    i_sort(ws)
    i_sort(ks)
    print(get_score(ws), get_score(ks))
