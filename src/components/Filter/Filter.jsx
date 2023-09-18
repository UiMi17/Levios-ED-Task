import { StyledFilterForm, StyledFilterInput } from "./StyledFilter";

const Filter = ({ handleFilterInputChange }) => {
  return (
    <StyledFilterForm>
      <label>
        <StyledFilterInput
          type="text"
          onChange={handleFilterInputChange}
          placeholder="Search for a product"
        />
      </label>
    </StyledFilterForm>
  );
};

export default Filter;
