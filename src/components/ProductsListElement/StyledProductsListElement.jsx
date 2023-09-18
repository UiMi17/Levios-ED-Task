import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
`;

export const StyledImage = styled.img`
  width: 320px;
  height: auto;
`;

export const StyledPrice = styled.p`
  font-weight: bold;
`;

export const StyledCategory = styled.p`
  color: #999;
`;

export const StyledLink = styled.a`
  color: #0066c0;

  &:hover {
    text-decoration: underline;
  }
`;
