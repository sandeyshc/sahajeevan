import React from "react";
import "./Interests.scss";
import { Layout, ListOptions, ProfileCard } from "../../components";
import { Row } from "react-bootstrap";

import Hero from "../../assets/images/Interests/hero.png";
import profileImage1 from "../../assets/images/demo2.png";
import profileImage2 from "../../assets/images/demo8.png";
import profileImage3 from "../../assets/images/demo7.png";
import profileImage4 from "../../assets/images/demo6.png";
import AcceptedBYMe from "../../assets/icons/svg icon/Accepted by me.svg";
import Heart from "../../assets/icons/svg icon/heart.svg";
import Messages from "../../assets/icons/svg icon/Messages.svg";
import Received from "../../assets/icons/svg icon/Received interests1.svg";
import Sent from "../../assets/icons/svg icon/Sent interests.svg";
import Team from "../../assets/icons/svg icon/team.svg";
import Viewed from "../../assets/icons/svg icon/Viewed profiles.svg";

function Interests() {
  const heroData = {
      title: "Interests",
      subtitle:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      isLoggedIn: true,
      isSmallBanner: true,
    },
    listOptions = [
      {
        icon: Viewed,
        text: "Viewed Profiles",
      },
      {
        icon: AcceptedBYMe,
        text: "Accepted By me",
      },
      {
        icon: Messages,
        text: "Messages",
      },
      {
        icon: Received,
        text: "Received Interests",
      },
      {
        icon: Sent,
        text: "Sent interests",
      },
      {
        icon: Team,
        text: "Shortlisted",
      },
      {
        icon: Heart,
        text: "Accepted By me",
      },
    ];
  return (
    <Layout heroData={heroData} heroImg={Hero}>
      <section className="interests col-lg-10 col-12">
        <Row className="interests__section">
          <div className="interests__section__filter">
            <ListOptions options={listOptions}></ListOptions>
          </div>
          <div className="interests__section__content col-sm-12">
            <p className="interests__section__content__title">
              Lorem Ipsum is simply dummy
            </p>
            <p className="interests__section__content__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="interests__section__content__cards">
              <ProfileCard
                isPremium={true}
                profileImage={profileImage1}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage2}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage3}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage4}
              ></ProfileCard>
              <ProfileCard isPremium={true}></ProfileCard>
            </div>
          </div>
        </Row>
      </section>
    </Layout>
  );
}

export default Interests;
