import sys
input = sys.stdin.readline

snum = input().rstrip()
if snum.startswith('0x'):
    print(int(snum, 16))
elif snum.startswith('0'):
    print(int(snum, 8))
else:
    print(int(snum))