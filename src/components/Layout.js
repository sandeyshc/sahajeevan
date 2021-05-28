import React from "react";

import { Image } from "react-bootstrap";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/LandingPage/Hero";
import "./Layout.scss";

function Layout({ children, heroImg, heroData, bannerContent, isHomePage }) {
  return (
    <div className="layout">
      <div className="layout__header homepage_header">
        <Image src={heroImg} alt="hero image" className={"layout__header__hero__image " + (isHomePage ? "homeImg" : "")} />
        <Header />
        <Hero data={heroData}>
          {bannerContent}
        </Hero>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
