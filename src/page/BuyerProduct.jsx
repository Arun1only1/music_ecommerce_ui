import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import $axios from "../../lib/axios.instance";

const BuyerProductList = () => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["buyer-product-list"],
    queryFn: async () => {
      return await $axios.post("/product/buyer/list", {
        page: 1,
        limit: 10,
      });
    },
  });

  const productList = data?.data?.products;

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default BuyerProductList;
