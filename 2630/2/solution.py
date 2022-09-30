# started at 9:14
import sys

WHITE = 0 # 흰색 동질적 구간 개수 / 흰색은 0
BLUE = 0 # 파랑 동질적 구간 개수 / 파랑은 1

def all_same(matrix, start_row, start_col, side_len):
    color = matrix[int(start_row)][int(start_col)]
    for i in range(int(start_row), int(start_row + side_len)):
        for j in range(int(start_col), int(start_col + side_len)):
            if color != matrix[i][j]:
                return False
    return True

def recur(side_len, matrix, start_row, start_col):
    global BLUE, WHITE
    if side_len == 1 or all_same(matrix, start_row, start_col, side_len):
        if matrix[int(start_row)][int(start_col)] == 0:
            WHITE += 1
        else:
            BLUE += 1
        return
    
    half = side_len / 2
    recur(half, matrix, start_row, start_col)
    recur(half, matrix, start_row + half, start_col)
    recur(half, matrix, start_row, start_col +half)
    recur(half, matrix, start_row + half, start_col + half)

if __name__ == "__main__":
    N = int(sys.stdin.readline())
    matrix = []*N
    for i in range(N):
        matrix.append(list(map(int, sys.stdin.readline().split())))

    recur(N, matrix, 0, 0)
    print(f"{WHITE}\n{BLUE}")
# finished at 9:44