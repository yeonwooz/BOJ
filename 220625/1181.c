#include <stdio.h>

int len(char *str)
{
    int i;

    i  = 0;
    while (*(str + i))
        ++i;
    return (i);
}

int main(void)
{
    int cnt;
    char word[51] = {0,};
    int arr[20001][1020000] = {0,}; // segmentation fault

    scanf("%d", &cnt);
    

}