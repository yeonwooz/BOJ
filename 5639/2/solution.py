#started a 11:40
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

def postorder(start, end):
    if start > end:
        return
    mid = end + 1

    for i in range(start + 1, end + 1):  # 마지막 인덱스 포함하여 탐색
        # mid를 하위노드의 start로 교체
        if nums[start] < nums[i]:
            mid = i
            break

    postorder(start + 1, mid - 1)
    # 왼쪽 하위노드가 있는지 탐색
    postorder(mid, end)
    # 오른쪽 하위노드가 있는지 탐색
    print(nums[start])
    # 되돌아 나오면서 부모노드를 프린트

nums = []
while True:
    try:
        nums.append(int(input()))
    except:
        break

postorder(0, len(nums) - 1)