import sys
N = int(sys.stdin.readline())
# 시간 더 빠르게
# 중복 제거 
list = []
for i in range(N):
    word = sys.stdin.readline().rstrip()
    list.append(word)

n = len(list)
for i in range(n - 1):
    for j in range(n - 1, i, -1):
        if len(list[j - 1]) > len(list[j]):
            list[j - 1], list[j] = list[j], list[j - 1]
        elif len(list[j - 1]) == len(list[j]):
            templist = [list[j - 1], list[j]]
            templist.sort()
            list[j - 1], list[j] = templist
for word in list:
    print(word)
