#started at 10:40
import sys
N = int(sys.stdin.readline())
for i in range(N):
    words = sys.stdin.readline().split()
    stack = []
    while words:
        stack.append(words.pop())
    print(f"Case #{i+1}: {' '.join(stack)}")
#finished at 10:44
