import sys

def input():
    return sys.stdin.readline().rstrip()

alen, blen = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

d = dict()
for el in A:
    d[el] = 1

answer = 0
# print(10 in d)
for el in B:
    if el not in d:
        answer += 1
    else:
        d[el] = 0

for key, value in d.items():
    if value == 1:
        answer += 1

print(answer)