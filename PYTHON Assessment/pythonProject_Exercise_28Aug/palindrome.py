def is_palindrome(word):

    word = word.lower()

    return word == word[::-1]


input_word = input("Enter a word: ")

if is_palindrome(input_word):
    print("It's a palindrome!")
else:
    print("It's not a palindrome.")
