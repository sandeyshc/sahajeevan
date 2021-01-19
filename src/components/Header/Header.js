import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
import { Image } from "react-bootstrap";
import NotificationIcon from "../../assets/icons/svg icon/notification.svg";
import UserIcon from "../../assets/icons/svg icon/about.svg";
import LoginIcon from "../../assets/icons/svg icon/user.svg";
import RegisterIcon from "../../assets/icons/svg icon/Register.svg";

import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";

function Header({ isLoggedIn }) {
  const landLinks = [
    { text: "SEARCH ME", link: "home" },
    { text: "MEMBERSHIP PLANS", link: "searchresults" },
    { text: "WHY US?" },
    { text: "TESTIMONIALS" },
  ];
  return (
    <div className="header">
      <Navbar expand="xl" className="header__nav">
        <Navbar.Brand className="header__nav__brand">
          <Image
            height={50}
            src={logo}
            alt="logo"
            className="header__nav__img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          {isLoggedIn ? (
            <Nav>
              <NavLink className="header__nav__link" as={Link} to="home">Home</NavLink>
              <NavLink className="header__nav__link" as={Link} to="">My Profile</NavLink>
              <NavLink className="header__nav__link" as={Link} to="searchresults">Search</NavLink>
              <NavLink className="header__nav__link" as={Link} to="interests">Interests</NavLink>
              <NavLink className="header__nav__link" as={Link} to="notifications">Notifications</NavLink>
              <NavLink className="header__nav__link">Upgrade</NavLink>
              <NavLink className="header__nav__link header__nav__link__img">
                <Image src={NotificationIcon} alt="notifications" height="25" />
              </NavLink>
              <NavLink className="header__nav__link header__nav__link__img" as={Link} to="settings">
                <Image src={UserIcon} alt="about" height="30" />
              </NavLink>
              <NavLink className="header__nav__link header__nav__link__user">
                <NavDropdown
                  title="LOREM IPSUM"
                  className="header__nav__link__dropdown"
                >
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink className="header__nav__link" as={Link} to="home">Search Me</NavLink>
              <NavLink className="header__nav__link">Membership Plans</NavLink>
              <NavLink className="header__nav__link">Why us?</NavLink>
              <NavLink className="header__nav__link">TESTIMONIALS</NavLink>
              <NavLink>
                <button
                  className="header__row__btn header__row__login"
                  variant="light"
                >
                  <Image
                    src={LoginIcon}
                    className="header__row__btn__icon"
                    alt="Login Icon"
                  />
                  LOGIN
                </button>
              </NavLink>
              <NavLink>
                <button className="header__row__btn header__row__register">
                  <Image
                    src={RegisterIcon}
                    className="header__row__btn__icon"
                    alt="Register Icon"
                  />
                  REGISTER
                </button>
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
