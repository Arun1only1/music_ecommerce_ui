import React from "react";
import SellerProductList from "./SellerProduct";
import BuyerProductList from "./BuyerProduct";
import { Box, Button, Input, InputAdornment, Stack } from "@mui/material";
import ProductFilter from "../components/ProductFilter";
import SearchProduct from "../components/SearchProduct";
import { useDispatch } from "react-redux";
import { clearFilter } from "../store/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("role");

  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(clearFilter());
          }}
        >
          Clear Filter
        </Button>
        <ProductFilter />
        <SearchProduct />
      </Stack>

      <Box
        sx={{
          mt: "5rem",
        }}
      >
        {userRole === "seller" ? <SellerProductList /> : <BuyerProductList />}
      </Box>
    </>
  );
};

export default ProductList;
