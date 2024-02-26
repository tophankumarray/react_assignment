import React from "react";
import Sidebar from "../Component/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Component/Navbar";
import OrderList from "../Order/OrderList";

const Order = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <OrderList />
        </Box>
      </Box>
    </>
  );
};

export default Order;
