# Create an empty set for programming languages
programming_languages = set()

# Take input from the user to add programming languages
num_languages = int(input("enter no. of programming languages: "))

for i in range(num_languages):
    language = input(f"Enter programming language {i+1}: ")
    programming_languages.add(language)

# Print the set of programming languages
print("Set of programming languages:", programming_languages)


language_to_remove = input("Enter a programming language to remove: ")
programming_languages.discard(language_to_remove)

# Check if "Python" is in the set
if "Python" in programming_languages:
    print("Python is in the set.")
else:
    print("Python is not in the set.")

# Print the updated set of programming languages
print("Updated set of programming languages:", programming_languages)

programming_languages2 = set()

# Take input from the user to add programming languages
num_languages = int(input("enter no. of programming languages: "))

for i in range(num_languages):
    language = input(f"Enter programming language {i+1}: ")
    programming_languages2.add(language)
common_languages = programming_languages.intersection(programming_languages2)
print(common_languages)