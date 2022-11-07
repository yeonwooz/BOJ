from sys import stdin
N = int(stdin.readline())

arr = []
for i in range(N):
    arr.append(int(stdin.readline()))

arr.sort()
# start = arr[0]
# end = arr[N-1]

max_cnt = 0
for i in range(N):
    cnt = 1
    space = 0
    for j in range(i+1, N):
        print('arr[j-1]',arr[j-1], 'arr[j]',arr[j])
        if cnt == 5:
            max_cnt = cnt
            break

        prev = j-1
        cur = j

        if arr[prev] + 1 == arr[cur]:
            cnt += 1
        else:
            space += 1
            max_cnt = max(cnt, max_cnt)
            cnt = 1
        

    max_cnt = max(cnt, max_cnt, 5-space)

    if max_cnt == 5:
        break
    
print(5-max_cnt)
