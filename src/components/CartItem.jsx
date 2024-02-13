import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation, useQueryClient } from "react-query";
import $axios from "../../lib/axios.instance";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbar.slice";
import Loader from "./Loader";

const CartItem = ({ _id, name, price, brand, orderedQuantity, productId }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteCartItem } = useMutation({
    mutationKey: ["delete-cart-item"],
    mutationFn: async () => {
      return await $axios.delete(`/cart/remove/${_id}`);
    },
    onSuccess: (response) => {
      dispatch(openSuccessSnackbar(response?.data?.message));
      queryClient.invalidateQueries("cart-list");
      queryClient.invalidateQueries("cart-item-count");
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  const { isLoading: isUpdateQuantityLoading, mutate: updateCartItemQuantity } =
    useMutation({
      mutationKey: ["update-cart-quantity"],
      mutationFn: async (action) => {
        return await $axios.put("/cart/item/update-quantity", {
          productId,
          action,
        });
      },
      onSuccess: (res) => {
        // dispatch(openSuccessSnackbar(res?.data?.message));
        queryClient.invalidateQueries("cart-list");
      },
      onError: (error) => {
        dispatch(openErrorSnackbar(error?.response?.data?.message));
      },
    });

  return (
    <Box sx={{ mt: "1rem" }}>
      {(isUpdateQuantityLoading || isLoading) && (
        <LinearProgress color="secondary" />
      )}
      <Grid
        container
        sx={{
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      >
        <Grid item>
          <img
            src="https://www.lg.com/np/images/tvs/md07531468/gallery/N01_D1.jpg"
            alt=""
            style={{
              height: "150px",
            }}
          />
        </Grid>

        <Grid item>
          <Stack
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography variant="h6">{name}</Typography>
            <Chip label={brand} color="secondary" />
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h6">Rs.{price}</Typography>
        </Grid>

        <Grid item>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <IconButton
              disabled={isUpdateQuantityLoading}
              onClick={() => {
                updateCartItemQuantity("inc");
              }}
            >
              <AddIcon />
            </IconButton>
            <Typography variant="h5">{orderedQuantity}</Typography>
            <IconButton
              onClick={() => {
                updateCartItemQuantity("dec");
              }}
              disabled={orderedQuantity === 1}
            >
              <RemoveIcon />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item>
          <IconButton color="error" onClick={deleteCartItem}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
