import React from "react";
import { Layout, MembershipCard } from "../../components";
import { Card, Image, Row } from "react-bootstrap";
import "./MembershipPlans.scss";

import Hero from "../../assets/images/MembershipPlans/hero.png";
import Bronze from "../../assets/icons/svg icon/bronze.svg";
import Gold from "../../assets/icons/svg icon/gold.svg";
import Silver from "../../assets/icons/svg icon/Silver.svg";
import Platinum from "../../assets/icons/svg icon/Platinum.svg";
import DisplayImage from "../../assets/images/MembershipPlans/image.png";
import Send from "../../assets/icons/svg icon/Send personalized.svg";
import Chat from "../../assets/icons/svg icon/Chat requests.svg";
import View from "../../assets/icons/svg icon/View contact.svg";
import Other from "../../assets/icons/svg icon/Your contact.svg";

function MembershipPlans() {
  const heroData = {
      title: "Membership plans",
      subtitle:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      isLoggedIn: true,
    },
    cards = [
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
    ];
  return (
    <Layout heroData={heroData} heroImg={Hero}>
      <section className="member col-lg-10 col-md-12 col-sm-12">
        {cards.map((card, index) => (
          <MembershipCard key={card} details={card} isActive={index === 1} />
        ))}
      </section>
      <Row className="details col-lg-10 col-md-12 col-sm-12">
        <div className="details__picture col-lg-6 col-md-12">
          <Image src={DisplayImage} alt="image" className="details__picture__img" />
        </div>
        <div className="details__content col-lg-6 col-md-12">
          <p className="details__content__title">Why Paid Membership?</p>
          <p className="details__content__subtitle">
            Lorem ipsum is simply dummy text in the printing and typesetting
            industry.
          </p>
          <p className="details__content__description">
            Lorem ipsum is simply dummy text in the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <div className="details__content__cards">
            <Card className="details__content__cards__card">
              <div className="details__content__cards__card__icon">
                <Image src={Send} alt="messages icon" height={25} />
              </div>
              <div className="details__content__cards__card__content">
                <p className="details__content__cards__card__content__text">
                  Send personalized messages
                </p>
                <p className="details__content__cards__card__content__subtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Card>
            <Card className="details__content__cards__card">
              <div className="details__content__cards__card__icon">
                <Image src={Chat} alt="chat icon" height={25} />
              </div>
              <div className="details__content__cards__card__content">
                <p className="details__content__cards__card__content__text">
                  Chat requests to members
                </p>
                <p className="details__content__cards__card__content__subtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Card>
            <Card className="details__content__cards__card">
              <div className="details__content__cards__card__icon">
                <Image src={View} alt="contact icon" height={25} />
              </div>
              <div className="details__content__cards__card__content">
                <p className="details__content__cards__card__content__text">
                  View contact details
                </p>
                <p className="details__content__cards__card__content__subtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Card>
            <Card className="details__content__cards__card">
              <div className="details__content__cards__card__icon">
                <Image src={Other} alt="other icon" height={25} />
              </div>
              <div className="details__content__cards__card__content">
                <p className="details__content__cards__card__content__text">
                  View contact details to other
                </p>
                <p className="details__content__cards__card__content__subtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Row>
    </Layout>
  );
}

export default MembershipPlans;
