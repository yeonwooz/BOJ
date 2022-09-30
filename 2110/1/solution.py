import sys

def bin_search(coords, start, end):
    while start <= end:
        mid = (start + end) // 2 # 현재 평균 공유기 거리(aka. cmd. current_mid_distance) 조회
        current = coords[0] # 현재위치는 첫인덱스
        counts = 1  # 라우터 한개 놓음

        for i in range(1, N):
            # 현재 위치와 마지막 집 사이에서 두번째 라우터 놓을 집 찾기
            if coords[i] >= current + mid:
                # 이번 차례의 집이 현재위치부터 cmd만큼 떨어진 곳보다 멀다면 공유기를 둘 수 있다. 
                counts += 1
                current = coords[i] # 현재위치가 바뀐다
        
        if counts >= C: #공유기 개수 만족
            global answer
            start = mid + 1 # start지점을 오른쪽으로 옮겨서 cmd를 키워보자 
            answer = mid
        else:
            end = mid - 1 # 공유기 개수 만족하지 않음. cmd는 줄어들어야 한다

def solve():
    bin_search(coords, 1, coords[N-1] - coords[0]) 
    # start: 공유기는 최소 두개이상이고 겹치지 않으니까, 최소(start)는 1, 최대(end)는 마지막 인덱스부터 첫인덱스까지 거리
    print(answer)

if __name__ == "__main__":
    coords = []
    N, C = map(int, sys.stdin.readline().split())
    for _ in range(N):
        coords.append(int(sys.stdin.readline()))
    coords.sort()
    solve()