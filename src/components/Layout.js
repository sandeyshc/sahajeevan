import React from "react";

import { Image } from "react-bootstrap";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/LandingPage/Hero";
import "./Layout.scss";

function Layout({ children, heroImg, heroData }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Image src={heroImg} className="layout__header__hero__image" alt="hero image" />
        <Header isLoggedIn={heroData?.isLoggedIn} />
        <Hero data={heroData} />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
