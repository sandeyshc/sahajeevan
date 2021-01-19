import React from "react";
import "./SmallCard.scss";
import { Card, Image } from "react-bootstrap";

import Arrow from "../../assets/icons/svg icon/Right.svg";
import Camera from "../../assets/icons/svg icon/camera.svg";

function SmallCard({
  data: { language, title, education, profession, pictureCount },
  children,
}) {
  return (
    <Card className="smallcard">
      <span className="smallcard__pictures">
        <Image src={Camera} alt="camera" height="13px" />
        <span className="smallcard__pictures__count">{pictureCount}</span>
      </span>
      <button className="smallcard__button">
        Send Interest
        <Image
          src={Arrow}
          alt="right arrow"
          className="smallcard__button__icon"
        />
      </button>
      {children}
      <div className="smallcard__content">
        <p className="smallcard__content__title">{title}</p>
        <p className="smallcard__content__location">{language}</p>
        <p className="smallcard__content__education">{education}</p>
        <p className="smallcard__content__profession">{profession}</p>
      </div>
    </Card>
  );
}

export default SmallCard;
