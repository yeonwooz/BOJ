# start at 2:53
import sys

def q_sort(ls, left, right):
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while ls[pl] < pivot:
            pl += 1
        while ls[pr] > pivot:
            pr -= 1
        if pl <= pr:
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
    
    if left < pr : q_sort(ls, left, pr)
    if pl < right : q_sort(ls, pl, right)
        

N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

# sort
q_sort(arr, 0, N - 1)
# print(arr) # [-99, -2, -1, 4, 98]

# binary search
sum_nearest_zero = 1e9
answer = []
if N == 2: 
    sum_nearest_zero = arr[0] + arr[1]
    answer = [arr[0] + arr[1]]
else:
    l_ptr = 0
    r_ptr = N - 1
    while l_ptr < r_ptr:
        sum = arr[l_ptr] + arr[r_ptr]
        
        if abs(sum) < abs(sum_nearest_zero):
            sum_nearest_zero = sum
            answer = [arr[l_ptr], arr[r_ptr]]
        else:
            break

        mid = (l_ptr + r_ptr) // 2
        if sum == 0:
            answer = [arr[l_ptr], arr[r_ptr]]
        elif sum > 0:
            r_ptr = arr[mid] - 1
        else:
            l_ptr = arr[mid] - 1

print(answer)