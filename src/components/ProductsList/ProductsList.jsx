import PropTypes from "prop-types";
import ProductsListElement from "../ProductsListElement/ProductsListElement";
import { Grid } from "@mui/material";

const ProductsList = ({ products }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
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
    </Grid>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
