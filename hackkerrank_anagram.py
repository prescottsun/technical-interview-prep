def anagram(s):
    if len(s) % 2 != 0:
        return False

    s1 = s[:int(len(s)/2)]
    s2 = s[int(len(s)/2):]

    arr_s1 = {}
    arr_s2 = {}
    for index in s1:
        if index in arr_s1:
            arr_s1[index] += 1
        elif index not in arr_s1:
            arr_s1[index] = 1

    for index in s2:
        if index in arr_s2:
            arr_s2[index] += 1
        elif index not in arr_s2:
            arr_s2[index] = 1

    counter = 0
    for i in arr_s1:
        if i in arr_s2:
            counter += abs(arr_s1[i] - arr_s2[i])
        elif i not in arr_s2:
            counter += arr_s2[i]
    return counter

print(anagram('bbccde'))