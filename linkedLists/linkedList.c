#include <stdio.h>
#include <stdlib.h>

struct NODE {
    struct NODE *next;
    int data;
};

int n = -1;
int *nums;

int init(void);
void solve(void);

int main(void)
{
    if(init())
    {
        solve();
        if (nums)
            free(nums);
    }
    return (0);
}

int init(void)
{
    scanf("%d", &n);
    if (n == -1)
        return (0);
    nums = (int *)malloc(sizeof(int) * n);
    if (nums)
    {
        for (int i = 0; i < n; ++i)
        {
            scanf("%d", &nums[i]);
        }
        return (1);
    }
    return (0);
}

void solve()
{
    struct NODE *head = malloc(sizeof(struct NODE));
    struct NODE *node1 = malloc(sizeof(struct NODE));

    head -> next = node1;
    node1 -> data = 10;
    struct NODE *node2 = malloc(sizeof(struct NODE));
    node1 -> next = node2;
    node2 -> data = 20;

    node2 -> next = NULL;

    struct NODE *curr = head -> next;
    while (curr!=NULL)
    {
        printf("%d\n", curr-> data);
        curr = curr -> next;
    }
    free(node2);
    free(node1);
    free(head);
}