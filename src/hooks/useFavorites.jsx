import { useContext } from 'react';
import FavoritesContext from '../components/Store/Providers/FavoritesContext';

// Custom hook para acceder al contexto de favoritos:
const useFavorites = () => {
  return useContext(FavoritesContext);
};

export default useFavorites;
