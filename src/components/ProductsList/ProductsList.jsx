import ProductsListElement from "../ProductsListElement/ProductsListElement";

const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map(({ asin, bsr_category, img, link, name, price }) => {
        return (
          <ProductsListElement
            key={asin}
            bsr_category={bsr_category}
            img={img}
            link={link}
            name={name}
            price={price}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
