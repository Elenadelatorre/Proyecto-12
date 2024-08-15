// Obtener favoritos del localStorage
export const getFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

// Guardar favoritos en el localStorage
export const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// Obtener calificaciones del localStorage
export const getRatingsFromLocalStorage = () => {
  const savedRatings = localStorage.getItem('ratings');
  return savedRatings ? JSON.parse(savedRatings) : {};
};

// Guardar calificaciones en el localStorage
export const saveRatingsToLocalStorage = (ratings) => {
  localStorage.setItem('ratings', JSON.stringify(ratings));
};
