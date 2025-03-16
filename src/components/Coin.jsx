import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then(response => response.json())
      .then(data => setCoin(data.data));
  }, [id]);

  if (!coin) return <div>Loading...</div>;

  return (
    <div>
      <h1>{coin.name} ({coin.symbol})</h1>
      <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
      <p>Market Cap: ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
      <p>24h Volume: ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
      <button onClick={() => addToFavorites(coin)}>Add to Favorites</button>
    </div>
  );
}

function addToFavorites(coin) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.some(fav => fav.id === coin.id)) {
    favorites.push(coin);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export default Coin;