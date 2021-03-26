import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { Card, Col, Image, Nav, Row } from "react-bootstrap";

import { Layout, ViewProfileCard } from "../../components";
import "./Profile.scss";
import Hero from "../../assets/images/Profile/hero.png";

import About from "../../assets/icons/svg icon/about.svg";
import Education from "../../assets/icons/svg icon/Page-4.svg";
import Family from "../../assets/icons/svg icon/family.svg";
import Partner from "../../assets/icons/svg icon/partner.svg";
import Details from "../../assets/icons/svg icon/your Basic details.svg";
import EducationImg from "../../assets/icons/svg icon/Education & Career.svg";
import FamilyImg from "../../assets/icons/svg icon/Family Details.svg";
import AboutMe from "../../assets/icons/svg icon/About me.svg";
import PreferenceImg from "../../assets/icons/svg icon/partner preferences.svg";

import ProImg from "../../assets/images/Profile/img.png";
import { viewProfile } from "../../services/profile";

function Profile() {
  const { id } = useParams(),
    heroData = {
      title: !!id ? "Profile" : "Preview Profile",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      profileView: true
    },
    { data, isSuccess } = useQuery("profileData", () => viewProfile(id), {
      refetchOnWindowFocus: false
    });
    useEffect(() => {
      console.log(isSuccess)
    }, [isSuccess])
  return (
    <Layout heroImg={Hero} heroData={heroData}>
      <section className="profileCard col-xl-10 col-lg-12 col-md-12 col-sm-12 p-xl-0">
        {isSuccess && (
          <ViewProfileCard
            isFullCard
            card={{
              ...data?.basic_info,
              birth_date: data?.basic_info?.dob,
              profile_photo_url: data?.basic_info?.photo_url
            }}
          ></ViewProfileCard>
        )}
      </section>
      <section className="profileView col-xl-10 col-lg-12 col-md-12 col-sm-12">
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
                  {data?.basic_info?.mother_tongue || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Religion
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.basic_info?.religion || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">Caste</p>
                <p className="profileView__card__content__item__text">
                  {data?.basic_info?.caste || "-"}
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Date Of Birth
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.basic_info?.dob || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Qualification
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.basic_info?.qualification || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Marital Status
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.basic_info?.marital_status || "-"}
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
                  {data?.education_and_career?.qualification || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Other Degreee
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.education_and_career?.other_degree || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Organization Name
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.education_and_career?.org_name || "-"}
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Employed In
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.education_and_career?.occupation || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Occupation
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.education_and_career?.occupation || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Annual Income
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.education_and_career?.annual_income || "-"}
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
                  {data?.family_details?.father || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Mother is
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.family_details?.mother || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Sister(s)
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.family_details?.sister || "-"}
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Brother(s)
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.family_details?.brother || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Family Type
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.family_details?.type || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Family Based
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.family_details?.based || "-"}
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
              {data?.about?.me || "-"}
            </p>
            <p className="profileView__card__content__subheading">
              About My Family
            </p>
            <p className="profileView__card__content__about">
              {data?.about?.me || "-"}
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
                  {data?.partner_preferences?.age?.expected || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Height
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.partner_preferences?.height?.expected || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Marital Status
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.partner_preferences?.marital_status?.expected || "-"}
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Religion
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.partner_preferences?.religion?.expected || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">Caste</p>
                <p className="profileView__card__content__item__text">
                  {data?.partner_preferences?.caste?.expected || "-"}
                </p>
              </Row>
              <Row className="profileView__card__content__item">
                <p className="profileView__card__content__item__label">
                  Income
                </p>
                <p className="profileView__card__content__item__text">
                  {data?.partner_preferences?.income?.expected || "-"}
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
      </section>
    </Layout>
  );
}

export default Profile;
