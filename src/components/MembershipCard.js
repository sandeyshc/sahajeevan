import React from "react";
import "./MembershipCard.scss";
import { Image } from "react-bootstrap";
import Logo from "../assets/icons/svg icon/gold.svg";
import Check from "../assets/icons/svg icon/check_.svg";

function MembershipCard({ details: { title, rate, month, messages }, isActive }) {
  return (
    <div className={`member-card ${isActive ? 'active' : ''}`}>
      <div className="member-card__holder">
        <div className="member-card__image">
          <Image src={Logo} alt="header logo" />
          <p className="member-card__image__text">{title}</p>
        </div>
        <div className="member-card__rate">
          <p className="member-card__rate__amt">Rs {rate}</p>
          <p className="member-card__rate__validity">Per User / {month} Month</p>
        </div>
        <ul className="member-card__list">
          {messages.map((item) => (
            <li key={item} className="member-card__list__item">
              <Image src={Check} alt="check" />
              <p className="member-card__list__item__text">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="member-card__divider" />
      <div className="member-card__footer">
        <button className="member-card__footer__button">Start Now</button>
      </div>
    </div>
  );
}

export default MembershipCard;
