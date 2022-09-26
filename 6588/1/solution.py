import sys

def eratos(N, sieve):
    for i in range(N + 1): 
        if sieve[i] == True:
            for j in range(i+i, N + 1, i):
                if sieve[j] == True:
                    sieve[j] = False
    return sieve

def goldbach(N, primes):
    for i in range(len(primes)):
        if primes[i] == True and primes[N - i] == True:
            return [i, N - i]
    return []

def solve(N, primes):
    a, b  = goldbach(N, primes)
    print(f"{a+b} = {a} + {b}")

if __name__ == "__main__":
    sieve = [True] * (1000000 + 1) # 최종적으로 True 인 것들은 소수이다
    sieve[0] = False
    sieve[1] = False
    primes = eratos(1000000, sieve)
    while True:
        try: 
            N = int(sys.stdin.readline())
            if N > 0:
                solve(N, primes)
        except:
            break
