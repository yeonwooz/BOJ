#started at 9:58
import sys
# 두 점의 (x좌표차이) ** 2 + (y좌표차이) **2 중 최소

def recur(dots, visited, cur, depth, n):
    global min_distance
    if n == depth:
        return
    
    for v in range(n):  
        if cur != v and visited[v] == False:
            distance = abs(dots[v]['x'] - dots[cur]['x']) ** 2 + abs(dots[v]['y'] - dots[cur]['y']) ** 2
            min_distance = min (min_distance, distance)
            visited[v] = True
            recur(dots, visited, v, depth + 1, n)
            visited[v] = False


if __name__ == "__main__":
    n = int(sys.stdin.readline())
    dots = []
    for _ in range(n):
        x,y = map(int, sys.stdin.readline().split())
        dots.append({
            'x': x,
            'y': y
        })
    global min_distance 
    min_distance = (20000 ** 2) * 2

    for i in range(n):
        visited = [False] * n
        visited[i] = True
        recur(dots, visited, i, 1, n)
        visited[i] = False

    print(min_distance)
