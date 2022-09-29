import sys

def bin_search(nums, target, len):
    left = 0
    right = len - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return True
        if target > nums[mid]:
            left = mid + 1
        elif target < nums[mid]:
            right = mid - 1
    return False

def solve(N, nums1, M, nums2):
    answer = ""
    for target in nums2:
        result =  bin_search(nums1, target, N)
        if result:
            answer += "1\n"
        else:
            answer +="0\n"
    print(answer.rstrip())

if __name__ == "__main__":
    N = int(sys.stdin.readline())
    nums1 = list(map(int, sys.stdin.readline().split()))    
    M = int(sys.stdin.readline())
    nums2 = list(map(int, sys.stdin.readline().split()))    
    nums1.sort()
    solve(N, nums1, M, nums2)