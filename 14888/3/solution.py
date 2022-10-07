#started at 7:32
import sys
input = sys.stdin.readline

def DFS(v, visited):
    visited.append(v)
    

N = int(input())
nums = list(map(int, input().split()))
ops =  list(map(int, input().split()))

