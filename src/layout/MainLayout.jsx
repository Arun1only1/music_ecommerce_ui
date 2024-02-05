import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSnackbar from "../components/CustomSnackbar";

const MainLayout = () => {
  return (
    <>
      <CustomSnackbar />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
