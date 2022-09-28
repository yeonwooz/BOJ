import sys

max_buff_size = 1000000
global buff
buff = [None] * max_buff_size

def merge_sort(ls, left, right) -> None:
    if left < right:
        # 정렬할 부분이 남아있다면
        center = (left + right) // 2 # 계속 나누며 재귀호출 하다보면 배열의 원소가 두개인 케이스까지 들어가고, 그 두 개를 정렬하면 재귀를 빠져나오면서 두개씩 쌍으로 된 배열들이 합쳐진다

        merge_sort(ls, left, center) # 앞부분 정렬
        merge_sort(ls, center + 1, right) # 뒷부분 정렬

        i = j = left    # i, j에 left 할당
        # i는 왼쪽 배열 커서, j는 오른쪽 배열 커서

        buf_pl = buf_pr = 0   # buf_pl, buf_pr 에  0 할당
        # buf_pl은 왼쪽 배열과 비교할 버퍼 커서, buf_pr은 오른쪽 배열과 비교할 버퍼 커서

        while i <= center:
            # 왼쪽 배열의 원소를 버퍼에 앞쪽부터 채워넣는다. 
            buff[buf_pr] = ls[i]
            buf_pr += 1
            i += 1  # i는 오른쪽 배열의 시작점으로 바뀐다 
        
        while i <= right and buf_pl < buf_pr:
            # 오른쪽 배열에 대해서, 이미 채워진 버퍼의 앞쪽부터 비교
            if buff[buf_pl] <= ls[i]:
                # 버퍼의 원소가 오른쪽 배열의 원소보다 같거나 작으면
                ls[j] = buff[buf_pl]  # 왼쪽 배열에 버퍼의 원소를 채운다
                buf_pl += 1 
            else:
                # 버퍼의 원소가 오른쪽 배열의 원소보다 크면
                ls[j] = ls[i]   # 왼쪽 배열에 오른쪽 배열의 원소를 채운다
                i += 1
            j += 1
        
        while buf_pl < buf_pr:  # 버퍼의 두 커서가 교차할 때까지
            ls[j] = buff[buf_pl]    # 왼쪽 배열에 버퍼의 원소를 넣는다 
            j += 1                      
            buf_pl += 1

if __name__ == "__main__":
    N = int(sys.stdin.readline())
    nums = list(map(int, sys.stdin.readline().split()))
    merge_sort(nums, 0, N-1)
    del buff
    # print(nums)
    for i in range(1, N + 1):
        if nums[i-1] != i:
            print(i) 
            sys.exit()  # 함수 내부가 아니므로 리턴문은 사용할 수 없다 
    print(N + 1)