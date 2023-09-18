import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { fetchProducts } from "../services/mockAPI";
import Filter from "../components/Filter/Filter";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterInputChange = (ev) => {
    const filterRequest = ev.target.value;
    setFilter(filterRequest);
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProducts(products);
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <Filter handleFilterInputChange={handleFilterInputChange} />
      <ProductsList products={filteredProducts} />
    </>
  );
};

export default Products;
