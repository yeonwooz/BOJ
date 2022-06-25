#include <stdio.h>

int main(void)
{
    int input;
    int temp;
    int sides[3] = {-1, };
    
    while (1)
    {
        for (int i = 0; i < 3; ++i)
        {
            scanf("%d", &input);
            if (i == 0)
                sides[i] = input;
            else 
            {
                if (sides[i - 1] > input) 
                {
                    temp = sides[i - 1];
                    sides[i - 1] = input;
                    sides[i] = temp;
                } 
                else if (sides[i - 1] < input) 
                {
                    sides[i] = input;
                }
            }
        }
        if (sides[0] == 0 && sides[1] == 0 && sides[2])
            return (0);
        if (sides[0] * sides[0] + sides[1] * sides[1] == sides[2] * sides[2])
            printf("right\n");
        else
            printf("wrong\n");
    }
    return (0);
}