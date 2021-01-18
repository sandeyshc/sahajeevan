import React from "react";
import { Image, Row } from "react-bootstrap";
import { Layout, ProfileCard, ListOptions } from "../../components";
import "./SearchResults.scss";

import heroImg from "../../assets/images/SearchResults/hero.png";
import profileImage1 from "../../assets/images/demo2.png";
import profileImage2 from "../../assets/images/demo8.png";
import profileImage3 from "../../assets/images/demo7.png";
import profileImage4 from "../../assets/images/demo6.png";

import AcceptedByMe from "../../assets/icons/svg icon/Accepted by me.svg";
import DeclinedRequest from "../../assets/icons/svg icon/declined request_.svg";
import ViewAll from "../../assets/icons/svg icon/view all.svg";

function SearchResults() {
  const listOptions = [
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
  heroData = {
    subtitle: 'Lorem Ipsum is simply the dummy text for printing and typesetting industry.',
    title: 'Search Results',
    isSmallBanner: true,
    isLoggedIn: true
  };
  return (
    <Layout
      heroImg={heroImg}
      heroData={heroData}
    >
      <section className="results col-lg-10 col-12">
        <Row className="results__section">
          <div className="results__section__filter">
            <ListOptions options={listOptions}></ListOptions>
          </div>
          <div className="results__section__content">
            <p className="results__section__content__title">
              Lorem Ipsum is simply dummy
            </p>
            <p className="results__section__content__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="results__section__content__cards">
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

export default SearchResults;
