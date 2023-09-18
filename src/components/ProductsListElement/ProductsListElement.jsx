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

export default ProductsListElement;
