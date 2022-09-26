import sys

def eratos(N, sieve):
    for i in range(N + 1): 
        if sieve[i] == True:
            for j in range(i+i, N + 1, i):
                if sieve[j] == True:
                    sieve[j] = False
    answer = []
    for idx in range(len(sieve)):
        if sieve[idx] == True:
            answer.append(idx)
    return answer

def goldbach(N, primes):
    for num in primes:
        if (N - num) in primes:
            return [num, N - num]
    return []

def solve(N):
    sieve = [True] * (N + 1) # 최종적으로 True 인 것들은 소수이다
    sieve[0] = False
    sieve[1] = False
    primes = eratos(N, sieve)
    a, b  = goldbach(N, primes)

    print(f"{a+b} = {a} + {b}")

if __name__ == "__main__":
    while True:
        try: 
            N = int(sys.stdin.readline())
            if N > 0:
                solve(N)
        except:
            break
