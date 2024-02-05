import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const categories = [
  "electronics",
  "clothing",
  "grocery",
  "cosmetics",
  "toys",
  "furniture",
  "sports",
  "stationery",
];
const AddProduct = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        width: "100vw",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          brand: "",
          price: 0,
          quantity: 1,
          category: "",
          image: null,
          description: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, "Name must be at max 30 characters.")
            .required("Name is required.")
            .trim(),
          brand: Yup.string()
            .max(30, "Brand must be at max 30 characters.")
            .required("Brand is required.")
            .trim(),
          price: Yup.number().min(0).required("Price is required."),
          quantity: Yup.number().min(1).required("Quantity is required."),
          category: Yup.string().oneOf(categories),
          image: Yup.string().nullable(),
          description: Yup.string()
            .required("Description is required.")
            .trim()
            .max(1000, "Description must be at max 1000 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit, getFieldProps }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "2rem",
              minWidth: "500px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Typography variant="h4">Add product</Typography>

            <FormControl>
              <TextField
                variant="outlined"
                label="Name"
                {...getFieldProps("name")}
              />
              {touched.name && errors.name ? (
                <FormHelperText error>{errors.name}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Brand"
                {...getFieldProps("brand")}
              />
              {touched.brand && errors.brand ? (
                <FormHelperText error>{errors.brand}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Price"
                type="number"
                {...getFieldProps("price")}
              />
              {touched.price && errors.price ? (
                <FormHelperText error>{errors.price}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Quantity"
                type="number"
                {...getFieldProps("quantity")}
              />
              {touched.quantity && errors.quantity ? (
                <FormHelperText error>{errors.quantity}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" {...getFieldProps("category")}>
                {categories.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      <Typography sx={{ textTransform: "capitalize" }}>
                        {item}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Description"
                multiline
                rows={4}
                {...getFieldProps("description")}
              />
              {touched.description && errors.description ? (
                <FormHelperText error>{errors.description}</FormHelperText>
              ) : null}
            </FormControl>

            <Button type="submit" variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;
