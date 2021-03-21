import React, { useState } from "react";
import { Layout, CardCarousel, HomeForm } from "../../components";
import { Image, Card } from "react-bootstrap";
import "./Home.scss";
import { useQuery } from "react-query";

import Hero from "../../assets/images/Home/home.png";
import FooterLogo from "../../assets/images/logo1.png";
import Left from "../../assets/icons/svg icon/Right1.svg";
import Right from "../../assets/icons/svg icon/Stroke 1.svg";
import RightRedArrow from "../../assets/icons/svg icon/arrow-1.svg";
import RightWhiteArrow from "../../assets/icons/svg icon/arrow.svg";
import {
  premiumMatches,
  profileVisitors,
  nearbyMatches,
  dailyRecommendations
} from "../../services/profile";

function Home() {
  const cards = [
      {
        title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
        language: "Hindi-Delhi, kashmiri",
        education: "M.Com, other",
        profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
        pictureCount: 3
      },
      {
        title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
        language: "Hindi-Delhi, kashmiri",
        education: "M.Com, other",
        profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
        pictureCount: 3
      },
      {
        title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
        language: "Hindi-Delhi, kashmiri",
        education: "M.Com, other",
        profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
        pictureCount: 2
      },
      {
        title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
        language: "Hindi-Delhi, kashmiri",
        education: "M.Com, other",
        profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
        pictureCount: 4
      }
    ],
    heroData = {
      isLoggedIn: true,
      title: "Lorem ipsum is simply dummy text of the printing.",
      subtitle:
        "Lorem ipsum is simply dummy text for printing and typesetting industry. Loreum ipsum has been the industry's.",
      btnText: "Upgrade",
      className: "d-none d-lg-block"
    },
    { data: premiumCards } = useQuery("premiumMatches", premiumMatches, {
      refetchOnWindowFocus: false
    }),
    { data: nearbyCards } = useQuery("nearbyMatches", nearbyMatches, {
      refetchOnWindowFocus: false
    }),
    { data: dailyRecommendationsCards } = useQuery(
      "dailyRecommendations",
      dailyRecommendations,
      {
        refetchOnWindowFocus: false
      }
    ),
    { data: profileVisitorsCards } = useQuery(
      "profileVisitorsCards",
      profileVisitors,
      { refetchOnWindowFocus: false }
    ),
    [visitorIndex, setVisitorIndex] = useState(0),
    [nearByIndex, setNearByIndex] = useState(0),
    [recommendationIndex, setRecommendationIndex] = useState(0),
    [premiumIndex, setPremiumIndex] = useState(0);

  return (
    <Layout heroImg={Hero} heroData={heroData} bannerContent={<HomeForm />}>
      <section className="section col-xl-10 col-12">
        <div className="section__header">
          <div className="section__header__title">
            <p className="section__header__title__text">
              My Profile Visitors
              <span className="section__header__title__text__count">
                {profileVisitorsCards?.results?.length}
              </span>
            </p>
            <p className="section__header__title__subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="section__header__actions">
            <button
              className="section__header__actions__left d-none d-lg-inline-block"
              onClick={() =>
                setVisitorIndex(
                  visitorIndex > 0 ? visitorIndex - 1 : visitorIndex
                )
              }
            >
              <Image src={Left} alt="left icon" height="15" />
            </button>
            <button
              className="section__header__actions__right d-none d-lg-inline-block"
              onClick={() =>
                setVisitorIndex(
                  visitorIndex < 1 ? visitorIndex + 1 : visitorIndex
                )
              }
            >
              <Image src={Right} alt="right icon" height="15" />
            </button>
            <button className="section__header__actions__all">
              <span className="section__header__actions__all__text">
                View All
              </span>
              <Image
                src={RightRedArrow}
                alt="right arrow"
                className="section__header__actions__all__redicon"
              />
              <Image
                src={RightWhiteArrow}
                alt="right arrow"
                className="section__header__actions__all__whiteicon"
              />
            </button>
          </div>
        </div>
        <div className="section__cards">
          <CardCarousel
            cards={profileVisitorsCards?.results}
            activeIndex={visitorIndex}
          ></CardCarousel>
        </div>
      </section>

      <section className="section col-xl-10 col-12">
        <div className="section__header">
          <div className="section__header__title">
            <p className="section__header__title__text">
              Nearby Matches
              <span className="section__header__title__text__count">
                {nearbyCards?.count}
              </span>
            </p>
            <p className="section__header__title__subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="section__header__actions">
            <button
              className="section__header__actions__left d-none d-lg-inline-block"
              onClick={() =>
                setNearByIndex(nearByIndex > 0 ? nearByIndex - 1 : nearByIndex)
              }
            >
              <Image src={Left} alt="left icon" height="15" />
            </button>
            <button
              className="section__header__actions__right d-none d-lg-inline-block"
              onClick={() =>
                setNearByIndex(nearByIndex < 1 ? nearByIndex + 1 : nearByIndex)
              }
            >
              <Image src={Right} alt="right icon" height="15" />
            </button>
            <button className="section__header__actions__all">
              <span className="section__header__actions__all__text">
                View All
              </span>
              <Image
                src={RightRedArrow}
                alt="right arrow"
                className="section__header__actions__all__redicon"
              />
              <Image
                src={RightWhiteArrow}
                alt="right arrow"
                className="section__header__actions__all__whiteicon"
              />
            </button>
          </div>
        </div>
        <div className="section__cards">
          <CardCarousel
            cards={nearbyCards?.results}
            activeIndex={nearByIndex}
          ></CardCarousel>
        </div>
      </section>

      <section className="section col-xl-10 col-12">
        <div className="section__header">
          <div className="section__header__title">
            <p className="section__header__title__text">
              Daily Recommendations
              <span className="section__header__title__text__count">24</span>
            </p>
            <p className="section__header__title__subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="section__header__actions">
            <button
              className="section__header__actions__left d-none d-lg-inline-block"
              onClick={() =>
                setRecommendationIndex(
                  recommendationIndex > 0
                    ? recommendationIndex - 1
                    : recommendationIndex
                )
              }
            >
              <Image src={Left} alt="left icon" height="15" />
            </button>
            <button
              className="section__header__actions__right d-none d-lg-inline-block"
              onClick={() =>
                setRecommendationIndex(
                  recommendationIndex < 1
                    ? recommendationIndex + 1
                    : recommendationIndex
                )
              }
            >
              <Image src={Right} alt="right icon" height="15" />
            </button>
            <button className="section__header__actions__all">
              <span className="section__header__actions__all__text">
                View All
              </span>
              <Image
                src={RightRedArrow}
                alt="right arrow"
                className="section__header__actions__all__redicon"
              />
              <Image
                src={RightWhiteArrow}
                alt="right arrow"
                className="section__header__actions__all__whiteicon"
              />
            </button>
          </div>
        </div>
        <div className="section__cards">
          <CardCarousel
            cards={dailyRecommendationsCards?.results}
            activeIndex={recommendationIndex}
          ></CardCarousel>
        </div>
      </section>

      <section className="section col-xl-10 col-12">
        <div className="section__header">
          <div className="section__header__title">
            <p className="section__header__title__text">
              Premium Matches
              <span className="section__header__title__text__count">
                {premiumCards?.results?.length}
              </span>
            </p>
            <p className="section__header__title__subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="section__header__actions">
            <button
              className="section__header__actions__left d-none d-lg-inline-block"
              onClick={() =>
                setPremiumIndex(
                  premiumIndex > 0 ? premiumIndex - 1 : premiumIndex
                )
              }
            >
              <Image src={Left} alt="left icon" height="15" />
            </button>
            <button
              className="section__header__actions__right d-none d-lg-inline-block"
              onClick={() =>
                setPremiumIndex(
                  premiumIndex < 1 ? premiumIndex + 1 : premiumIndex
                )
              }
            >
              <Image src={Right} alt="right icon" height="15" />
            </button>
            <button className="section__header__actions__all">
              <span className="section__header__actions__all__text">
                View All
              </span>
              <Image
                src={RightRedArrow}
                alt="right arrow"
                className="section__header__actions__all__redicon"
              />
              <Image
                src={RightWhiteArrow}
                alt="right arrow"
                className="section__header__actions__all__whiteicon"
              />
            </button>
          </div>
        </div>
        <div className="section__cards">
          <CardCarousel
            cards={premiumCards?.results}
            activeIndex={premiumIndex}
          ></CardCarousel>
        </div>
      </section>

      <section className="info col-12">
        <Card className="info__card col-lg-9 col-md-9 col-sm-10">
          <Image
            src={FooterLogo}
            className="info__card__img col-lg-3 col-md-4 col-sm-5"
            alt="logo"
          />
          <p className="info__card__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing.
          </p>
        </Card>
      </section>
    </Layout>
  );
}

export default Home;
