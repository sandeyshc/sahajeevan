import React, { useState } from "react";
import { Layout, ListOptions, ProfileCard } from "../../components";
import "./Notifications.scss";
import { Row } from "react-bootstrap";

import HeroImg from "../../assets/images/notifications/hero.png";
import profileImage1 from "../../assets/images/demo2.png";
import profileImage2 from "../../assets/images/demo8.png";
import profileImage3 from "../../assets/images/demo7.png";
import profileImage4 from "../../assets/images/demo6.png";

import AcceptedByMe from "../../assets/icons/svg icon/Accepted by me.svg";
import DeclinedRequest from "../../assets/icons/svg icon/declined request_.svg";
import ViewAll from "../../assets/icons/svg icon/view all.svg";

function Notifications() {
  const heroData = {
      title: "Notifications",
      subtitle:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      isLoggedIn: true,
    },
    listOptions = [
      {
        icon: AcceptedByMe,
        text: "Accepted By Me",
      },
      {
        icon: DeclinedRequest,
        text: "Declined request",
      },
      {
        icon: ViewAll,
        text: "view all notifications",
      },
    ],
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
    },
    [optionSelected, setOptionSelected] = useState(1);
  return (
    <Layout heroImg={HeroImg} heroData={heroData}>
      <section className="notifications col-lg-10 col-12">
        <Row className="notifications__section">
          <div className="notifications__section__filter">
            <ListOptions
              options={listOptions}
              active={optionSelected}
              activeChange={setOptionSelected}
            ></ListOptions>
          </div>
          <div className="notifications__section__content col-sm-12">
            <p className="notifications__section__content__title">
              Lorem Ipsum is simply dummy
            </p>
            <p className="notifications__section__content__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="notifications__section__content__cards">
              <ProfileCard
                isPremium={true}
                profileImage={profileImage1}
                card={obj}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage2}
                card={obj}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage3}
                card={obj}
              ></ProfileCard>
              <ProfileCard
                isPremium={true}
                profileImage={profileImage4}
                card={obj}
              ></ProfileCard>
              <ProfileCard isPremium={true} card={obj}></ProfileCard>
            </div>
          </div>
        </Row>
      </section>
    </Layout>
  );
}

export default Notifications;
