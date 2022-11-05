from sys import stdin
N,M = map(int, stdin.readline().split())

packs = []
eaches = []
for _ in range(M):
    packprice, eachprice = map(int, stdin.readline().split())
    packs.append(packprice)
    eaches.append(eachprice)

pack_p = min(packs)
each_p = min(eaches)

if pack_p < each_p * 6:
    if pack_p < N % 6 * each_p:
        print(N//6 * pack_p + pack_p)
    else:
        print(N//6 * pack_p + N%6 * each_p)
elif pack_p >= each_p * 6:
    print(N * each_p)

