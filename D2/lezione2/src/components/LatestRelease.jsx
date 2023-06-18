import React, { useState, useEffect } from 'react';

const LatestRelease = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Funzione per leggere il file JSON
    const fetchBooks = async () => {
      try {
        const response = await fetch('../materiale/fantasy.json'); // Sostituisci con il percorso corretto del tuo file JSON
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Ultime uscite</h2>
      <div className="grid">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestRelease;
