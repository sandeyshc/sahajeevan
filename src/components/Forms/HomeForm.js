import React from "react";
import "./HomeForm.scss";
import { Row, Image, Col, Card } from "react-bootstrap";
import USER from "../../assets/icons/svg icon/user_.svg";
import RECOMMENDATION from "../../assets/icons/svg icon/recommendation-letter.svg";
import JOINED from "../../assets/icons/svg icon/Shape.svg";
import INTERESTS from "../../assets/icons/svg icon/Received Interests.svg";
import { homeInfo } from "../../services/profile";
import { useQuery } from "react-query";

function HomeForm() {
  const { data } = useQuery("homeInfo", homeInfo, {
    refetchOnWindowFocus: false
  });
  return (
    <section className="homeForm col-lg-6">
      <Row className="homeForm__header px-6 ">
        <Image src={data?.profile_photo} className="mr-2 rounded-circle" alt="user image" height="130" />
        <Col className="homeForm__header__content">
          <p className="homeForm__header__content__title">{data?.profile_name}</p>
          <p className="homeForm__header__content__subtitle">
            Add Details To Your Profile{" "}
            <span className="homeForm__header__content__subtitle__percentage">
              {data?.profile_completeness}
            </span>
          </p>
        </Col>
      </Row>
      <Row className="homeForm__banner">
        <p className="homeForm__banner__content">
          Upload Photos {data?.upload_photos} &nbsp; | &nbsp;Family Details{" "}
          {data?.family_details}&nbsp; | &nbsp;Other Details{" "}
          {data?.other_details}
        </p>
      </Row>
      <Row className="homeForm__cards">
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image
              src={RECOMMENDATION}
              alt="daily recommendations"
              height="30"
            />
            <span className="homeForm__cards__card__circle__count text-nowrap">
              {data?.daily_recommendations}
            </span>
          </div>
          <p className="homeForm__cards__card__desc">Daily Recommendations</p>
        </Card>
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image src={JOINED} alt="Today Joined" height="30" />
            <span className="homeForm__cards__card__circle__count text-nowrap">
              {data?.recently_joined}
            </span>
          </div>
          <p className="homeForm__cards__card__desc">Today Joined</p>
        </Card>
        <Card className="homeForm__cards__card">
          <div className="homeForm__cards__card__circle">
            <Image src={INTERESTS} alt="Received Interests" height="30" />
            <span className="homeForm__cards__card__circle__count text-nowrap">
              {data?.received_interests}
            </span>
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
