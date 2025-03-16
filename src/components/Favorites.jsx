import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(coin => (
            <li key={coin.id}>
              <Link to={`/coin/${coin.id}`}>{coin.name} ({coin.symbol})</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Elige tus favoritos ahora!</p>
      )}
    </div>
  );
}

export default Favorites;