#include <stdio.h>

int main(void)
{
    int num, diff;
    int arr[8];
    for (int i = 0; i < 8; ++i)
    {
        scanf("%d", &arr[i]);
        if (i == 0)
            continue;
        diff = arr[0] - arr[1];
        if (diff != arr[i-1] - arr[i])
        {
            printf("mixed");
            return (0);
        }
    }
    if (diff == 1)
        printf("descending");
    else
        printf("ascending");
    return (0);
}