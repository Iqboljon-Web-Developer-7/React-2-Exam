import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import Products from "./products/Products";

const Pages = () => {
  return (
    <div className="font-Inter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Pages;
