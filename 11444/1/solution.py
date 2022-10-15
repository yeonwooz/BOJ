import sys
input = sys.stdin.readline
# https://velog.io/@ledcost/%EB%B0%B1%EC%A4%80-11444-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98-6-%EA%B3%A8%EB%93%9C3-%EB%B6%84%ED%95%A0-%EC%A0%95%EB%B3%B5

n = int(input())
p = 1000000007

def square(A,k):
    # 행렬 제곱
    if k == 1:
        for x in range(len(A)):
            for y in range(len(A)):
                A[x][y] %= p
        return A

    tmp = square(A, k//2)
    # tmp에는 A행렬을 k//2 승 한 값이 담긴다. => 계속 나눠지다가 1까지 가면, 각 성분을 (성분 % p)로 교체해서 리턴한다

    if k % 2:
        # k승이 홀수
        return mul(mul(tmp, tmp), A)
    else:
        # k승이 짝수
        return mul(tmp, tmp)
        
def mul(A,B):
    # 행렬곱
    n = len(A)
    Z = [[0] * n for _ in range(n)]

    for row in range(n):
        for col in range(n):
            e = 0
            for i in range(n):
                e += A[row][i]  * B[i][col]
            Z[row][col] = e % p
        
    return Z

fibs = [[1,1], [1,0]]
print(square(fibs, n)[0][1])