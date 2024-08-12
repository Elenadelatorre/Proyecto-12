import React, { createContext, useContext, useState, useCallback } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});  // Nuevo estado para las calificaciones

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
      setRating,  // Nuevo método para establecer calificación
      getRating,  // Nuevo método para obtener calificación
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
