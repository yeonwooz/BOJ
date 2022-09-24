import sys

sum = 0
Hlist = []
for i in range(9):
    H = int(sys.stdin.readline())
    sum += H
    Hlist.append(H)

outsiders = []
Hlist.sort()
for i in range(len(Hlist)):
    for j in range(len(Hlist)):
        if i != j and sum - (Hlist[i] + Hlist[j]) == 100:
            outsiders.append(i)
            outsiders.append(j)
            break

for i in range(len(Hlist)):
    if i != outsiders[0] and i != outsiders[1]:
        print(Hlist[i])