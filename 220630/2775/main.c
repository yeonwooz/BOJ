#include <stdio.h>

int get_room_people(int floor_no, int room_no)
{
    int sum;
    if (floor_no == 0)
    {
        return (room_no);
    }
    sum = 0;
    for (int i = 1; i <= room_no; ++i)
    {
        sum += get_room_people(floor_no - 1, i);
    }
    return (sum);
}

int main(void)
{
    int k, n;
    int T;
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%d\n%d", &k, &n);
        printf("%d\n", get_room_people(k, n));
    }
    return (0);
}