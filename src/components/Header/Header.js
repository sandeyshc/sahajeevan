import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
import "../ScrollBar/scrollbar.css";
import NotificationIcon from "../../assets/icons/svg icon/notification.svg";
import UserIcon from "../../assets/icons/svg icon/about.svg";
import LoginIcon from "../../assets/icons/svg icon/user.svg";
import RegisterIcon from "../../assets/icons/svg icon/Register.svg";
import Drawer from "@material-ui/core/Drawer";
import { useQuery } from "react-query";
import { Navbar, Nav, NavLink, NavDropdown, Image, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { Dialog } from "../";
import { logout, isAuthenticated } from "../../services/api.js";
import DrawerContent from "../DrawerContent/DrawerContent";
import BellIcon from 'react-bell-icon'

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { getTop10Notifications } from "../../services/profile";
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import useSnackBar from "../../hooks/SnackBarHook";
import 'react-chat-widget/lib/styles.css';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


function Header() {
const [anchorEl, setAnchorEl] = React.useState(null);
//const [notifications, setnotifications] = useState([]);
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
    { data: notifications } = useQuery(
     "top10Notifications",
     getTop10Notifications,
     {refetchOnWindowFocus: false}
     ),
    [modal, setModal] = useState(""),
    [modalData, setModalData] = useState({}),
    [drawerState, setDrawerState] = useState(false),
    [bellAnimation, setbellAnimation] = useState(true),

    handleModal = (form, formData) => {
      setModal(form);
      setModalData(formData);
    },
    toggleDrawer = () => {
      setDrawerState(!drawerState);
    };

     const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




   useEffect(() => {
    const timer = setTimeout(() => {
      setbellAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("response");
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
              <NavLink className="header__nav__link" as={Link} to="/editprofile">
                My Profile
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/search">
                Search
              </NavLink>
              <NavLink className="header__nav__link" as={Link} to="/interests">
                Interests
              </NavLink>

              <NavLink className="header__nav__link">Upgrade</NavLink>

              <NavLink className="header__nav__link header__nav__link__img">
                <BellIcon color="#ffffff" width='25' active={true} onClick={handleClick} animate={bellAnimation} />
                <span className="unread"></span>
                  <StyledMenu className="dropdown_notification"
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                      <StyledMenuItem className="notification_parent">
                          <div className="notification_header">
                          Notifications &nbsp;
                          <span className="msg_count">17</span></div>
                       </StyledMenuItem>
                      {notifications?.map((card) => (
                           <StyledMenuItem className="msg_row">
                              <div className="notification_msg">{card?.notification_message}</div>
                              <div className="msg_time"> March 21, 7:21PM</div>
                            </StyledMenuItem>
                           ))}
                        <StyledMenuItem className="">
                          <div className="notification_footer">View All</div>
                       </StyledMenuItem>

                      </StyledMenu>
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
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    </div>
  );
}

export default Header;
