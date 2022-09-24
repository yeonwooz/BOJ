import sys

N = int(sys.stdin.readline())

list = []
for i in range(N):
    word = sys.stdin.readline().rstrip()
    list.append(word)

list.sort()
list.sort(key = len)

for i in range(len(list)):
    if i == 0 or list[i-1] != list[i]:
        print(list[i])

