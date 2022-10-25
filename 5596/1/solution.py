sa = sum(list(map(int, input().split())))
sb = sum(list(map(int, input().split())))
if sa == sb:
    print(sa)
else:
    print(max(sa, sb))