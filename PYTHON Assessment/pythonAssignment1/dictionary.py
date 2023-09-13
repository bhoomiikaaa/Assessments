books = {
    "Verity": "Coollen Hoover",
    "Twisted Games": "Ana Huang",
    "Pride and Prejudice": "Jane Austen",
    "Doglapan": "Ashneer Grover"
}

for title, author in books.items():
    print(f"Title: {title}, Author: {author}")




# Add a new book and its author
new_book = input("Enter the title of the new book: ")
new_author = input(f"Enter the author of {new_book}: ")
books[new_book] = new_author

# Update the author of an existing book
book_update = input("Enter the title of the book to update: ")
author_update = input(f"Enter the new author for {book_update}: ")
books[book_update] = author_update

# Print the updated dictionary of book titles and authors
print("Updated dictionary of book titles and authors:")
for title, author in books.items():
    print(f"Title: {title}, Author: {author}")





# Loop through and print each book title and author
print("Books and Authors:")
for title, author in books.items():
    print(f"Title: {title}, Author: {author}")