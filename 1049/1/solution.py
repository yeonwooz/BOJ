from sys import stdin
N,M = map(int, stdin.readline().split())

packs = []
eaches = []
for _ in range(M):
    packprice, eachprice = map(int, stdin.readline().split())
    # cash = N // 6 * packprice + N % 6 * eachprice
    packs.append(packprice)
    eaches.append(eachprice)

min_pack_price = min(packs)
min_each_price = min(eaches)



