import React, { useContext } from 'react';
import './LikedProducts.css';
import ProductCard from '../../components/Store/ProductCard/ProductCard';
import FavoritesContext from '../../components/Store/Providers/FavoritesContext';

//Componente para mostrar los productos favoritos:
const LikedProducts = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <main id='products'>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className='no-products'>No tienes productos favoritos.</p>
      )}
    </main>
  );
};

export default LikedProducts;
