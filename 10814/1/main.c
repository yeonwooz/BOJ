#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct member
{
    int age;
    char name[101];
} Member;

int compare(const void *a, const void *b);

int main(void)
{
    int N, age;
    char name[101] = "";
    Member *members;
    
    scanf("%d", &N);
    members = (Member *)malloc(sizeof(members[0]) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d %s", &age, name);
        members[i].age = age;
        strcpy(members[i].name, name);
    }
    qsort(members, N, sizeof(members[0]), compare);
    for (int i = 0; i < N; ++i)
    {
        printf("%d %s\n", members[i].age, members[i].name);
    }
}

int compare(const void *a, const void *b)
{
    Member *memberA =  (Member *)a;
    Member *memberB =  (Member *)b;

    if (memberA -> age < memberB -> age)
        return (-1);
    if (memberA -> age > memberB -> age)
        return (1);    
    return (0);
}