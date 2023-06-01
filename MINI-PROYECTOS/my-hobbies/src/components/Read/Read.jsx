import React from 'react';
import { HOBBIES } from '../HOBBIES';

const Read = () => {
  const { read } = HOBBIES;

  return (
    <div>
      <h2>Read</h2>
      <p>Title: {read.title}</p>
      <p>Author: {read.authorName} {read.authorSurname}</p>
      <p>Genre: {read.genre}</p>
      <p>Date of Publication: {read.dateOfPublication}</p>
      <p>Author Birth Date: {read.authorBirthDate}</p>
      <img src={read.bookImage} alt="Book Cover" />
      <h3>Other Books</h3>
      <ul>
        {read.otherBooks.map((book, index) => (
          <li key={index}>{book.info}</li>
        ))}
      </ul>
    </div>
  );
}

export default Read;