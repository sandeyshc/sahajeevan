import React from "react";
import "./Hero.scss";
import HeroBanner from "./HeroBanner";

function Hero({ data: { isSmallBanner, ...bannerProps }, children}) {
  return (
    <div className={"col-xl-10 justify-content-right " + (isSmallBanner ? "banner" : "hero")}>
      <HeroBanner {...bannerProps} />
      {children}
    </div>
  );
}

export default Hero;
