import sys
input = sys.stdin.readline

DP = [[[0] * 21 for _ in range(21)] for _ in range(21)]
def w(a,b,c):
    if a <= 0 or b <= 0 or c <= 0:
        return 1
    if a > 20 or b > 20 or c > 20:
        return w(20,20,20)
    if DP[a][b][c]:
        return DP[a][b][c]
    if a < b < c:
        DP[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
        return DP[a][b][c]
    DP[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
    return DP[a][b][c]

while True:
    try:
        a,b,c = map(int, input().split())
        if a == -1 and b == -1 and c == -1:
            break
        print(f"w({a}, {b}, {c}) = {w(a,b,c)}")
    except Exception as error:
        print(error)
        break