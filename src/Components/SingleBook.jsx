import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function SingleBook() {
  const [book, setBook] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetchBookDetails();
  }, []);

  useEffect (() => {
    fetchBookURL();
  }, []);

  const fetchBookDetails = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
    const data = await response.json();
    setBook(data);
  };

  const fetchBookURL = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${imageUrl}`);
    const data = await response.json();
    setBook(data);
  }

  const [reserveStatus, setReserveStatus] = useState(null);

async function onReserve() {
    try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reserve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bookId: book.id }), 
        });
          const result = await response.json();
          return result;
        } catch (error) {
          console.error('Reservation failed:', error);
          return null;
        }
      };

  const handleReserve = async () => {
    const result = await onReserve();
    if (result?.success) {
      setReserveStatus('Reservation successful!');
    } else {
      setReserveStatus('Reservation failed.');
    }
  };

  return (
    <div>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <img
            src={book.coverimage}
            alt="A picture of our book"
        />
          <p>{book.description}</p>
          <button onClick={handleReserve}>Checkout</button>
          {reserveStatus && <p>{reserveStatus}</p>}
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}

export default SingleBook