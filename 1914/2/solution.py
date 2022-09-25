import sys
N = int(sys.stdin.readline().strip())

answer = ""
def Hanoi(disc_cnt, start, mid, end):
    global answer
    if disc_cnt == 1:
        if N <= 20:
            answer += str(start) + " " + str(end) + "\n"
        return 1

    move = Hanoi(disc_cnt - 1, start, end, mid)
    move += 1
    if N <= 20:
        answer += str(start) + " " + str(end) + "\n"
    move += Hanoi(disc_cnt - 1, mid, start, end)
    return move

print(Hanoi(N, 1, 2, 3))
if N <= 20:
    print(answer)