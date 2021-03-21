import React from "react";
import "./HeroBanner.scss";

function HeroBanner({ title, subtitle, btnText, profileView, className }) {
  return (
    <div className={`herobanner ${profileView ? "view" : ""} ${className || ''}`}>
      <p className="herobanner__title">{title}</p>
      <p className="herobanner__subtitle m-auto">{subtitle}</p>
      {btnText && <button className="herobanner__btn">{btnText}</button>}
    </div>
  );
}

export default HeroBanner;
