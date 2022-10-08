#https://velog.io/@kimdukbae/BOJ-14888-%EC%97%B0%EC%82%B0%EC%9E%90-%EB%81%BC%EC%9B%8C%EB%84%A3%EA%B8%B0-Python
import sys
input = sys.stdin.readline

N = int(input())
num = list(map(int, input().split()))
op = list(map(int, input().split()))

maxi = -1e9
mini = 1e9

def DFS(depth, total, plus, minus, multiply, divide):
    global maxi, mini
    if depth == N:
        maxi = max(total, maxi)
        mini = min(total, mini)
        return
    
    if plus:
        DFS(depth+1, total + num[depth], plus - 1, minus, multiply, divide)
    if minus:
        DFS(depth+1, total - num[depth], plus, minus - 1, multiply, divide)
    if multiply:
        DFS(depth+1, total * num[depth], plus, minus, multiply - 1, divide)
    if divide:
        flag = 1
        if total < 0:
            flag = -1
        DFS(depth+1, int((total * flag) / num[depth]) * flag, plus, minus, multiply, divide - 1)


DFS(1, num[0], op[0], op[1], op[2], op[3])
print(maxi)
print(mini)