import { useState, useMemo } from 'react';

const useProductFilter = (products) => {
  const [searchTerm, setSearchTerm] = useState(''); //Búsqueda
  const [sortOrder, setSortOrder] = useState(''); //Filtro

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearchTerm = searchTerm
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesSearchTerm;
    });
  }, [products, searchTerm]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortOrder === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating-asc') {
      sorted.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortOrder === 'rating-desc') {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return sorted;
  }, [filteredProducts, sortOrder]);

  return {
    sortedProducts,
    setSearchTerm,
    setSortOrder
  };
};

export default useProductFilter;
