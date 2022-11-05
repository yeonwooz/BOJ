from sys import stdin
N,M = map(int, stdin.readline().split())

cashes = []
for _ in range(M):
    packprice, eachprice = map(int, stdin.readline().split())
    cash1 = N // 6 * packprice + N % 6 * eachprice
    cash2 = (N // 6 + 1) * packprice
    cashes.append(min(cash1, cash2))

print(min(cashes))
