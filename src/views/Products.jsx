import { useCallback, useEffect, useState } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { fetchProducts } from "../services/mockAPI";
import Filter from "../components/Filter/Filter";
import ErrorBoundary from "../highOrderedComponents/ErrorBoundary";
import { useDebounce } from "../hooks/useDebounce";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 700);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("none");

  const handleFilterInputChange = useCallback((value) => {
    setFilter(value);
  }, []);

  const handleFilterCategoryChange = (ev) => {
    setSelectedCategory(ev.target.value);
  };

  useEffect(() => {
    const handleProducts = async () => {
      const products = await fetchProducts();

      setCategories((prevCategories) => {
        const categoriesToSet = products.reduce(
          (acc, { bsr_category }) => {
            if (!acc.includes(bsr_category)) {
              acc.push(bsr_category);
            }
            return acc;
          },
          [...prevCategories]
        );
        return categoriesToSet;
      });

      setProducts(products);
    };

    handleProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(debouncedFilter.toLowerCase()) &&
      (selectedCategory === "none" || product.bsr_category === selectedCategory)
    );
  });

  return (
    <>
      <Filter
        handleFilterInputChange={handleFilterInputChange}
        categories={categories}
        handleFilterCategoryChange={handleFilterCategoryChange}
      />
      <ErrorBoundary fallback={<h1>Oops. Something went wrong</h1>}>
        <ProductsList products={filteredProducts} />
      </ErrorBoundary>
    </>
  );
};

export default Products;
