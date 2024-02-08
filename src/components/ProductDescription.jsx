import { Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDescription = ({
  name,
  brand,
  category,
  price,
  description,
  quantity,
  _id,
}) => {
  const userRole = localStorage.getItem("role");

  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Grid item>
        <Typography variant="h4">{name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">{brand}</Typography>
      </Grid>

      <Grid item sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Typography variant="h6">Rs.</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {price}
        </Typography>
      </Grid>

      <Grid item>
        <Typography textAlign="justify" variant="h6">
          {description}
        </Typography>
      </Grid>

      <Grid item sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Typography variant="h6">Available quantity:</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {quantity}
        </Typography>
      </Grid>

      <Grid item>
        <Chip
          sx={{ textTransform: "capitalize", fontSize: "1.2rem" }}
          label={category}
          color="warning"
          variant="outlined"
          size="medium"
        />
      </Grid>

      <Grid item mt="1rem">
        {userRole === "seller" ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate(`/product/edit/${_id}`);
            }}
          >
            Edit Product
          </Button>
        ) : (
          <Button variant="contained" color="success">
            Add to cart
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
