import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '', publicationDate: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    const { title, author, genre, publicationDate } = newBook;
    if (title && author && genre && publicationDate) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', genre: '', publicationDate: '' });
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="publicationDate"
          value={newBook.publicationDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBook}>Add A Book</button>
      </div>
      <div className="book-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.publicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
