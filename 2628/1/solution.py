width, height = list(map(int, input().split()))
cnt = int(input())
xs = [0]
ys = [0]
for i in range(0, cnt):
    flag, num = list(map(int, input().split()))
    # flag 가 0이면 가로,
    # flag 가 1이면 세로
    if flag == 0:
        ys.append(num)
    else:
        xs.append(num)


ys.sort()
xs.sort()

xs.append(width)
ys.append(height)

max_x_len = xs[0]

for i in range(1, len(xs)):
    if xs[i] - xs[i-1] > max_x_len:
        max_x_len = xs[i] - xs[i-1]

# if width - xs[len(xs) - 1] > max_x_len:
#     max_x_len = width - xs[len(xs) - 1]

max_y_len = ys[0] 

for i in range(1, len(ys)):
    if ys[i] - ys[i-1] > max_y_len:
        max_y_len = ys[i] - ys[i-1]

# if height - ys[len(ys) - 1] > max_y_len:
#     max_y_len = height - ys[len(ys) - 1]

print(max_x_len * max_y_len)