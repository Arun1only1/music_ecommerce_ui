import React from "react";
import { Outlet } from "react-router-dom";
import CustomSnackbar from "../components/CustomSnackbar";
import "../App.css";
const MinimumLayout = () => {
  return (
    <>
      <CustomSnackbar />
      <Outlet />
    </>
  );
};

export default MinimumLayout;
