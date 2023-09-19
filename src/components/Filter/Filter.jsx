import PropTypes from "prop-types";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { StyledFilterForm, StyledFilterLabel } from "./StyledFilter";
import { useFormik } from "formik";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  filter: Yup.string().min(3, "Minimum 3 letters required"),
});

const Filter = ({
  handleFilterInputChange,
  categories,
  handleFilterCategoryChange,
}) => {
  const formik = useFormik({
    initialValues: {
      filter: "",
      category: "none",
    },
    validationSchema,
    validateOnChange: true,
  });

  useEffect(() => {
    if (!formik.errors.filter && !formik.isValidating) {
      handleFilterInputChange(formik.values.filter);
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
          error={formik.errors.filter !== undefined}
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
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
          </InputLabel>
          <NativeSelect
            value={formik.values.category}
            onChange={(ev) => {
              formik.handleChange(ev);
              handleFilterCategoryChange(ev);
            }}
            inputProps={{
              name: "category",
            }}
          >
            <option value="none">None</option>
            {categories.map((category) => {
              return (
                <option key={nanoid()} value={category}>
                  {category}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </StyledFilterLabel>
    </StyledFilterForm>
  );
};

Filter.propTypes = {
  handleFilterInputChange: PropTypes.func,
  handleFilterCategoryChange: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default Filter;
