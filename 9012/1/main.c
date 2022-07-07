#include <stdio.h>
#include <string.h>

int main(void)
{
    int T;
    char ps[51] = {0,};
    char stack[51] = {0,};
    
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%s", ps);
        int j = 0; 
        int top = -1;
        while (ps[j])
        {
            if (ps[j] == '(')
            {
                if (top == 50)
                    break;
                stack[++top] = ps[j];
            }
            else
            {
                if (top == -1)
                    break;   
                stack[top--] = 0;
            }
            ++j;
        }
        if (j == strlen(ps) && top == -1)
            printf("YES");
        else 
            printf("NO");
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}