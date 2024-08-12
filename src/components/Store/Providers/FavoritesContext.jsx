// FavoritesProvider.jsx
import React, { createContext, useState, useCallback } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  const addFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  }, []);

  const removeFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter((product) => product.id !== productId)
    );
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.some((product) => product.id === productId);
  }, [favorites]);

  const setRating = useCallback((productId, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [productId]: rating }));
  }, []);

  const getRating = useCallback((productId) => {
    return ratings[productId] || 0;
  }, [ratings]);

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addFavorite, 
      removeFavorite, 
      isFavorite,
      setRating,
      getRating,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
