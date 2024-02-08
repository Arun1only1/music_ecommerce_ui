import { Grid } from "@mui/material";
import React from "react";

const ProductImage = ({ imageUrl }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <img
          style={{ objectFit: "cover", width: "100%", height: "600px" }}
          src={
            imageUrl ||
            "https://www.dcgpac.com/media/catalog/product/placeholder/default/original_4.png"
          }
        />
      </Grid>
    </Grid>
  );
};

export default ProductImage;
