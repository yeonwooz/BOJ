import sys

max_len = -1e9

def get_mt(N, ls):
    global max_len
    len = 1 # len의 초기값은 1
    for i in range(1, N):
        # print('ls[i-1], ls[i]', ls[i-1], ls[i])
        if ls[i-1] == ls[i]:
            # 이번에 동일할 때 -> len 초기화 
            if max_len < len:
                max_len = len
            len = 1
            # print("동일", len)
        elif ls[i-1] > ls[i]:
            # 이번에 내려갈 때
            len += 1
            # print("내려감", len)
        elif ls[i-1] < ls[i]:
            # 이번에 올라갈 때
            if i - 2 >= 0 and ls[i-2] >= ls[i-1]:
                # 그 직전에 수열이 더 있었고 내려가고 있었거나 동일했나? 
                if max_len < len:
                    max_len = len  
                len = 2
            else:
                # 이번 올라가는 게 처음이거나 계속 올라가고 있었나?
                len += 1
            # print("올라감", len)
        if max_len < len:
            max_len = len
    print(max_len)

def main() :
    N = int(sys.stdin.readline())
    if N == 1:
        return 1
    nums = list(map(int, sys.stdin.readline().split()))
    get_mt(N, nums)

if __name__ == "__main__":
    main()