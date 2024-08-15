import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from '../../../utils/localStorageUtils';

// Crear el contexto de favoritos:
const FavoritesContext = createContext();

// Crear el proveedor de favoritos y calificaciones para poder acceder a ellos desde cualquier componente:
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  // Crear funciones para manipular favoritos:
  const addFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, product];
      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  }, []);

  const removeFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (product) => product.id !== productId
      );
      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (productId) => {
      return favorites.some((product) => product.id === productId);
    },
    [favorites]
  );

  // Crear funciones para manejar calificaciones:
  const setRating = useCallback((productId, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [productId]: rating }));
  }, []);

  const getRating = useCallback(
    (productId) => {
      return ratings[productId] || 0;
    },
    [ratings]
  );

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
