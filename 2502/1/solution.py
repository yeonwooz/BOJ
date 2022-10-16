import sys
D, K = map(int, sys.stdin.readline().split())

# # MAX = K
# # dduks = [MAX] * (D+1)
# dduks = [0] * (D+1)

# # print(dduks)
# # for i in range()

# FIBO = [0,1,1]

# for i in range(3, D+1):
#     FIBO.append(FIBO[i-2] + FIBO[i-1])

# print(FIBO)

# # x
# # y
# FIBO[D-3] * y + FIBO[D-2] *(x+y) = 41

MAX = K
dduks = [MAX] * (D+1)

yesterday = MAX
while True:
    if dduks[1] > 0 and dduks[1] <= dduks[2] and dduks[1] + dduks[2] == dduks[3]: 
        break
    dduks[D-1] = yesterday
    for i in range(D-2, -1, -1):
        dduks[i] = dduks[i+2] - dduks[i+1]
        if dduks[i] < 0:
            break

    yesterday -= 1

print(dduks[1])
print(dduks[2])
