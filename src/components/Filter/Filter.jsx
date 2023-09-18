import PropTypes from "prop-types";
import { StyledFilterForm, StyledFilterInput } from "./StyledFilter";
import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({});

const Filter = ({ handleFilterInputChange }) => {
  const formik = useFormik({
    initialValues: {
      filter: "",
    },
  });
  return (
    <StyledFilterForm>
      <label>
        <StyledFilterInput
          type="text"
          name="filter"
          value={formik.values.filter}
          onChange={(ev) => {
            formik.handleChange(ev);
            handleFilterInputChange(ev);
          }}
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
