import React from "react";
import Sidebar from "../Component/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Component/Navbar";


const Channel = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Channel</h1>
        </Box>
      </Box>
    </>
  );
};

export default Channel;
