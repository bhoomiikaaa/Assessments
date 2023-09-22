// src/BookForm.js
import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || author === '' || publicationDate === '' || genre === '') {
      alert('Please fill in all fields.');
      return;
    }

    const book = {
      name,
      author,
      publicationDate,
      genre,
    };

    onAddBook(book);

    setName('');
    setAuthor('');
    setPublicationDate('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Book Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Publication Date:</label>
        <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <button type="submit">Add A Book</button>
    </form>
  );
}

export default BookForm;
