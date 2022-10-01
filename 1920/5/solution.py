#started at 3:55
def bin_search(ls, len, target):
    start = 0
    end = len - 1
    while start <= end:
        mid = (start + end) // 2 # 인덱스 중간값
        if ls[mid] == target:
            return mid
        if ls[mid] < target:
            start = mid + 1
        else:
            end = mid -1
    return -1

N = int(input())
nums1 = list(map(int, input().split()))
nums1.sort()
M = int(input())
nums2 = list(map(int, input().split()))

for target in nums2:
    found = bin_search(nums1, N, target)
    print(0 if found == -1 else 1)
#finished at 4:06