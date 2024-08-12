import React, { useReducer, useEffect, useCallback, memo } from 'react';
import './ProductCard.css';
import { reducer, initialState } from '../../../utils/reducer';
import useFavorites from '../../../hooks/useFavorites';

// Componente para renderizar cada producto en la tienda:
const ProductCard = memo(({ product }) => {
  const { addFavorite, removeFavorite, isFavorite, getRating, setRating } = useFavorites();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    isFav: isFavorite(product.id),
    rating: getRating(product.id),  // Inicializa el rating desde el contexto
  });

  useEffect(() => {
    const currentIsFav = isFavorite(product.id);
    if (state.isFav !== currentIsFav) {
      dispatch({ type: 'SET_IS_FAV', payload: currentIsFav });
    }
  }, [isFavorite, product.id, state.isFav]);

  const handleRatingClick = useCallback((newRating) => {
    if (newRating !== state.rating) {
      setRating(product.id, newRating);  // Guarda el rating en el contexto
      dispatch({ type: 'SET_RATING', payload: newRating });
    }
  }, [state.rating, product.id, setRating]);

  const toggleFavorite = useCallback(() => {
    const newFavStatus = !state.isFav;
    
    if (newFavStatus) {
      addFavorite(product);
    } else {
      removeFavorite(product.id);
    }

    dispatch({ type: 'SET_IS_FAV', payload: newFavStatus });
  }, [state.isFav, addFavorite, removeFavorite, product]);

  return (
    <div className='product-card'>
      <div className='img_wrp'>
        <img src={product.image} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <div className='rating' aria-label='Rating'>
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;
          const isFilled = starRating <= state.rating;
          return (
            <span
              key={index}
              className={`star ${isFilled ? 'filled' : ''}`}
              onClick={() => handleRatingClick(starRating)}
              aria-label={`Rate ${starRating} stars`}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <button
        className={`favorite-btn ${state.isFav ? 'favorited' : ''}`}
        onClick={toggleFavorite}
        aria-pressed={state.isFav}
      >
        {state.isFav ? '❤️' : '🤍'}
      </button>
    </div>
  );
});

export default ProductCard;