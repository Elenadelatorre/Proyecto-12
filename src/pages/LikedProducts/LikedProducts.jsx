import React from 'react';

// Ajusta la ruta según tu estructura

import ProductCard from '../../components/Store/ProductCard/ProductCard';
import useFavorites from '../../hooks/useFavorites';

const LikedProducts = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      {favorites.length > 0 ? (
        <div id='products'>
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
