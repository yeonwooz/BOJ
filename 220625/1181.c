#include <stdio.h>
#include <stdlib.h>

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
    //int arr[20001][1020000] = {0,}; // segmentation fault
    int **arr;
    arr = (int **)malloc(sizeof(int *) * 20001);
    for (int i = 0; i < 20002; ++i)
    {
       arr[i] = (int *)malloc(sizeof(int) * 1020000); 
    }
    scanf("%d", &cnt);
    

}