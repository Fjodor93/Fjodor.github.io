import React from "react";
import {Outlet} from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Outlet />
      <Menu />
      <Footer />
    </>
  );
};

export default Layout;