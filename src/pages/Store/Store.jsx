import React, { useContext } from 'react';
import './Store.css';
import ProductCard from '../../components/Store/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import useFetchProducts from '../../hooks/useFetchProducts';
import useProductFilter from '../../hooks/useProductFilter';
import FilterControls from '../../components/Store/FilterControls/FilterControls';
import FavoritesContext from '../../components/Store/Providers/FavoritesContext';

const Store = () => {
  const { products, loading } = useFetchProducts(
    'https://fakestoreapi.com/products/category/electronics'
  );
  const { getRating } = useContext(FavoritesContext);
  const { sortedProducts, setSearchTerm, setSortOrder } =
    useProductFilter(products, getRating);

  return (
    <main id='products-container'>
      {loading && <Loading />}
      <FilterControls
        setSearchTerm={setSearchTerm}
        setSortOrder={setSortOrder}
      />
      <div id='products'>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Store;
