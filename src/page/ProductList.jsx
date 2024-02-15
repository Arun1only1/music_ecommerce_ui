import React from "react";
import SellerProductList from "./SellerProduct";
import BuyerProductList from "./BuyerProduct";
import { Box, Input, InputAdornment } from "@mui/material";

const ProductList = () => {
  const userRole = localStorage.getItem("role");

  return (
    <Box
      sx={{
        mt: "5rem",
      }}
    >
      {userRole === "seller" ? <SellerProductList /> : <BuyerProductList />}
    </Box>
  );
};

export default ProductList;
