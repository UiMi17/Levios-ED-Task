import PropTypes from "prop-types";
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

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
