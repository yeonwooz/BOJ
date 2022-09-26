list = [6,4,3,7,1,9,8]

# 내장 sort 이용
list1 = list[0:]
list1.sort()

# 내장 sorted 이용
list2 = sorted(list)

print(list) # 정렬안됨
print(list1) # 정렬됨
print(list2) # 정렬됨

# key 매개변수 사용
sentence = "This is a test string from Andrew"
str_list = sentence.split()
list3 = str_list[0:]
list3.sort(key=str.lower)
list4 = sorted(str_list, key=str.lower)

list5 = str_list[0:]
list5.sort(key=len)
list6 = sorted(str_list, key=len)

print(str_list) # 정렬안됨
print(list3) # 소문자 우선 정렬됨
print(list4) # 소문자 우선 정렬됨
print(list5) # 길이 기준 오름차순 정렬됨
print(list6) # 길이 기준 오름차순 정렬됨