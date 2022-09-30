import sys
def promising(first_router_idx, second_router_idx, router_cnt):
    router_cnt -= 2
    distance = coords[second_router_idx] - coords[second_router_idx]
    for i in range(second_router_idx, N):
        if router_cnt == 0:
            return True

        if coords[i] - coords[second_router_idx] < distance: 
            continue
        router_cnt -= 1
    return True if router_cnt <= 0 else False

def bin_search(first_router_idx, second_router_idx, router_cnt):
    start = first_router_idx
    end = second_router_idx

    while start <= end:
        mid = coords[(start + end) // 2]
        if promising(start, end, router_cnt):
            return end - start
        else: 
            start = mid + 1

def solve():
    coords.sort()
    first_router_idx = 0
    second_router_idx = N - 1

    return bin_search(first_router_idx, second_router_idx, C)

if __name__ == "__main__":
    coords = []
    N, C = map(int, sys.stdin.readline().split())
    for _ in range(N):
        coords.append(int(sys.stdin.readline()))
    answer = coords[1] - coords[0]

    if C > 2:
        found_max_distance = solve()
        answer = found_max_distance
    print(answer)