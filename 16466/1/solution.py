import sys

possible_min = 1

def q_sort_and_get_min(ls, left, right):
    global possible_min

    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while ls[pl] < pivot:
            if ls[pl] == possible_min:
                possible_min += 1
            pl += 1

        while ls[pr] > pivot:
            pr -= 1
        
        if pl <= pr:
            if ls[pl] == possible_min:
                possible_min += 1
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1

    if left < pr : q_sort_and_get_min(ls, left, pr)
    if pl < right: q_sort_and_get_min(ls, pl, right)

def solve(N, nums):
    q_sort_and_get_min(nums, 0, len(nums) - 1)
    print(nums)
    print(possible_min)

def main():
    N = int(sys.stdin.readline().rstrip())
    nums = list(map(int, sys.stdin.readline().split()))
    solve(N, nums)

if __name__ == "__main__":
    main()