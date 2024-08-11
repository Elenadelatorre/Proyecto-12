import React from 'react';

// Ajusta la ruta según tu estructura
import { useFavorites } from '../../components/Store/Providers/FavoriteContext';
import ProductCard from '../../components/Store/ProductCard/ProductCard';

const LikedProducts = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Productos Favoritos</h1>
      {favorites.length > 0 ? (
        <div className='product-list'>
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No tienes productos favoritos.</p>
      )}
    </div>
  );
};

export default LikedProducts;
