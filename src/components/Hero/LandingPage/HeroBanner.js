import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="herobanner">
      <p className="herobanner__title">Lorem Ipsum is simply the dummy text for printing.</p>
      <p className="herobanner__subtitle">
        Lorem ipsum is simply dummy text for printing and typesetting
        industry. Loreum ipsum has been the industry's.
      </p>
      <button className="herobanner__btn">
          Read More
      </button>
    </div>
  );
}

export default HeroBanner;
