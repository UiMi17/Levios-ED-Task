import { useCallback, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import useProducts from "../hooks/useProducts";
import { useTranslation } from "react-i18next";
// import { fetchProducts } from "../services/mockAPI";
import ProductsList from "../components/ProductsList/ProductsList";
import Filter from "../components/Filter/Filter";
import ErrorBoundary from "../highOrderedComponents/ErrorBoundary";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const products = useProducts();
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 700);
  const [selectedCategory, setSelectedCategory] = useState("none");
  const { t } = useTranslation();
  const categories = [
    ...new Set(products.map(({ bsr_category }) => bsr_category)),
  ];

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const products = await fetchProducts();

  //     setProducts(products);
  //   };

  //   getProducts();
  // }, []);

  const handleFilterInputChange = useCallback((value) => {
    setFilter(value);
  }, []);

  const handleFilterCategoryChange = (value) => {
    setSelectedCategory(value);
  };

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
      <ErrorBoundary
        fallback={<h1 style={{ textAlign: "center" }}>{t("boundaryError")}</h1>}
      >
        <ProductsList products={filteredProducts} />
      </ErrorBoundary>
    </>
  );
};

export default Products;
