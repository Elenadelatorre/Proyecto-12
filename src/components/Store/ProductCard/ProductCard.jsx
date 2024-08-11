import React, { useReducer, useEffect, memo } from 'react';
import './ProductCard.css';
import { useFavorites } from '../Providers/FavoriteContext';
import { reducer, initialState } from '../../../utils/reducer';

const ProductCard = memo(({ product }) => {
  console.log('Soy el componente ProductCard y me re-renderizo');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    dispatch({ type: 'SET_IS_FAV', payload: isFavorite(product.id) });
  }, [isFavorite, product.id]);

  const handleRatingClick = (newRating) => {
    dispatch({ type: 'SET_RATING', payload: newRating });
    // Aquí puedes enviar la calificación al servidor
  };

  const toggleFavorite = () => {
    if (state.isFav) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    dispatch({ type: 'TOGGLE_FAVORITE' });
  };
  ;
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
          return (
            <span
              key={index}
              className={`star ${
                starRating <= (state.hoveredRating || state.rating)
                  ? 'filled'
                  : ''
              }`}
              onClick={() => handleRatingClick(starRating)}
              onMouseEnter={() =>
                dispatch({ type: 'SET_HOVERED_RATING', payload: starRating })
              }
              onMouseLeave={() =>
                dispatch({ type: 'SET_HOVERED_RATING', payload: state.rating })
              }
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
