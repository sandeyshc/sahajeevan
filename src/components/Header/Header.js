import React from "react";
import logo from "../../assets/images/logo2.png";
import "./Header.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import LoginIcon from "../../assets/icons/svg icon/user.svg";
import RegisterIcon from "../../assets/icons/svg icon/Register.svg";
import { Link } from "react-router-dom";

function Header() {
  const landLinks = [
    "SEARCH ME",
    "MEMBERSHIP PLANS",
    "WHY US?",
    "TESTIMONIALS",
  ];
  return (
    <div className="header">
      <Row className="header__row">
        <Col lg="3">
          <Image height={50} src={logo} alt="logo" />
        </Col>
        <Col lg="6">
          <ul className="header__row__nav">
            {landLinks.map((link) => (
              <li className="header__row__nav__item" key={link}>
                <Link to="/home" className="header__row__nav__item__link">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg="auto">
          <div className="header__row__btngrp">
            <button className="header__row__btn header__row__login" variant="light">
              <Image
                src={LoginIcon}
                className="header__row__btn__icon"
                alt="Login Icon"
              />
              LOGIN
            </button>
            <button className="header__row__btn header__row__register">
              <Image
                src={RegisterIcon}
                className="header__row__btn__icon"
                alt="Register Icon"
              />
              REGISTER
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
