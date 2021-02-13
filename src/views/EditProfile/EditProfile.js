import React from "react";
import { Layout, ProfileCard } from "../../components";
import "./EditProfile.scss";

import Hero from "../../assets/images/Profile/hero.png";
import { Card, Col, Image, Nav, Row } from "react-bootstrap";

import About from "../../assets/icons/svg icon/about.svg";
import Education from "../../assets/icons/svg icon/Page-4.svg";
import Family from "../../assets/icons/svg icon/family.svg";
import Partner from "../../assets/icons/svg icon/partner.svg";
import Details from "../../assets/icons/svg icon/your Basic details.svg";
import EducationImg from "../../assets/icons/svg icon/Education & Career.svg";
import FamilyImg from "../../assets/icons/svg icon/Family Details.svg";
import AboutMe from "../../assets/icons/svg icon/About me.svg";
import PreferenceImg from "../../assets/icons/svg icon/partner preferences.svg";

import ProImg from "../../assets/images/demo9.png";

function EditProfile() {
  const heroData = {
      title: "Profile Preview",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      isLoggedIn: true,
      profileView: true,
    },
    obj = {
      birth_date: "2021-02-09",
      caste: "96 kuli Maratha",
      height: 5.5,
      interest_status: "Cancel Interest",
      last_seen: "2021-02-09T04:48:12Z",
      location: "Thane",
      marital_status: "Never Married",
      mother_tongue: "Marathi",
      occupation: "Government sector",
      preference_match: "12/20",
      profile: "Shrutika B",
      profile_id: "S_EYTCBK",
      profile_photo_url: "",
      religion: "Hindu",
      total_photos: 9,
    };
  return (
    <Layout heroImg={Hero} heroData={heroData}>
      <section className="profileCard col-lg-10 col-md-12 col-sm-12">
        <ProfileCard profileImage={ProImg} isFullCard card={obj}></ProfileCard>
      </section>
      <section className="profileView col-lg-10 col-md-12 col-sm-12">
        <Nav
          className="profileView__nav"
          defaultActiveKey="#profileView__about"
        >
          <Nav.Item className="profileView__nav__item">
            <Nav.Link
              className="profileView__nav__item__link"
              href="#profileView__about"
            >
              <Image
                className="profileView__nav__item__link__img"
                height={25}
                src={About}
                alt="About"
              />
              <p className="profileView__nav__item__link__text">About</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="profileView__nav__item">
            <Nav.Link
              className="profileView__nav__item__link"
              href="#profileView__education"
            >
              <Image
                height={25}
                className="profileView__nav__item__link__img"
                src={Education}
                alt="Education"
              />
              <p className="profileView__nav__item__link__text">
                Education & Career
              </p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="profileView__nav__item">
            <Nav.Link
              className="profileView__nav__item__link"
              href="#profileView__family"
            >
              <Image
                height={25}
                className="profileView__nav__item__link__img"
                src={Family}
                alt="Family"
              />
              <p className="profileView__nav__item__link__text">
                Family Details
              </p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="profileView__nav__item">
            <Nav.Link
              className="profileView__nav__item__link"
              href="#profileView__preferences"
            >
              <Image
                height={25}
                className="profileView__nav__item__link__img"
                src={Partner}
                alt="Preference"
              />
              <p className="profileView__nav__item__link__text">
                Partner Preferences
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Card className="profileView__card" id="profileView__about">
          <div className="profileView__card__header">
            <Image
              className="profileView__card__header__img"
              src={Details}
              alt="details"
              height={50}
            />
            <div className="profileView__card__header__content">
              <p className="profileView__card__header__content__title">
                BASIC DETAILS
              </p>
              <p className="profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <Row className="profileView__card__content">
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Mother Tongue
                </p>
                <p className="profileView__card__content__item__text">
                  Hindi-Delhi
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Religion
                </p>
                <p className="profileView__card__content__item__text">Hindu</p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">Caste</p>
                <p className="profileView__card__content__item__text">Rajput</p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Date Of Birth
                </p>
                <p className="profileView__card__content__item__text">
                  18-05-1990
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Qualification
                </p>
                <p className="profileView__card__content__item__text">
                  MBA/PGDM, BBA
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Marital Status
                </p>
                <p className="profileView__card__content__item__text">
                  Never Married
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="profileView__card" id="profileView__education">
          <div className="profileView__card__header">
            <Image
              className="profileView__card__header__img"
              src={EducationImg}
              alt="education"
              height={50}
            />
            <div className="profileView__card__header__content">
              <p className="profileView__card__header__content__title">
                EDUCATION & CAREER
              </p>
              <p className="profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <Row className="profileView__card__content">
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Highest Education
                </p>
                <p className="profileView__card__content__item__text">
                  B.E/B.Tech
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Other Degreee
                </p>
                <p className="profileView__card__content__item__text">
                  B.E/B.Tech
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Organization Name
                </p>
                <p className="profileView__card__content__item__text">
                  D.Y. Patil, Tilak College
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Employed In
                </p>
                <p className="profileView__card__content__item__text">
                  Private Sector
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Occupation
                </p>
                <p className="profileView__card__content__item__text">
                  Admin Professional
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Annual Income
                </p>
                <p className="profileView__card__content__item__text">
                  Rs. 5 - 7.5 Lakh
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="profileView__card" id="profileView__family">
          <div className="profileView__card__header">
            <Image
              className="profileView__card__header__img"
              src={FamilyImg}
              alt="family"
              height={50}
            />
            <div className="profileView__card__header__content">
              <p className="profileView__card__header__content__title">
                FAMILY DETAILS
              </p>
              <p className="profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <Row className="profileView__card__content">
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Father is
                </p>
                <p className="profileView__card__content__item__text">
                  Retired
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Mother is
                </p>
                <p className="profileView__card__content__item__text">
                  Housewife
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Sisters
                </p>
                <p className="profileView__card__content__item__text">
                  Working
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Brothers
                </p>
                <p className="profileView__card__content__item__text">
                  Working
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Family Type
                </p>
                <p className="profileView__card__content__item__text">
                  Joint Family
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Family Based
                </p>
                <p className="profileView__card__content__item__text">
                  Lorem Ipsum is simply dummy text
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card className="profileView__card">
          <div className="profileView__card__header">
            <Image
              className="profileView__card__header__img"
              src={AboutMe}
              alt="About me"
              height={50}
            />
            <div className="profileView__card__header__content">
              <p className="profileView__card__header__content__title">
                ABOUT ME
              </p>
              <p className="profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div className="profileView__card__content">
            <p className="profileView__card__content__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="profileView__card__content__subheading">
              About My Family
            </p>
            <p className="profileView__card__content__about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Card>
        <Card className="profileView__card" id="profileView__preferences">
          <div className="profileView__card__header">
            <Image
              className="profileView__card__header__img"
              src={PreferenceImg}
              alt="Partner preferences"
              height={50}
            />
            <div className="profileView__card__header__content">
              <p className="profileView__card__header__content__title">
                PARTNER PREFERENCES
              </p>
              <p className="profileView__card__header__content__subtitle">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <Row className="profileView__card__content">
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">Age</p>
                <p className="profileView__card__content__item__text">
                  29 Years
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Height
                </p>
                <p className="profileView__card__content__item__text">5'4"</p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Marital Status
                </p>
                <p className="profileView__card__content__item__text">
                  Never Married
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Religion
                </p>
                <p className="profileView__card__content__item__text">Hindu</p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">Caste</p>
                <p className="profileView__card__content__item__text">
                  Hindu: Rajput - All
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Income
                </p>
                <p className="profileView__card__content__item__text">
                  Rs.2 Lakh and above
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
      </section>
    </Layout>
  );
}

export default EditProfile;
