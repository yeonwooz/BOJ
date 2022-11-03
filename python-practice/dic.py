dic1 = {'a':1, 'b':2, 'c':3}
print(dic1)
dic1[6] = 2
dic1['a'] = 2

print(dic1)


del dic1['b']
print(dic1)

print("dic1.keys()==>", dic1.keys())
for k in dic1.keys():
    print(k)

print("enumerate(dic1)==>", enumerate(dic1))
for idx,k in enumerate(dic1):
    print(idx,k)

print("dic1.items()==>", dic1.items())
for k,v in dic1.items():
    print(k,v)

print(dic1.get('dddd', 3))

print('a' in dic1)
print('z' in dic1)