import React from "react";
import SellerProductList from "./SellerProduct";
import BuyerProductList from "./BuyerProduct";
import { Box } from "@mui/material";

const ProductList = () => {
  const userRole = localStorage.getItem("role");

  return (
    <Box
      sx={{
        mt: "5rem",
        padding: "2rem",
      }}
    >
      {userRole === "seller" ? <SellerProductList /> : <BuyerProductList />}
    </Box>
  );
};

export default ProductList;
