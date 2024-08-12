// useFavorites.jsx
import { useContext } from 'react';
import FavoritesContext from '../components/Store/Providers/FavoritesContext';


const useFavorites = () => {
  return useContext(FavoritesContext);
};

export default useFavorites;
