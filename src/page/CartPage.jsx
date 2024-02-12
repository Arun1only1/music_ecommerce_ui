import React from "react";
import CartItem from "../components/CartItem";
import { Box, Button, Stack, Typography } from "@mui/material";
import CartCheckout from "../components/CartCheckout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import $axios from "../../lib/axios.instance";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbar.slice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["cart-list"],
    queryFn: async () => {
      return await $axios.get("/cart/item/list");
    },
  });

  const cartData = data?.data?.cartData;

  // clear cart
  const { isLoading: flushCartLoading, mutate: flushCart } = useMutation({
    mutationKey: ["flush-cart"],
    mutationFn: async () => {
      return await $axios.delete("/cart/flush");
    },
    onSuccess: (res) => {
      dispatch(openSuccessSnackbar(res?.data?.message));
      queryClient.invalidateQueries("cart-list");
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  if (isLoading || flushCartLoading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        flexWrap: "wrap",
      }}
    >
      <Stack direction="row" spacing={6} mb="2rem">
        <Typography variant="h4">Shopping cart</Typography>
        {cartData.length > 0 && (
          <Button variant="contained" onClick={flushCart}>
            Clear cart
          </Button>
        )}
      </Stack>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Stack sx={{ gap: "1rem" }}>
          {cartData.length === 0 && (
            <Button
              variant="contained"
              onClick={() => {
                navigate("/product/list");
              }}
            >
              Continue shopping
            </Button>
          )}
          {cartData.map((item) => {
            return <CartItem key={item._id} {...item} />;
          })}
        </Stack>
        <Stack>
          <CartCheckout />
        </Stack>
      </Box>
    </Box>
  );
};

export default CartPage;
