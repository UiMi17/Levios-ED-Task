import PropTypes from "prop-types";
import ProductsListElement from "../ProductsListElement/ProductsListElement";
import { Container, Grid } from "@mui/material";

const ProductsList = ({ products }) => {
  return products.length !== 0 ? (
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
  ) : (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <h1>Sorry, there's nothing found!</h1>
    </Container>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
