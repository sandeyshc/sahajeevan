import React from "react";
import { LandingForm, Layout, MembershipCard } from "../../components";
import { Image, Card, Row } from "react-bootstrap";
import "./LandingPage.scss";

import RegisterNow from "../../assets/icons/svg icon/Register Now.svg";
import Connect from "../../assets/icons/svg icon/Page-2.svg";
import Interact from "../../assets/icons/svg icon/Interact with them.svg";
import Bronze from "../../assets/icons/svg icon/bronze.svg";
import Gold from "../../assets/icons/svg icon/gold.svg";
import Silver from "../../assets/icons/svg icon/Silver.svg";
import Platinum from "../../assets/icons/svg icon/Platinum.svg";

import SectionImage from "../../assets/images/LandingPage/section.png";
import FooterLogo from "../../assets/images/logo1.png";
import Hero from "../../assets/images/LandingPage/Hero.png";

function LandingPage() {
  const cards = [
      {
        icon: "screened-profiles",
        title: "SCREENED PROFILES",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: "personal-visit",
        title: "PERSONAL VISIT",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: "success-stories",
        title: "SUCCESS STORIES",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    membershipCards = [
      {
        logo: Bronze,
        title: "BRONZE",
        rate: "349",
        month: "1",
        messages: [
          "View 10 Contacts",
          "Send 10 Messages",
          "Send Unlimited Requests",
        ],
      },
      {
        logo: Silver,
        title: "SILVER",
        rate: "399",
        month: "1",
        messages: [
          "Unlimited Contacts",
          "Unlimited Messages",
          "Send Unlimited Requests",
        ],
      },
      {
        logo: Gold,
        title: "GOLD",
        rate: "900",
        month: "3",
        messages: [
          "Unlimited Contacts",
          "Unlimited Messages",
          "Send Unlimited Requests",
        ],
      },
      {
        logo: Platinum,
        title: "PLATINUM",
        rate: "1450",
        month: "6",
        messages: [
          "Unlimited Contacts",
          "Unlimited Messages",
          "Send Unlimited Requests",
        ],
      },
    ],
    heroData = {
      title: "Lorem ipsum is simply dummy text for printing.",
      subtitle:
        "Lorem ipsum is simply dummy text for printing and typesetting industry. Loreum ipsum has been the industry's.",
      btnText: "Read More",
    };
  return (
    <Layout heroImg={Hero} heroData={heroData} bannerContent={<LandingForm />}>
      <section className="landing__section col-lg-10">
        <Image className="landing__section__image" src={SectionImage} />
        <div className="landing__section__content">
          <p className="landing__section__content__title">Why Us?</p>
          <p className="landing__section__content__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="landing__section__content__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
          <Row className="landing__section__content__cards">
            {cards.map((card) => (
              <Card
                key={card?.icon}
                className="landing__section__content__cards__card col-md-12 col-sm-12 col-lg"
              >
                <span
                  className={`landing__section__content__cards__card__image ${card?.icon}`}
                ></span>
                <p className="landing__section__content__cards__card__title">
                  {card?.title}
                </p>
                <p className="landing__section__content__cards__card__content">
                  {card?.content}
                </p>
              </Card>
            ))}
          </Row>
        </div>
      </section>
      <section className="options col-lg-10">
        <div className="options__header">
          <p className="options__header__title">Find Someone Special</p>
          <p className="options__header__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="options__cards">
          <Card className="options__cards__card">
            <div className="options__cards__card__image">
              <Image src={RegisterNow} />
            </div>
            <p className="options__cards__card__title">REGISTER NOW</p>
            <p className="options__cards__card__content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </Card>
          <Card className="options__cards__card">
            <div className="options__cards__card__image">
              <Image src={Connect} height="52" />
            </div>
            <p className="options__cards__card__title">CONNECT WITH MATCHES</p>
            <p className="options__cards__card__content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </Card>
          <Card className="options__cards__card">
            <div className="options__cards__card__image">
              <Image src={Interact} />
            </div>
            <p className="options__cards__card__title">INTERACT WITH THEM</p>
            <p className="options__cards__card__content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </Card>
        </div>
      </section>
      <section className="membership col-lg-10">
        <div className="membership__header">
          <p className="membership__header__title">Membership Plans</p>
          <p className="membership__header__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="membership__cards col-12">
          {membershipCards.map((card, index) => (
            <MembershipCard
              details={card}
              key={card?.title}
              isActive={index === 1}
            />
          ))}
        </div>
      </section>
      <section className="info">
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

export default LandingPage;
