import React from "react";
import "./HeroBanner.scss";

function HeroBanner({ title, subtitle, btnText }) {
  return (
    <div className="herobanner">
      <p className="herobanner__title">{title}</p>
      <p className="herobanner__subtitle">{subtitle}</p>
      {btnText && <button className="herobanner__btn">Read More</button>}
    </div>
  );
}

export default HeroBanner;
