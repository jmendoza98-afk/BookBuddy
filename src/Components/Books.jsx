import React from 'react';
import { NavLink } from 'react-router';

function Books({ books }) {
  const [searchParam, setSearchParam] = React.useState("");
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchParam)
  );


  return (
    <div>
      <h1>Library Book Catalog</h1>
      <header>
      <label>
                    Search:
                    <input 
                        type="text"
                        placeholder="search for book"
                        onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
                    />
                    <ul>
                    {filteredBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
                    </ul>
                </label>
            </header>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Books