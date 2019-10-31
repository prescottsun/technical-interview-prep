arr = [3, 6, 1, 6, 3, 5]
# i = 5
# while i > 0:
    
#     for index in arr:
#         try:
#             if arr[index] > arr[index+1]:
#                 popped_number = arr.pop(index)
#                 arr.insert(index + 1, popped_number)
#                 # arr.append(popped_number)
#         except IndexError:
#             arr.reverse()
        
# print(arr)

def bubble(arr):
    for x in range(len(arr)-1):
        for index in range(len(arr)-1-x):
            # if arr[i] > arr[i+1]:
                # arr[i], arr[i+1] = arr[i+1], arr[i]
            if arr[index] > arr[index+1]:
                popped_number = arr.pop(index)
                arr.insert(index + 1, popped_number)
    return arr

print(bubble(arr))