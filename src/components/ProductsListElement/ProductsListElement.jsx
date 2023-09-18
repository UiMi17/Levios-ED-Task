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
      <StyledPrice>Ціна: {price}</StyledPrice>
      <StyledCategory>Категорія: {bsr_category}</StyledCategory>
    </StyledListItem>
  );
};

export default ProductsListElement;
