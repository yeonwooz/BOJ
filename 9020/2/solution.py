import sys

def eratos(N, sieve):
    for i in range(N + 1): 
        if sieve[i] == True:
            for j in range(i+i, N + 1, i):
                if sieve[j] == True:
                    sieve[j] = False
    return sieve

def goldbach(N, primes):
    half = N // 2
    if primes[half] ==  True and half * 2 == N:
        return [half, half]
    else:
        for i in range(half, 0, -1):
            if primes[i] == True and primes[N - i] == True:
                return [i, N - i]
    return []

def solve(N, primes):
    a, b  = goldbach(N, primes)
    print(f"{a} {b}")
    return

if __name__ == "__main__":
    sieve = [True] * (10000 + 1) # 최종적으로 True 인 것들은 소수이다
    sieve[0] = False
    sieve[1] = False
    primes = eratos(10000, sieve)
    
    T = int(sys.stdin.readline())

    for i in range(0, T):
        n = int(sys.stdin.readline())
        solve(n, primes)
        