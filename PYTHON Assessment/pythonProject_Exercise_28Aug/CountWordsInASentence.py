sentence = input("Enter a sentence: ")

words = sentence.split()

wordCount = len(words)
numLetters= sum(wordCount for word in words)
print("Number of words in the sentence:", wordCount)
print("Number of letters in the sentence:", numLetters)
