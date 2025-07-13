import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Books from './Components/Books';
import SingleBook from './Components/SingleBook';
import Login from './Components/Login';
import Register from './Components/Register';
import Account from './Components/Account';
import Navigation from './Components/Navigations';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    const data = await response.json();
    setBooks(data);
  };

  return ( 
  <>
    <Navigation user={user} />
    <Routes>
      <Route exact path="/" element =  { <Books books={books} />} />
      <Route exact path="/books" element =  { <Books books={books} />} />
        <Route path="/books/:id" element = {<SingleBook/>} />
        <Route path="/login" element = { <Login setUser={setUser} />} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/account" element = { <Account user={user} />} />
    </Routes>
    </>
  );
}

export default App
