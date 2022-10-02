#started at 11:14
N, K = map(int, input().split())

arr = []
for i in range(1, N + 1):
    arr.append(i)

ptr = 0
cnt = 0
killed = 0
answer = []
while killed < N:
    if arr[ptr] > 0:
        cnt += 1

    if cnt == K:
        answer.append(arr[ptr])
        arr[ptr % N] = 0
        killed += 1
        cnt = 0

    ptr += 1
    ptr %= N

print(f'<{", ".join(str(s) for s in answer)}>')
    
    

