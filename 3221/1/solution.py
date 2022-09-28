# 3221 개미의 이동
import sys
import copy

# TODO: 개미의 순서 왜 안바뀌는지 이해하기 (서로 부딪히는 경우에 대한 고려 필요X)

# L기준으로 방향을 바꾸고 나서 현 시점의 개미의 정렬을 확인

def q_sort(ls, left, right):
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while ls[pl] < pivot: pl += 1 # 둘이 같기만 해도 멈춤
        while ls[pr] > pivot: pr -= 1 
        if pl <= pr:
            # 어긋날때까지
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
        if pl < right : q_sort(ls, pl, right)
        if left < pr : q_sort(ls, left, pr)


def move(N, T, ants, L):
    answer = []
    for init_pos, toward in ants:
        if toward == 'D':
            # 오른쪽으로 이동
            next_pos = init_pos + T
            if next_pos < L:
                answer.append(next_pos)
            else:
                if (next_pos // L) % 2 ==  1:
                    # 다음 위치까지 이동하는동안 L을 홀수번 지난경우
                    answer.append(L - next_pos % L)
                else:
                    answer.append(next_pos % L)
        else:
            # 왼쪽으로 이동
            next_pos = T + (L - init_pos) # 최초포지션을 오른쪽으로 세면 L - init_pos이고, 거기에서 T만큼 (왼쪽)으로 이동
            
            if next_pos < L:
                answer.append(L - next_pos)
            else:
                if (next_pos // L) % 2 == 1:
                    answer.append(next_pos % L)
                else:
                    answer.append(L - next_pos % L)
    # 나머지연산 하는 이유: L만큼 이동하고 더 가는 거리 구하기 위함 
    answer.sort()
    print(" ".join(str(s) for s in answer))

if __name__ == "__main__":
    L, T = map(int, sys.stdin.readline().split())
    # L은 끝점
    # T초 후에 각 개미의 위치는?
    N = int(sys.stdin.readline().rstrip())
    ants = []
    for _ in range(N):
        pos, toward = sys.stdin.readline().split()
        ants.append([int(pos), toward])
    move(N, T, ants, L)

# https://recordofwonseok.tistory.com/412
