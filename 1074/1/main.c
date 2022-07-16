#include <stdio.h>
#include <math.h>

void solve(int N, int r, int c);
int recur(int edge, int r, int c, int cnt);

int main(void)
{
    int N, r, c;

    scanf("%d %d %d", &N, &r, &c);
    solve(N, r, c);
    return (0);
}

void solve(int N, int r, int c)
{
    int edge = pow(2, N);
    int cnt = 0;
    printf("%d", recur(edge, r, c, cnt));
}

int recur(int edge, int r, int c, int cnt)
{
    if (edge == 2)
    {
        if (r % 2 == 0 && c % 2 == 0)
            cnt = cnt;
        else if (r % 2 == 0 && c % 2 == 1)
            cnt += 1;
        else if (r % 2 == 1 && c % 2 == 0)
            cnt += 2;
        else if (r % 2 == 1 && c % 4 == 1)
            cnt += 3;

        return (cnt);
    }
    if (r >= 0 && r < edge / 2 && c >= 0 && c < edge / 2)
    {
        // 2사분면
    }
    else if (r >= 0 && r < edge / 2 && c >= edge / 2 && c < edge)
    {
        // 1사분면
        cnt += (edge / 2) * (edge / 2) * 1;
        c -= edge / 2;
    }
    else if (r >= edge / 2 && r < edge && c >= 0 && c < edge / 2)
    {
        // 3사분면
        cnt += (edge / 2) * (edge / 2) * 2;
        r -= edge / 2;
    }
    else if (r >= edge / 2 && r < edge && c >= edge / 2 && c < edge)
    {
        // 4사분면
        cnt += (edge / 2) * (edge / 2) * 3;
        c -= edge / 2;
        r -= edge / 2;
    }

    return recur(edge / 2, r, c, cnt);
}