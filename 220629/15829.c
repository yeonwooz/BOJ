#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int L;
    char *str;
    int H;
    const int R = 31;
    const int M = 1234567891;
    int temp;

    scanf("%d", &L);
    str = (char *)malloc(sizeof(char) * (L + 1));
    scanf("%s", str);
    str[L+1] = '\0';
    
    for (int i = 0; i < L; ++i)
    {
        str[i] -= 96;
    }
    H = 0;
    for (int i = 0; i < L; ++i)
    {
        temp = str[i];
        for (int j = 0; j < i; ++j)
        {
            temp *= R;
        }
        H += temp;
    }
    printf("%d", H % M);
}