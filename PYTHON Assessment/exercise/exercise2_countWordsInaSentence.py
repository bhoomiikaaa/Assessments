
sentence = input("Enter a sentence: ")

words = sentence.split()
word_count = len(words)

print("Number of words in the sentence:", word_count)

# Create a dictionary to store word frequencies
word_freq = {}

# Count the occurrence of each word
for word in words:
    if word in word_freq:
        word_freq[word] += 1
    else:
        word_freq[word] = 1

# Display the word frequencies
print("Word frequencies:")
for word, count in word_freq.items():
    print(f"{word}: {count}")
