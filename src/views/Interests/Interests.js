import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./Interests.scss";
import { Layout, ListOptions, ProfileCard } from "../../components";
import { Row, Spinner } from "react-bootstrap";

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
import {
  receivedInterests,
  sentInterests,
  shortlisted,
  viewedProfiles,
  acceptedByMe,
  acceptedByOthers
} from "../../services/profile";

function Interests() {
  const heroData = {
      title: "Interests",
      subtitle:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      isLoggedIn: true,
      isSmallBanner: true
    },
    listText = {
      viewedProfiles: "Viewed Profiles",
      acceptedByMe: "Accepted By me",
      messages: "Messages",
      receivedInterests: "Received Interests",
      sentInterests: "Sent interests",
      shortlisted: "Shortlisted",
      acceptedByOthers: "Accepted By others"
    },
    listOptions = [
      {
        icon: Viewed,
        text: listText.viewedProfiles,
        queryFn: viewedProfiles
      },
      {
        icon: AcceptedBYMe,
        text: listText.acceptedByMe,
        queryFn: acceptedByMe
      },
      {
        icon: Messages,
        text: listText.messages
      },
      {
        icon: Received,
        text: listText.receivedInterests,
        queryFn: receivedInterests
      },
      {
        icon: Sent,
        text: listText.sentInterests,
        queryFn: sentInterests
      },
      {
        icon: Team,
        text: listText.shortlisted,
        queryFn: shortlisted
      },
      {
        icon: Heart,
        text: listText.acceptedByOthers,
        queryFn: acceptedByOthers
      }
    ],
    [optionSelected, setOptionSelected] = useState(1),
    checkSelected = index => {
      return optionSelected === index;
    },
    getIndex = text => {
      return listOptions.findIndex(c => c.text === text) + 1; // index of list starts at 1
    },
    { data: cards, refetch, isLoading: loading } = useQuery(
      {
        queryKey: listOptions[optionSelected - 1].text,
        queryFn: listOptions[optionSelected - 1].queryFn || null
      },
      { refetchOnWindowFocus: false }
    );

  useEffect(() => {
    refetch();
  }, [optionSelected]);

  return (
    <Layout heroData={heroData} heroImg={Hero}>
      <section className="interests col-lg-10 col-12">
        <Row className="interests__section">
          <div className="interests__section__filter">
            <ListOptions
              options={listOptions}
              active={optionSelected}
              activeChange={setOptionSelected}
            ></ListOptions>
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
              {cards?.results?.map(card => (
                <ProfileCard
                  key={card?.profile_id}
                  isPremium={true}
                  profileImage={profileImage1}
                  card={{ ...card, name: card?.from_user }}
                ></ProfileCard>
              ))}
              {loading && <Spinner animation="border" />}
              {!cards?.results?.length && !loading && (
                <p>No {listOptions[optionSelected - 1].text} found.</p>
              )}
            </div>
          </div>
        </Row>
      </section>
    </Layout>
  );
}

export default Interests;
