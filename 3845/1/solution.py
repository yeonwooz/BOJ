# 3845 잔디깎기
# float에 익숙해지기
# 시작시간 8:59

import sys

def q_sort(ls, left, right):
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while ls[pl] < pivot:
            pl += 1
        while pivot < ls[pr]:
            pr -= 1
        if pl <= pr:
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
        
    if left < pr : q_sort(ls, left, pr)
    if pl < right : q_sort(ls, pl, right)

def solve(nx, ny, w, xs, ys):
    q_sort(xs, 0, nx - 1)
    q_sort(ys, 0, ny - 1)
    # print(w, xs, ys)
    cur = xs[0] - w // 2
    if (cur > 0):
        return False
    for i in range(nx):
        cur += w
        print('cur=', cur, 'xs[i]=', xs[i])
        if cur < xs[i]:
            return False
    if cur < 75:
        return False

    cur = ys[0] - w // 2
    if (cur > 0):
        return False
    for i in range(ny):
        cur += w
        # print('cur=', cur, 'ys[i]=', ys[i])
        if cur < ys[i]:
            return False
    if cur < 100:
        return False
    return True


if __name__ == "__main__":
    while True:
        nx, ny, w = map(float, sys.stdin.readline().split())
        if nx == 0 and ny == 0 and w == 0:
            break
        xs = list(map(float, sys.stdin.readline().split()))
        ys = list(map(float, sys.stdin.readline().split()))
        print('YES' if solve(int(nx), int(ny), w, xs, ys) else 'NO')
        

