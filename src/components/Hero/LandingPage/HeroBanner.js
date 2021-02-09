import React from "react";
import "./HeroBanner.scss";

function HeroBanner({ title, subtitle, btnText, profileView }) {
  return (
    <div className={`herobanner ${profileView ? "view" : ""}`}>
      <p className="herobanner__title">{title}</p>
      <p className="herobanner__subtitle">{subtitle}</p>
      {btnText && <button className="herobanner__btn">{btnText}</button>}
    </div>
  );
}

export default HeroBanner;
