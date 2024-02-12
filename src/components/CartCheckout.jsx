import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const CartCheckout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        gap: "1rem",
        padding: "2rem",
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <Typography variant="h4">Order summary</Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography>Sub total</Typography>
        <Typography>15500</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography>Discount </Typography>
        <Typography>500</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography>Grand total</Typography>
        <Typography>15000</Typography>
      </Stack>
      <Button variant="contained" color="success" fullWidth>
        <Typography>proceed to checkout</Typography>
      </Button>
    </Box>
  );
};

export default CartCheckout;
