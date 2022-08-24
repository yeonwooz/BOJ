#include <stdio.h>
#include <stdlib.h>


int init(void);
long long fac(long long n);
void getFacNums(long long num, long long*facs);
int solve();

long long N = -1;
long long facs[20] = {0,};
int idx = -1;

int main(void)
{
    if(init())
    {
        int result = solve();
        if (result) {
            printf("YES");
        } else {
            printf("NO");
        }
    }
    return (0);
}

int solve() {
    getFacNums(N, facs);

    // for (int i = 0; i <= idx; ++i) {
    //     printf("num = %lld\n", facs[i]);
    // }

    long long sum = 0;
    int i = idx;
    while (i >= 0) {
        // printf("%lld\n", sum);
        long long num = facs[i];
        if (sum + num == N) return 1;
        if (sum + num < N) {
            sum += num;
        }
        --i;
    }
    if (sum == N) return 1;
    return 0;
}

int init(void)
{
    scanf("%lld", &N);
    if (N >= 0)
        return (1); 
    return (0);
}

void getFacNums(long long num, long long*facs) {
    int n = 1;
    facs[++idx] = 1;
    while (1) {
        long long factorial = fac(n);
        if (factorial > num) break;
        facs[++idx] = factorial;
        ++n;
    }
}

long long fac(long long n) {
    long long result = 1;
    long long i = 1;
    while (i <= n) {
        result *= i;
        ++i;
    }
    return result;
}
