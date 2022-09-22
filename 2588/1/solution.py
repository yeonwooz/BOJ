A = input() 
B = input()
A = int(A)

for i in reversed(range(0, len(B))):
    print(A * int(B[i]))
print(A * int(B))

