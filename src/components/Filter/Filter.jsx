import PropTypes from "prop-types";
import * as Yup from "yup";
import { StyledFilterForm, StyledFilterLabel } from "./StyledFilter";
import { useFormik } from "formik";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

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
    <StyledFilterForm onSubmit={(ev) => ev.preventDefault()}>
      <StyledFilterLabel>
        <TextField
          name="filter"
          error={formik.errors.filter}
          helperText={formik.errors.filter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fill: "rgba(15, 10, 222, 0.75)" }} />
              </InputAdornment>
            ),
          }}
          size="small"
          variant="standard"
          placeholder="Search for a product"
          onChange={formik.handleChange}
          sx={{ width: "320px" }}
        />
      </StyledFilterLabel>
    </StyledFilterForm>
  );
};

Filter.propTypes = {
  handleFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
