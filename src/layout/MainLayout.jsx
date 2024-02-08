import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSnackbar from "../components/CustomSnackbar";
import { Box, Stack } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <CustomSnackbar />
      <Stack spacing={10}>
        <Header />

        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Stack>
    </>
  );
};

export default MainLayout;
