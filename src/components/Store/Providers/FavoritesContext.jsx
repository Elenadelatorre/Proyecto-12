import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getFavoritesFromLocalStorage, saveFavoritesToLocalStorage, getRatingsFromLocalStorage, saveRatingsToLocalStorage } from '../../../utils/localStorageUtils';

// Crear el contexto de favoritos y calificaciones
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
  const [ratings, setRatings] = useState(getRatingsFromLocalStorage());

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
    saveRatingsToLocalStorage(ratings);
  }, [favorites, ratings]);

  // Funciones para manejar favoritos
  const addFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, product];
      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  }, []);

  const removeFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((product) => product.id !== productId);
      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (productId) => favorites.some((product) => product.id === productId),
    [favorites]
  );

  // Funciones para manejar calificaciones
  const setRating = useCallback((productId, rating) => {
    setRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings, [productId]: rating };
      saveRatingsToLocalStorage(updatedRatings);
      return updatedRatings;
    });
  }, []);

  const getRating = useCallback((productId) => ratings[productId] || 0, [ratings]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        setRating,
        getRating
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
