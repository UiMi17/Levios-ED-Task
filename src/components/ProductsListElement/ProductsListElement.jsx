import PropTypes from "prop-types";
import {
  StyledCategory,
  StyledImage,
  StyledLink,
  StyledListItem,
  StyledPrice,
} from "./StyledProductsListElement";

const ProductsListElement = ({ bsr_category, img, link, name, price }) => {
  return (
    <StyledListItem>
      <StyledImage src={img} alt={name} />
      <StyledLink href={link}>{name}</StyledLink>
      <StyledPrice>Price: {price}</StyledPrice>
      <StyledCategory>Category: {bsr_category}</StyledCategory>
    </StyledListItem>
  );
};

ProductsListElement.propTypes = {
  bsr_category: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ProductsListElement;
