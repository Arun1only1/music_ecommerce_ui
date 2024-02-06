import { Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ProductDetail = () => {
  return (
    <Grid container sx={{ mt: "5rem" }}>
      <Grid item xs={12} md={6}>
        <img
          style={{ objectFit: "cover", height: "700px", width: "90%" }}
          src="https://my.sharp/sites/default/files/uploads/2021-09/4%20Best%20Reasons%20Why%20TVs%20Can%20Improve%20Your%20Lifestyle-%20SHARP%20Malaysia.jpg"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          pr: "5rem",
        }}
      >
        <Typography variant="h4">TV</Typography>
        <Typography variant="h5">Samsung</Typography>
        <Stack sx={{ width: "30%" }}>
          <Chip
            label="Electronics"
            color="primary"
            variant="outlined"
            size="medium"
          />
        </Stack>

        <Typography textAlign="justify">
          Introducing our cutting-edge projector, a perfect blend of innovation
          and performance for an immersive audio-visual experience. Boasting 4K
          Ultra HD resolution, this sleek device delivers crystal-clear images
          with vibrant colors and exceptional clarity. Its advanced LED
          technology ensures long-lasting brightness, while the dynamic contrast
          ratio enhances the depth of every scene. Introducing our cutting-edge
          projector, a perfect blend of innovation and performance for an
          immersive audio-visual experience. Boasting 4K Ultra HD resolution,
          this sleek device delivers crystal-clear images with vibrant colors
          and exceptional clarity. Its advanced LED technology ensures
          long-lasting brightness, while the dynamic contrast ratio enhances the
          depth of every scene
        </Typography>
        <Typography>Price:Rs.7500</Typography>
        <Typography>Available quantity:5</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
