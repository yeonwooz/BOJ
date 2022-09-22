N = int(input())

for i in range(1, N + 1):
    line = ''
    for j in range(0, i):
        line = line + "*"
    print(f"{line}")