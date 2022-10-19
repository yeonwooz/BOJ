# https://blog.koderpark.dev/145
import sys, functools

t = 0
n = 0
sfa = [0] * 200000
lcp = [0] * 200000
tmp = [0] * 200000
g = [0] * 200000
ng = [0] * 200000

def compare(a, b):
    if g[a] == g[b]:
        return g[a+t] < g[b+t]
    return g[a] < g[b]

def make_sfa(str):
    global t, n
    t = 1
    n = len(str)

    for i in range(n):
        sfa[i] = i
        g[i] = ord(str[i]) - ord('a')

    while t <= n:
        g[n] = -1
        sfa.sort(key = functools.cmp_to_key(compare))
        ng[sfa[0]] = 0

        for i in range(1, n):
            if compare(sfa[i-1], sfa[i]):
                ng[sfa[i]] = ng[sfa[i-1]] + 1
            else:
                ng[sfa[i]] = ng[sfa[i-1]]
        
        for i in range(n):
            g[i] = ng[i]
            t *= 2

def LCP():
    for i in range(n):
        tmp[sfa[i]] = i
        len = 0
        for i in range(n):
            if tmp[i]:
                j = sfa[tmp[i] - 1]

                while s[j+len] == s[i+len]:
                    len += 1
                    lcp[tmp[i]] = len

                    if len:
                        len -= 1

n = int(sys.stdin.readline())
s = sys.stdin.readline().rstrip()

make_sfa(s)
LCP()

ans = -1
for i in range(n):
    ans = max(ans, lcp[i])
print(ans)