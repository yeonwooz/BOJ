import sys
input = sys.stdin.readline
N = int(input())

pre = []
mid = []
post = []
def preorder(v):
    pre.append(chr(v+65))
    if graph[v][0] != '.':
        preorder(graph[v][0])   
    if graph[v][1] != '.':
        preorder(graph[v][1])

def midorder(v):
    if graph[v][0] != '.':
        midorder(graph[v][0])   
    mid.append(chr(v+65))
    if graph[v][1] != '.':
        midorder(graph[v][1])

def postorder(v):
    if graph[v][0] != '.':
        postorder(graph[v][0])   
    if graph[v][1] != '.':
        postorder(graph[v][1])
    post.append(chr(v+65))


graph = [[] for _ in range(N)]

for _ in range(N):
    root, l, r = input().split()
    root = ord(root) - 65
    if l != '.':
        l =  ord(l) - 65
    if r != '.':
        r= ord(r) - 65
    graph[root].append(l)
    graph[root].append(r)

preorder(0)
midorder(0)
postorder(0)

print("".join(pre))
print("".join(mid))
print("".join(post))