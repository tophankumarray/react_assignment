import React from "react";
import "./app.css";
// import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Channel from './pages/Channel';
import Shipping from './pages/Shipping';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/order" element={<Order />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
