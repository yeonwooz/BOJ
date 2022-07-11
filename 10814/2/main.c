#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct _Person
{
    int age;
    char name[101];
} Person;

int cmp(const void *a, const void *b);
void print(int N, Person *members);

int main(void)
{
    int N;
    Person *members;
    
    scanf("%d", &N);
    members = (Person *)malloc(sizeof(Person) * N);
    for (int i = 0; i < N; ++i)
    {        
        char name[101] = {0,};
        scanf("%d\n", &members[i].age);
        scanf("%s\n", name);
        strncpy(members[i].name, name, strlen(name) + 1);
    }
    qsort(members, N, sizeof(Person), cmp);
    print(N, members);
    return (0);
}

int cmp(const void *a, const void *b)
{
    Person member1 = *(Person *)a;
    Person member2 = *(Person *)b;
    return (member1.age > member2.age);
}

void print(int N, Person *members)
{
    for (int i = 0; i < N; ++i)
    {
        printf("%d ", members[i].age);
        printf("%s\n", members[i].name);
    }
}