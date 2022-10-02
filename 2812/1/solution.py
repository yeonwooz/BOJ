#started at 10:17
N, K = map(int, input().split(' '))
arr = list(map(int, input()))

stack = []
idx = 0
while idx < N - 1:
    print(stack)
    if K == 0: break
    if arr[idx] < arr[idx + 1]:
        idx += 1
        continue
    else:
        if not stack: 
            stack.append(arr[idx])
        elif stack and stack[-1] < arr[idx]:
            stack.pop()
            stack.append(arr[idx])
        else:
            stack.append(arr[idx])
        K -= 1        
    idx += 1



print(stack)


#finished at 