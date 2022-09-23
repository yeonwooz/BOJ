def is_hansu(num: int):
    num_str = str(num)
    if (len(num_str) == 1):
        return True
    diff = int(num_str[0]) - int(num_str[1])
    for i in range(1, len(num_str)):
        if (int(num_str[i-1]) - int(num_str[i]) != diff):
            return False
    return True

N = int(input())
cnt = 0
for i in range(1, N + 1):
    if (is_hansu(i)):
        cnt += 1

print(cnt)
