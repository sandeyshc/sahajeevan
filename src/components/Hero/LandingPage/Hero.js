import React from "react";
import "./Hero.scss";
import HeroBanner from "./HeroBanner";

function Hero({ data: { isSmallBanner, title, subtitle } }) {
  return (
    <div className={isSmallBanner ? "banner" : "hero"}>
      <HeroBanner title={title} subtitle={subtitle} />
    </div>
  );
}

export default Hero;
