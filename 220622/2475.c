#include <stdio.h>

int main(void)
{
    char c;
    int sum;
    
    sum = 0;
    for (int i = 0; i < 9; ++i)
    {
        scanf("%c", &c);
        if (c != ' ')
        {
            sum += (c - '0') * (c - '0');   
        }
    }
    printf("%d", sum % 10);
}