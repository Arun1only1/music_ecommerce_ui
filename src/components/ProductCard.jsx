import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const ProductCard = ({ name, brand, price, description }) => {
  return (
    <Card
      sx={{
        width: "30%",
        boxShadow:
          " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <img
        height="300px"
        style={{ objectFit: "cover" }}
        src="https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/32_inch_LED_TV_1695036349175_1695036371179.JPG"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Chip label={brand} color="secondary" variant="outlined" />
        </Stack>

        <Typography variant="h6" gutterBottom>
          Rs.{price}
        </Typography>
        <Typography>{description}...</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: "1rem" }}>
        <Button size="medium" variant="contained" fullWidth color="success">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
