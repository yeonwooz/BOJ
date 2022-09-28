import sys

def main() :
    N = int(sys.stdin.readline())
    if N == 1:
        return 1

    nums = list(map(int, sys.stdin.readline().split()))

    status = 0 # ascending 1 / descending -1
    idx = 1
    max_len = -1e9
    len = 1
    while idx < N:
        if status == 0:
            if nums[idx - 1] < nums[idx]:
                status = 1 
                len += 1
            elif nums[idx - 1] > nums[idx]:
                status = -1
                len += 1
            else:
                status = 0
                len = 0
            if max_len < len:
                max_len = len
        elif status == 1:
            if nums[idx - 1] < nums[idx]:
                len += 1
            elif nums[idx - 1] > nums[idx]:
                status = -1
                len += 1
            else:
                status = 0
                len = 0
            if max_len < len:
                max_len = len    
        else:
            if nums[idx - 1] > nums[idx]:
                len += 1
            else:
                len = 0
            if max_len < len:
                max_len = len    
        idx += 1
    print(max_len)


if __name__ == "__main__":
    main()