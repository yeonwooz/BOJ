from sys import stdin
N,M = map(int, stdin.readline().split())

packs = []
eaches = []
for _ in range(M):
    packprice, eachprice = map(int, stdin.readline().split())
    packs.append(packprice)
    eaches.append(eachprice)

min_pack_price = min(packs)
min_each_price = min(eaches)

cash = (N // 6 * min_pack_price) + (N % 6 * min_each_price)
if (N % 6 != 0):
    cash = min(cash,  (N // 6 + 1) * min_pack_price)
print(cash)