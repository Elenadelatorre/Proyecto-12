import './Store.css';
import { useState, useEffect, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/Store/ProductCard/ProductCard';
import useProductFilter from '../../hooks/useProductFilter';

// Componente 'Store' para obtener los productos de la tienda:
const Store = () => {
  const [products, setProducts] = useState([]); // Almacenar la lista de productos.
  const [loading, setLoading] = useState(true); // Indicar si los datos se están cargando.
  const { sortedProducts, setSearchTerm, setSortOrder } =
    useProductFilter(products);
  // Crear un componente para obtener los productos:
  const fetchProducts = useCallback(async () => {
    console.log('Soy el componente Store y me re-renderizo');
    setLoading(true);

    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Detener el loading
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Renderizar cuando se actualice el componente.

  return (
    <main id='products-container'>
      {loading && <Loading />}
      {/* Controles de filtro y ordenamiento */}
      <div className='filter-controls'>
        <input
          type='text'
          placeholder='¿Qué estás buscando?'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value=''>Ordenar por</option>
          <option value='price-asc'>Precio de menor a mayor</option>
          <option value='price-desc'>Precio de mayor a menor</option>
          <option value='rating-asc'>Más valorados</option>
          <option value='rating-desc'>Menos valorados</option>
        </select>
      </div>
      {/* Iterar sobre el array de productos y renderiza un 'ProductCard' para cada producto. */}
      <div id='products'>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Store;
