str1 = input("Enter elements of the first list: ")
list1 = [int(x) for x in str1.split()]

str2 = input("Enter elements of the second list: ")
list2 = [int(x) for x in str2.split()]

# Find the intersection using set intersection
set1 = set(list1)
set2 = set(list2)
intersection = list(set1 & set2)

print("Intersection of the two lists:", intersection)
