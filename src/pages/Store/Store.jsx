import './Store.css';
import { useState, useEffect, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/Store/ProductCard/ProductCard';

const Store = () => {
  const [products, setProducts] = useState([]); // Almacenar la lista de productos.
  const [loading, setLoading] = useState(true); // Indicar si los datos se están cargando.

  // Función para obtener los productos
  const fetchProducts = useCallback(async () => {
    console.log('Soy el componente Store y me re-renderizo');
    setLoading(true); // Establecer el estado de la carga a TRUE (cargando) antes de ejecutar el fetch.

    try {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      const data = await response.json();
      console.log('Fetched products:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Asegúrate de detener el estado de carga incluso si ocurre un error.
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Dependencia en fetchProducts

  

  return (
    <main id='products'>
      {/* Mostrar el componente "Loading" cuando el estado de la variable "loading" es TRUE (cargando) */}
      {loading && <Loading />}
      {/* Iterar sobre el array de productos y renderiza un 'ProductCard' para cada producto. */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Store;
