import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { fetchProducts } from "../services/mockAPI";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default Products;
