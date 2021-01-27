import React from "react";
import "./Hero.scss";
import HeroBanner from "./HeroBanner";

function Hero({ data: { isSmallBanner, ...bannerProps }, children}) {
  return (
    <div className={"col-lg-10 " + (isSmallBanner ? "banner" : "hero")}>
      <HeroBanner {...bannerProps} className="col-lg-6" />
      {children}
    </div>
  );
}

export default Hero;
