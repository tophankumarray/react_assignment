import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";


const Shipping = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Shipping</h1>
        </Box>
      </Box>
    </>
  );
};

export default Shipping;
