#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Pokemon
{
    int number;
    char name[21];
} Pokemon;

void solve(int N, int M);
int cmp(const void *a, const void *b);
int binsearch(Pokemon *sorted, int len, char *target);

int main(void)
{
    int N, M;

    scanf("%d %d", &N, &M);
    solve(N, M);
    return (0);
}

void solve(int N, int M)
{
    Pokemon *pokemons;
    Pokemon *sorted;

    pokemons = (Pokemon *)malloc(sizeof(Pokemon) * N);
    sorted = (Pokemon *)malloc(sizeof(Pokemon) * N);

    for (int i = 0; i < N; ++i)
    {
        char name[21] = {0,};
     
        scanf("%s", name);
        pokemons[i].number = i + 1;
        sorted[i].number = i + 1;

        strncpy(pokemons[i].name, name, strlen(name) + 1);
        strncpy(sorted[i].name, name, strlen(name) + 1);
    }
    qsort(sorted, N, sizeof(Pokemon), cmp);

    for (int i = 0; i < M; ++i)
    {
        char input[21] = {0,};
        scanf("%s", input);

        if ('0' <= input[0] && input[0] <= '9')
        {
            int number = 0;
            int j = 0;
            while (input[j])
            {
                number = number * 10 + input[j] - '0';
                ++j;
            }
            printf("%s\n", pokemons[number - 1].name);
        }
        else
        {
            printf("%d\n", binsearch(sorted, N, input));
        }
    }
}

int cmp(const void *a, const void *b)
{
    Pokemon pokemon1 = *(Pokemon *)a;
    Pokemon pokemon2 = *(Pokemon *)b;

    return (strcmp(pokemon1.name, pokemon2.name));
}

int binsearch(Pokemon *sorted, int len, char *target)
{
    int start = 0;
    int end = len - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (strcmp(sorted[mid].name, target) == 0)
            return sorted[mid].number;
        if (strcmp(sorted[mid].name, target) > 0)
            end = mid - 1;
        else
            start = mid + 1;
    }
    return -1;
}