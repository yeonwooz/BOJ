#include <stdio.h>

int main(void) {
    int     word[123] = {0,};
    char    c;  
    int     max_cnt;
    char    max_alpha;
    int     two_max;

    while (scanf("%c", &c) == 1)
    {
        if (c >= 97 && c <= 122)
            word[c - 32]++;
        else
            word[c]++;
    }

    max_cnt = 0;
    max_alpha = 0;
    two_max = 0;
    for (int i = 65; i <= 90; ++i)
    {
        if (word[i] > max_cnt)
        {
            max_cnt = word[i];
            max_alpha = i;
            two_max = 0;
        }
        else if (word[i] == max_cnt)
            two_max = 1;
    }
    if (two_max)
        printf("?");
    else
        printf("%c", max_alpha);
    return 0;
}