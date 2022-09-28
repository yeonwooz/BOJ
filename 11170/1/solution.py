import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(sys.path)

from py_module.perf import time
from py_module.perf import memory

start = time()
T = int(sys.stdin.readline())
for _ in range(T):
    N, M = map(int, sys.stdin.readline().split())
    cnt = 0
    while N <= M:
        word = str(N)
        for c in word:
            if c == '0': cnt += 1
        N += 1
    print(cnt)

end = time()
print(f"time: {end - start:.5f} sec")
print(f"memory usage: {memory: 10.5f} MB")