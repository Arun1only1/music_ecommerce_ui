import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SellerProductList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack justifyContent="center" alignItems="flex-end">
        <Button
          variant="contained"
          color="success"
          sx={{
            width: { xs: "100%", md: "10%" },
          }}
          onClick={() => {
            navigate("/product/add");
          }}
        >
          Add product
        </Button>
      </Stack>
    </>
  );
};

export default SellerProductList;
