import sys
N, K = list(map(int, sys.stdin.readline().split()))

cnt = 0
sieve = [True] * (N + 1)
sieve[0] = False
sieve[1] = False
def eratos():
    global cnt, sieve
    # 최초에 체에 모든 숫자가 올라가 있다 (True)
    for i in range(2, N + 1):
        # 2부터 N까지의 모든 수에 대해
        if sieve[i] == True:
            # 아직 체에서 걸러지지 않은 수에 대하여(소수 후보)
            for p in range(i, N + 1, i):
                # print('k', K, 'cnt', cnt, 'p', p)
                # 현재 숫자 i의 배수만큼 제거(자기 자신은 제외하는 경우도 있음)
                if sieve[p] == True:
                    sieve[p] = False
                    cnt += 1
                    if cnt == K:
                        return p
    # return [i for i in range(2, N + 1) if sieve[i] == True]
    return -1

if __name__ == "__main__":
    print(eratos())



