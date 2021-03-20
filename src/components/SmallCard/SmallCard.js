import React from "react";
import "./SmallCard.scss";
import { Card, Image } from "react-bootstrap";

import Arrow from "../../assets/icons/svg icon/Right.svg";
import Camera from "../../assets/icons/svg icon/camera.svg";

function SmallCard({
  data: {
    mother_tongue,
    name,
    height,
    occupation,
    total_photos,
    location,
    birth_date,
  },
  children,
}) {
  return (
    <Card className="smallcard">
      <span className="smallcard__pictures">
        <Image src={Camera} alt="camera" height="13px" />
        <span className="smallcard__pictures__count">{total_photos}</span>
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
        <p className="smallcard__content__title pb-2">{name}</p>
        <p className="smallcard__content__location">{birth_date}</p>
        <p className="smallcard__content__location">{mother_tongue}</p>
        <p className="smallcard__content__profession">{occupation}</p>
        <p className="smallcard__content__profession">{location}</p>
      </div>
    </Card>
  );
}

export default SmallCard;
