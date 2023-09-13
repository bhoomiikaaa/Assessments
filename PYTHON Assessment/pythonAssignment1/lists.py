# Take input from the user to create the list of favorite movies
num_movies = int(input("enter no. of favorite movies: "))
favorite_movies = []

for i in range(num_movies):
    movie = input(f"Enter favorite movie {i+1}: ")
    favorite_movies.append(movie)


if len(favorite_movies) >= 3:
    print("The third favorite movie is:", favorite_movies[2])
else:
    print("Enter enough favorite movies to find the third one.")


new_movie = input("Enter a new favorite movie to add: ")
favorite_movies.append(new_movie)

# Remove the second movie (index 1) from the list
if len(favorite_movies) >= 2:
    removed_movie = favorite_movies.pop(1)
    print(f"Removed movie: {removed_movie}")
else:
    print("add enough favorite movies to remove the second one.")

# Print the updated list of favorite movies
print("Updated list of favorite movies:")
for movie in favorite_movies:
    print(movie)


first_three_movies = favorite_movies[:3]

# Print the new list containing the first 3 movies
print("First three favorite movies:")
for movie in first_three_movies:
    print(movie)