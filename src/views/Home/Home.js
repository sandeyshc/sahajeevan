import React from "react";
import { Layout, SmallCard } from "../../components";
import { Image, Card } from "react-bootstrap";
import "./Home.scss";

import Hero from "../../assets/images/Home/home.png";
import FooterLogo from "../../assets/images/logo1.png";
import Left from "../../assets/icons/svg icon/Right1.svg";
import Right from "../../assets/icons/svg icon/Stroke 1.svg";
import RightRedArrow from "../../assets/icons/svg icon/arrow-1.svg";
import RightWhiteArrow from "../../assets/icons/svg icon/arrow.svg";

import Demo2 from "../../assets/images/demo5.png";
import Demo4 from "../../assets/images/demo2.png";
import Demo1 from "../../assets/images/demo3.png";
import Demo3 from "../../assets/images/demo4.png";

function Home() {
  const sections = [
    {
      name: "My Profile Visitors",
      count: 24,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cards: [
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 2,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 4,
        },
      ],
    },
    {
      name: "Nearby Matches",
      count: 34,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cards: [
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 2,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 4,
        },
      ],
    },
    {
      name: "Daily Recommendations",
      count: 14,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cards: [
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 2,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 4,
        },
      ],
    },
    {
      name: "Premium Matches",
      count: 24,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cards: [
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 3,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 2,
        },
        {
          title: "28, 5' 0'', Delhi and allahabad, Uttarpradesh",
          language: "Hindi-Delhi, kashmiri",
          education: "M.Com, other",
          profession: "Rs 2 - 3 Lakh, BPO/ITES Profession",
          pictureCount: 4,
        },
      ],
    },
  ];
  return (
    <Layout
      HeroImg={<Image src={Hero} alt="Hero Image" className="hero__image" />}
    >
      {sections.map((section) => (
        <section className="section">
          <div className="section__header">
            <div className="section__header__title">
              <p className="section__header__title__text">
                {section?.name}
                <span className="section__header__title__text__count">
                  {section?.count}
                </span>
              </p>
              <p className="section__header__title__subtext">
                {section?.description}
              </p>
            </div>
            <div className="section__header__actions">
              <button className="section__header__actions__left">
                <Image src={Left} alt="left icon" height="15" />
              </button>
              <button className="section__header__actions__right">
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
            {section.cards?.map((card, i) => (
              <SmallCard data={card} key={card}>
                <Image
                  src={
                    i === 0 ? Demo1 : i === 1 ? Demo2 : i === 2 ? Demo3 : Demo4
                  }
                  alt="demo"
                />
              </SmallCard>
            ))}
          </div>
        </section>
      ))}
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
