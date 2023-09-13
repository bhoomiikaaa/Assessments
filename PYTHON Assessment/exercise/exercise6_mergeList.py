input_str1 = input("Enter elements of  first list: ")

l1=input_str1.split()

input_str2 = input("Enter elements of second list: ")

l2=input_str2.split()

# Combine the two lists
merged_list = l1 + l2

# Sort the combined list
merged_list.sort()

print("Merged and sorted list:", merged_list)
