import React from "react";
import "./DrawerContent.scss";
import { Link } from "react-router-dom";
import { List, ListItem, Divider } from "@material-ui/core";
import RegisterIcon from "../../assets/icons/svg icon/Register.svg";
import LoginIcon from "../../assets/icons/svg icon/user.svg";
import { Image } from "react-bootstrap";
import { isAuthenticated, logout } from "../../services/api";

function DrawerContent({ close, handleModal }) {
  const landLinks = [
      { text: "SEARCH ME", link: "home" },
      { text: "MEMBERSHIP PLANS", link: "membership" },
      { text: "WHY US?" },
      { text: "TESTIMONIALS" }
    ],
    loggedLinks = [
      { text: "HOME", link: "home" },
      { text: "MY PROFILE", link: "profile" },
      { text: "SEARCH", link: "search" },
      { text: "INTERESTS", link: "interests" },
      { text: "NOTIFICATIONS", link: "notifications" },
      { text: "UPGRADE", link: "" },
      { text: "SETTINGS", link: "settings" }
    ],
    landButtons = [
      {
        text: "Login",
        class: "drawer__btn__login",
        icon: LoginIcon,
        clickFn: () => {
          close();
          handleModal("LOGIN");
        }
      },
      {
        text: "Register",
        class: "drawer__btn__register",
        icon: RegisterIcon,
        clickFn: () => {
          close();
          handleModal("REGISTER");
        }
      }
    ],
    loggedButtons = [
      {
        text: "Logout",
        class: "drawer__btn__register",
        icon: LoginIcon,
        clickFn: () => {
          close();
          logout();
        }
      }
    ],
    getList = () => {
      return isAuthenticated() ? loggedLinks : landLinks;
    },
    getButtons = () => {
      return isAuthenticated() ? loggedButtons : landButtons;
    };
  return (
    <div className="drawer">
      <List>
        <ListItem className="drawer__close justify-content-end" onClick={close}>
          &#10006;
        </ListItem>
        {getList().map(item => (
          <ListItem button key={item.text}>
            <Link className="drawer__links text-dark" to={item?.link}>
              {item.text}
            </Link>
          </ListItem>
        ))}
        <Divider className="my-2" />
        <div className="d-flex flex-column">
          {getButtons().map(item => (
            <button
              className={item.class + " drawer__btn m-2"}
              variant="light"
              onClick={item.clickFn}
            >
              <Image
                src={item?.icon}
                className="drawer__btn__icon"
                alt={item.text + " Icon"}
              />
              {item?.text}
            </button>
          ))}
        </div>
      </List>
    </div>
  );
}

export default DrawerContent;
