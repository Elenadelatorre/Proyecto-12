import { useState, useMemo } from 'react';

// Custom Hook para filtrar y ordenar los productos:
const useProductFilter = (products, getRating) => {
  const [searchTerm, setSearchTerm] = useState(''); // Búsqueda
  const [sortOrder, setSortOrder] = useState(''); // Filtro

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
    } else if (sortOrder === 'rating-desc') {
      sorted.sort((a, b) => (getRating(a.id) || 0) - (getRating(b.id) || 0));
    } else if (sortOrder === 'rating-asc') {
      sorted.sort((a, b) => (getRating(b.id) || 0) - (getRating(a.id) || 0));
    }
    return sorted;
  }, [filteredProducts, sortOrder, getRating]);

  return {
    sortedProducts,
    setSearchTerm,
    setSortOrder
  };
};

export default useProductFilter;
