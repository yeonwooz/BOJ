import sys

def converge(n, dots):
    min_distance = 1e9
    for i in range(n):
        for j in range(n):
            distance = 0
            for idx in range(len(dots)):
                distance += abs(dots[idx][0] - i) + abs(dots[idx][1] - j)
            min_distance = min(min_distance, distance)
    print(min_distance)

if __name__ == "__main__":
    N, M = map(int, sys.stdin.readline().split())
    # board =[ [0 for _ in range(N)] for _ in range(N)]
    dots = []
    for i in range(M):
        r, c = map(int, sys.stdin.readline().split())
        # board[r-1][c-1] = 1
        dots.append([r-1, c-1])

    converge(N, dots)

