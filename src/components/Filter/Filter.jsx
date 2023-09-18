import PropTypes from "prop-types";
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

Filter.propTypes = {
  handleFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
