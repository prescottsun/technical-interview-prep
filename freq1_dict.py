def array_freq(arr1, arr2):
    dict_arr1 = {}
    dict_arr2 = {}
    for number in arr1:
        if number in dict_arr1:
            dict_arr1[number] += 1
        else:
            dict_arr1[number] = 1

    for number in arr2:
        if number in dict_arr2:
            dict_arr2[number] += 1
        else:
            dict_arr2[number] = 1

    if dict_arr1 == dict_arr2:
        return True
    else:
        return False

arr1 = [1,2,3,4,5]
arr2 = [1,2,3,4]

print(array_freq(arr1,arr2))