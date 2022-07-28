#include <stdio.h>
#define MAX 1000000

int T = 0;

typedef struct st1
{
    int value;
    int is_deleted;
} DATA;

DATA data[MAX];
int dcnt;

typedef struct st2
{
    int value;
    int dataIdx;
} HEAP;

HEAP minHeap[MAX];
int minHn;

HEAP maxHeap[MAX];
int maxHn;

int init(void);
void solve(char *);

int main(void)
{
    if(init())
    {
        for (int i = 0; i < T; ++i)
        {
            int n;
            scanf("%d", &n);
            for (int j = 0; j < n; ++j)
            {
                char cmd[2];
                scanf("%s", cmd);
                
                solve(cmd);
            }       
        }
    }
    return (0);
}

int init(void)
{
    scanf("%d", &T);
    if (T)
        return (1);
    return (0);
}

void solve(char *cmd)
{
    int value;
    scanf("%d", &value);
    if (cmd == 'I')
    {   
        data[dcnt].value = value;
        data[dcnt].is_deleted = 0;
        maxPush()
    }
    else
    {

    }

}