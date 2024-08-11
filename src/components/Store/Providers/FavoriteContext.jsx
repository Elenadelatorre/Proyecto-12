import { createContext, useState, useCallback, useContext } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(new Set());

  const addFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => new Set(prevFavorites).add(product.id));
  }, []);

  const removeFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      newFavorites.delete(productId);
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.has(productId);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
