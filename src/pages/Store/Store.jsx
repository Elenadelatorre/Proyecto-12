import './Store.css';
import { useState, useEffect, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/Store/ProductCard/ProductCard';

// Componente 'Store' para obtener los productos de la tienda:
const Store = () => {
  const [products, setProducts] = useState([]); // Almacenar la lista de productos.
  const [loading, setLoading] = useState(true); // Indicar si los datos se están cargando.

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
    <main id='products'>
      {loading && <Loading />}
      {/* Iterar sobre el array de productos y renderiza un 'ProductCard' para cada producto. */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Store;
