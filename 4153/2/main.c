#include <stdio.h>

int main(void)
{
    int sides[3] = {0, };

    while (1)
    {
        for (int i = 0; i < 3; ++i)
        {
            scanf("%d", &sides[i]);
            if (i == 0)
                continue;
            else 
            {
                if (sides[i - 1] > sides[i]) 
                {
                    int temp = sides[i - 1];
                    sides[i - 1] = sides[i];
                    sides[i] = temp;
                } 
            }
        }
        if (sides[0] == 0 && sides[1] == 0 && sides[2] == 0)
            return (0);
        if (sides[0] * sides[0] + sides[1] * sides[1] == sides[2] * sides[2])
            printf("right\n");
        else
            printf("wrong\n");
    }
    return (0);
}