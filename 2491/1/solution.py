N = int(input())
seq = list(map(int, input().split()))

asc = [1] * N
dsc = [1] * N

for i in range(1,N):
   if seq[i-1] <= seq[i]:
    asc[i] = asc[i-1] + 1
   if seq[i-1] >= seq[i]:
    dsc[i] = dsc[i-1] + 1

print(max(max(asc), max(dsc)))