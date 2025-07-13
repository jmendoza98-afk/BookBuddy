import React from 'react';

function Account({ user }) {
  return (
    <div>
      <h1>Account Details</h1>
      <p>Username: {user.username}</p>
      <h2>Books Checked Out</h2>
      <ul>
        {user.books.map((book) => (
          <li key={book.id}>{book.title}{'>'}{book.coverimage}</li>
        ))}
      </ul>
    </div>
  );
}

export default Account