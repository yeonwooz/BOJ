import sys
import math
N = int(sys.stdin.readline().strip())

answer = ""
def print_Hanoi(disc_cnt, start, mid, end):
    global answer
    if disc_cnt == 1:
        print(start, end)
        return 1

    move = print_Hanoi(disc_cnt - 1, start, end, mid)
    print(start, end)
    move += 1
    move += print_Hanoi(disc_cnt - 1, mid, start, end)
    return move

print(math.floor(math.pow(2, N))- 1)
if N <= 20:
    print_Hanoi(N,1,2,3)