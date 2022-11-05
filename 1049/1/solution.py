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

if pack_p <= each_p * 6:
    # 팩으로 사는게 6개 낱개보다 저렴
    if N % 6 == 0:
        print(pack_p * (N // 6 ))
    else:
        print(pack_p * (N // 6 + 1))
elif pack_p > each_p * 6:
    # 팩 1개가 6개 낱개로 사는 것보다 비쌈
    print(each_p * N)
else:
    # 나머지는 낱개로 사는게 팩보다 저렴               
    print(pack_p * (N // 6) + each_p * (N % 6))