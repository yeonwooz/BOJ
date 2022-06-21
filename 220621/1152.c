#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[1000001];
    int space_cnt;
    int len;

    scanf("%[^\n]", str);
    len = strlen(str);
    
    if (len == 1 && str[0] == ' ')
    {
        printf("%d", 0);
        return (0);
    }
    space_cnt = 0;
    for (int i = 1; i < len - 1; ++i)
    {
        if (str[i] == ' ')
            space_cnt++;
    }
    printf("%d", space_cnt + 1);
}