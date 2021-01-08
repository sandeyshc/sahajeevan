import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/LandingPage/Hero";
import "./Layout.scss";

function Layout({ children, HeroImg }) {
  return (
    <div className="layout">
      <div className="layout__header">
        {HeroImg}
        <Header />
        <Hero />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
