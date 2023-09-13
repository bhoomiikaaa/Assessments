# Take input from the user to create the tuple of favorite colors
num_colors = int(input("enter no. of favorite: "))
favorite_colors = ()

for i in range(num_colors):
    color = input(f"Enter favorite color {i+1}: ")
    favorite_colors += (color,)  # Adding color to the tuple

# Print the second color (index 1, since indexing starts from 0)
if len(favorite_colors) >= 2:
    print("The second favorite color is:", favorite_colors[1])
else:
    print("add enough favorite colors to find the second one.")



# Loop through and print each color in the tuple
print("Favorite colors:")
for color in favorite_colors:
    print(color)



favorite_colors = ("Red", "Green", "Blue")

# Attempt to modify the second color
favorite_colors[1] = "Yellow"  # This will result in an error
