import React from "react";
import "./HomeForm.scss";
import { Row, Image, Col, Card } from "react-bootstrap";
import USER from "../../assets/icons/svg icon/user_.svg";
import RECOMMENDATION from "../../assets/icons/svg icon/recommendation-letter.svg";
import JOINED from "../../assets/icons/svg icon/Shape.svg";
import INTERESTS from "../../assets/icons/svg icon/Received Interests.svg";

function HomeForm() {
  return (
    <section className="homeForm col-lg-6 d-none d-xl-block">
      <Row className="homeForm__header">
        <Image src={USER} alt="user image" height="130" />
        <Col className="homeForm__header__content">
          <p className="homeForm__header__content__title">HIMANSHU CHOUHAN</p>
          <p className="homeForm__header__content__subtitle">
            Add Details To Your Profile{" "}
            <span className="homeForm__header__content__subtitle__percentage">
              58%
            </span>
          </p>
        </Col>
      </Row>
      <Row className="homeForm__banner">
        <p className="homeForm__banner__content">
          Upload Photos +25%&nbsp; | &nbsp;Family Details +20%&nbsp; |
          &nbsp;Other Details +30%
        </p>
      </Row>
      <Row className="homeForm__cards">
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image src={RECOMMENDATION} alt="daily recommendations" height="30" />
            <span className="homeForm__cards__card__circle__count">20</span>
          </div>
          <p className="homeForm__cards__card__desc">Daily Recommendations</p>
        </Card>
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image src={JOINED} alt="Today Joined" height="30" />
            <span className="homeForm__cards__card__circle__count">32</span>
          </div>
          <p className="homeForm__cards__card__desc">Today Joined</p>
        </Card>
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image src={INTERESTS} alt="Received Interests" height="30" />
            <span className="homeForm__cards__card__circle__count">32</span>
          </div>
          <p className="homeForm__cards__card__desc">Received Interests</p>
        </Card>
      </Row>
      <Row className="homeForm__actions">
        <button className="homeForm__actions__upload">
          Upload Your Photos
        </button>
        <Row className="homeForm__actions__sec">
          <button className="homeForm__actions__sec__filters">
            Manage Filters
          </button>
          <button className="homeForm__actions__sec__profile">
            My Public Profile
          </button>
        </Row>
      </Row>
    </section>
  );
}

export default HomeForm;
