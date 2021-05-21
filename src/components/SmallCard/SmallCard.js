import React from "react";
import "./SmallCard.scss";
import { Card, Image } from "react-bootstrap";

import Arrow from "../../assets/icons/svg icon/Right.svg";
import Camera from "../../assets/icons/svg icon/camera.svg";


const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function SmallCard({
  data: {
    mother_tongue,
    name,
    height,
    occupation,
    total_photos,
    location,
    birth_date,
    age,
    caste,
    marital_status,
    religion,
    id
  },
  children
}) {
  return (
    <Card className="smallcard mr-1">
      <span className="smallcard__pictures">
        <Image src={Camera} alt="camera" height="13px" />
        <span className="smallcard__pictures__count">{total_photos}</span>
      </span>
      <button className="smallcard__button" onClick={() => openInNewTab(`/profile/${id}`)}>
        View Profile
        <Image
          src={Arrow}
          alt="right arrow"
          className="smallcard__button__icon"
        />
      </button>
      {children}
      <div className="smallcard__content">
        <p className="smallcard__content__title pb-2" onClick={() => openInNewTab(`/profile/${id}`)}>
          {name}, {age} yrs, {height}
        </p>
        <p className="smallcard__content__location">
          {religion}-{caste}
        </p>
        <p className="smallcard__content__location">
          {mother_tongue}, Lives in {location}
        </p>
        <p className="smallcard__content__profession">{marital_status}</p>
      </div>
    </Card>
  );
}

export default SmallCard;
