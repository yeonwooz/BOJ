import sys

def input(): 
    return sys.stdin.readline().rstrip()

n = int(input())
s = input()

slen = len(s)
if slen == 0:
    print(0)
    exit()

total = 0
hnum = 0
for i in range(slen):
    if s[i].isdigit() == True :
        hnum = hnum * 10 + int(s[i])
    if i == slen - 1 or s[i].isalpha() == True :
        if hnum > 0:
            total = total + hnum
        hnum = 0

print(total)