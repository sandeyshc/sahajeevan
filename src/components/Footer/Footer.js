import React from 'react'
import "./Footer.scss"
import { Image, Row, Col } from "react-bootstrap";

import FooterLogo from "../../assets/images/logo1.png";
import Facebook from "../../assets/icons/svg icon/Facebook.svg";
import Twitter from "../../assets/icons/svg icon/Twitter.svg";
import Youtube from "../../assets/icons/svg icon/Youtube.svg";
import GooglePlus from "../../assets/icons/svg icon/Google+.svg";
import Location from "../../assets/icons/svg icon/location.svg";
import Page from "../../assets/icons/svg icon/Page-3.svg";
import Phone from "../../assets/icons/svg icon/phone-call.svg";
import Send from "../../assets/icons/svg icon/Path 1199.svg";
import Email from "../../assets/icons/svg icon/email_.svg";

function Footer() {
    return (
        <footer className="footer">
          <Row className="footer__row">
            <Col className="footer__details" lg={3} md={12} sm={11} xs={11}>
              <Image src={FooterLogo} height={35} />
              <p className="footer__details__description">
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <Row className="footer__details__social">
                <a
                  href="javascript:void(0)"
                  className="footer__details__social__icon"
                >
                  <Image src={Facebook} alt="facebook" height={10} />
                </a>
                <a
                  href="javascript:void(0)"
                  className="footer__details__social__icon"
                >
                  <Image src={Twitter} alt="Twitter" height={8} />
                </a>
                <a
                  href="javascript:void(0)"
                  className="footer__details__social__icon"
                >
                  <Image src={GooglePlus} alt="Google+" height={9} />
                </a>
                <a
                  href="javascript:void(0)"
                  className="footer__details__social__icon"
                >
                  <Image src={Youtube} alt="Youtube" height={8} />
                </a>
              </Row>
            </Col>
            <Col className="footer__links" lg={3} md={12} sm={12} xs={12}>
              <p className="footer__links__title">Quick Links</p>
              <ul className="footer__links__content">
                <li className="footer__links__content__item">
                  <a href="javascript:void(0)">Membership Plans</a>
                </li>
                <li className="footer__links__content__item">
                  <a href="javascript:void(0)">Why Us?</a>
                </li>
                <li className="footer__links__content__item">
                  <a href="javascript:void(0)">Testimonials</a>
                </li>
              </ul>
            </Col>
            <Col className="footer__contact" lg={3} md={12} sm={12} xs={12}>
              <p className="footer__contact__title">Contact Us</p>
              <ul className="footer__contact__content">
                <li className="footer__contact__content__item">
                  <Image
                    src={Location}
                    alt="location"
                    className="footer__contact__content__item__icon"
                  />
                  <p className="footer__contact__content__item__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </li>
                <li className="footer__contact__content__item">
                  <Image
                    src={Page}
                    alt="page"
                    className="footer__contact__content__item__icon"
                  />
                  <p className="footer__contact__content__item__text">
                    Lorem Ipsum@gmail.com
                  </p>
                </li>
                <li className="footer__contact__content__item">
                  <Image
                    src={Phone}
                    alt="phone call"
                    className="footer__contact__content__item__icon"
                  />
                  <p className="footer__contact__content__item__text">
                    Call Now + 91 123 456 4789
                  </p>
                </li>
              </ul>
            </Col>
            <Col className="footer__news" lg={3} md={12} sm={12} xs={12}>
              <p className="footer__news__title">
                Sign up for monthly newsletter
              </p>
              <div className="footer__news__content">
                <input
                  type="text"
                  placeholder="Email"
                  className="footer__news__content__input"
                />
                <Image
                  src={Email}
                  alt="email"
                  className="footer__news__content__icon"
                />
                <button className="footer__news__content__send">
                  <Image src={Send} alt="send" height={17} />
                </button>
              </div>
            </Col>
          </Row>
          <Row className="footer__row">
            <a href="javascript:void(0)" className="footer__copyright">
              All rights reserved &copy; 2020 Lorem Ipsum Services.
            </a>
            <div className="footer__row__links">
              <a
                href="javascript:void(0)"
                className="footer__copyright footer__terms"
              >
                Terms of use
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="javascript:void(0)"
                className="footer__copyright footer__terms"
              >
                Privacy policy
              </a>
            </div>
          </Row>
        </footer>
    )
}

export default Footer
