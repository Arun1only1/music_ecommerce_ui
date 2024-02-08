import {
  Box,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProductImage from "../components/ProductImage";
import ProductDescription from "../components/ProductDescription";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import $axios from "../../lib/axios.instance";

const ProductDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["product-detail"],
    queryFn: async () => {
      return await $axios.get(`/product/details/${id}`);
    },
  });

  const productData = data?.data?.product;
  console.log(productData);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "7rem",
        gap: "1rem",
        padding: "2rem",
        width: "85%",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <ProductImage imageUrl={productData?.image} />
      <ProductDescription {...productData} />
    </Box>
  );
};

export default ProductDetail;
