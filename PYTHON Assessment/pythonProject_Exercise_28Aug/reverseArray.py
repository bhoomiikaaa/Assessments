numArray = int(input("Enter number of elements you want in the array: "))
array = []

for i in range(numArray):
    element = input(f"Enter element {i + 1}: ")
    array.append(element)

print("Original array:", array)
# Reverse array
reversed_array = array[::-1]
# Print the reversed array
print("Reversed array:", reversed_array)
