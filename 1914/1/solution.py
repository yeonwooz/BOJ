import math 

N = int(input())

def hanoi(n: int, start_bar: int, mid_bar: int, end_bar: int):
    # n: 이번에 옮길 디스크 개수
    if n == 0:
        return

    hanoi(n-1, start_bar, end_bar, mid_bar) # a(n-1)을 1 -> 3이 아니라 1 -> 2 이동(m <-> e)
    print(start_bar, end_bar)
    hanoi(n-1, mid_bar, start_bar, end_bar) # a(n-1)을 1 -> 3이 아니라 2 -> 3 이동(s <-> m)

print(math.floor(math.pow(2, N)) - 1)
# (1 << N) - 1
if N <= 20:
    hanoi(N, 1, 2, 3)