import {
  Box,
  CircularProgress,
  FormControl,
  Input,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import $axios from "../../lib/axios.instance";
import ProductCard from "../components/ProductCard";
import SearchIcon from "@mui/icons-material/Search";

const BuyerProductList = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["buyer-product-list", page, searchText],
    queryFn: async () => {
      return await $axios.post("/product/buyer/list", {
        page,
        limit: 9,
        searchText,
      });
    },
  });

  const productList = data?.data?.products;
  const totalPages = data?.data?.numberOfPages;

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <FormControl
        variant="standard"
        sx={{
          m: "0 3rem 3rem 0",
          display: "grid",
          placeContent: "flex-end",
        }}
      >
        <Input
          onChange={(event) => {
            setSearchText(event?.target?.value);
          }}
          value={searchText}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
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
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", mt: "4rem" }}
      >
        <Pagination
          page={page}
          count={totalPages}
          color="secondary"
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </Stack>
    </>
  );
};

export default BuyerProductList;
