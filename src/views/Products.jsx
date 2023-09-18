import { useCallback, useEffect, useState } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { fetchProducts } from "../services/mockAPI";
import Filter from "../components/Filter/Filter";
import ErrorBoundary from "../highOrderedComponents/ErrorBoundary";
import { useDebounce } from "../hooks/useDebounce";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 800);

  const handleFilterInputChange = useCallback(
    (value) => {
      setFilter(value);
    },
    []
  );

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProducts(products);
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(debouncedFilter.toLowerCase());
  });

  return (
    <>
      <Filter handleFilterInputChange={handleFilterInputChange} />
      <ErrorBoundary fallback={<h1>Oops. Something went wrong</h1>}>
        <ProductsList products={filteredProducts} />
      </ErrorBoundary>
    </>
  );
};

export default Products;
