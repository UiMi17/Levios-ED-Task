import PropTypes from "prop-types";
import * as Yup from "yup";
import {
  StyledFilterForm,
  StyledFilterInput,
  StyledErrorMessage,
} from "./StyledFilter";
import { useFormik } from "formik";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  filter: Yup.string().min(3, "Minimum 3 letters required"),
});

const Filter = ({ handleFilterInputChange }) => {
  const formik = useFormik({
    initialValues: {
      filter: "",
    },
    validationSchema,
    validateOnChange: true,
  });

  useEffect(() => {
    if (!formik.errors.filter && !formik.isValidating) {
      handleFilterInputChange(formik.values.filter);
      console.log("request");
    }
  }, [
    formik.values.filter,
    formik.errors.filter,
    formik.isValidating,
    handleFilterInputChange,
  ]);

  return (
    <StyledFilterForm>
      <label>
        <StyledFilterInput
          type="text"
          name="filter"
          value={formik.values.filter}
          onChange={formik.handleChange}
          placeholder="Search for a product"
        />
        {formik.errors.filter ? (
          <StyledErrorMessage>{formik.errors.filter}</StyledErrorMessage>
        ) : null}
      </label>
    </StyledFilterForm>
  );
};

Filter.propTypes = {
  handleFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
