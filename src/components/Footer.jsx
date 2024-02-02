import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      sx={{
        marginTop: "70vh",
        background: "#E8D8C4",
        width: "100vw",
        minHeight: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>Copyright @ Nepal mart 2024</Typography>
    </Stack>
  );
};

export default Footer;
