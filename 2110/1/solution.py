import sys

def bin_search(coords, start, end, C):
    while start <= end:
        mid = (start + end) // 2
        current = coords[0]
        counts = 1

        for i in range(1, len(coords)):
            if coords[i] >= current + mid:
                counts += 1
                current = coords[i]
        
        if counts >= C:
            global answer
            start = mid + 1
            answer = mid
        else:
            end = mid - 1

def solve():
    bin_search(coords, 1, coords[N-1] - coords[0], C)
    print(answer)

if __name__ == "__main__":
    coords = []
    N, C = map(int, sys.stdin.readline().split())
    for _ in range(N):
        coords.append(int(sys.stdin.readline()))
    coords.sort()
    solve()