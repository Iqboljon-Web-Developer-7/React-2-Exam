import React from "react";
import { Outlet } from "react-router-dom";
import SupHeader from "../supHeader/SupHeader";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <SupHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
