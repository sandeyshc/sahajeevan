import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
import NotificationIcon from "../../assets/icons/svg icon/notification.svg";
import UserIcon from "../../assets/icons/svg icon/about.svg";
import LoginIcon from "../../assets/icons/svg icon/user.svg";
import RegisterIcon from "../../assets/icons/svg icon/Register.svg";
import Drawer from "@material-ui/core/Drawer";

import { Navbar, Nav, NavLink, NavDropdown, Image } from "react-bootstrap";
import { Dialog } from "../";
import { logout, isAuthenticated } from "../../services/api.js";
import DrawerContent from "../DrawerContent/DrawerContent";

function Header() {
  const landLinks = [
      { text: "SEARCH ME", link: "home" },
      { text: "MEMBERSHIP PLANS", link: "searchresults" },
      { text: "WHY US?" },
      { text: "TESTIMONIALS" }
    ],
    Modals = {
      login: "LOGIN",
      register: "REGISTER",
      otp: "OTP",
      step: "STEP"
    },
    [modal, setModal] = useState(""),
    [modalData, setModalData] = useState({}),
    [drawerState, setDrawerState] = useState(false),
    handleModal = (form, formData) => {
      setModal(form);
      setModalData(formData);
    },
    toggleDrawer = () => {
      setDrawerState(!drawerState);
    };

  return (
    <div className="header">
      <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
        <DrawerContent
          close={toggleDrawer}
          handleModal={handleModal}
        ></DrawerContent>
      </Drawer>
      <Navbar className="header__nav justify-content-between">
        <Navbar.Brand className="header__nav__brand">
          <Link to="/">
            <Image
              height={50}
              src={logo}
              alt="logo"
              className="header__nav__img"
            />
          </Link>
        </Navbar.Brand>
        <div
          className="header__menu text-white d-sm-flex d-xl-none"
          onClick={toggleDrawer}
        >
          <span className="material-icons header__menu__icon">menu</span>
        </div>
        <Nav className="d-xl-flex d-none">
          {isAuthenticated() ? (
            <>
              <NavLink className="header__nav__link" as={Link} to="/home">
                Home
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/profile/1">
                My Profile
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/search">
                Search
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/interests">
                Interests
              </NavLink>
              <NavLink
                className="header__nav__link"
                as={Link}
                to="/notifications"
              >
                Notifications
              </NavLink>
              <NavLink className="header__nav__link">Upgrade</NavLink>
              <NavLink className="header__nav__link header__nav__link__img">
                <Image src={NotificationIcon} alt="notifications" height="25" />
              </NavLink>
              <NavLink
                className="header__nav__link header__nav__link__img header__nav__link__img__user"
                as={Link}
                to="settings"
              >
                <Image src={UserIcon} alt="about" height="30" />
              </NavLink>
              <NavLink className="header__nav__link header__nav__link__user">
                <NavDropdown
                  title="LOREM IPSUM"
                  className="header__nav__link__dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink
                      className="header__nav__link header__nav__link__img header__nav__link__img__user"
                      as={Link}
                      to="/editprofile"
                      style={{ color: "black" }}
                    >
                      Edit Profile
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="header__nav__link" as={Link} to="/home">
                Search Me
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/membership">
                Membership Plans
              </NavLink>
              <NavLink className="header__nav__link">Why us?</NavLink>
              <NavLink className="header__nav__link">TESTIMONIALS</NavLink>
              <NavLink>
                <button
                  className="header__row__btn header__row__login"
                  variant="light"
                  onClick={() => handleModal(Modals.login)}
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
                <button
                  className="header__row__btn header__row__register"
                  onClick={() => handleModal(Modals.register)}
                >
                  <Image
                    src={RegisterIcon}
                    className="header__row__btn__icon"
                    alt="Register Icon"
                  />
                  REGISTER
                </button>
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar>

      <Dialog
        show={!!modal}
        onHide={handleModal}
        type={modal}
        data={modalData}
      />
    </div>
  );
}

export default Header;
