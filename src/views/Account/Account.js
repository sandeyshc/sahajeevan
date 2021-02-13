import React, { useState } from "react";
import "./Account.scss";
import { Layout, ListOptions } from "../../components";
import { Card, Row } from "react-bootstrap";

import Hero from "../../assets/images/Settings/hero.png";
import Privacy from "../../assets/icons/svg icon/our privacy.svg";
import Password from "../../assets/icons/svg icon/change password.svg";
import Alert from "../../assets/icons/svg icon/alert manager.svg";
import Feedback from "../../assets/icons/svg icon/feedback.svg";

function Account() {
  const heroData = {
      title: "Account settings",
      subtitle:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      isSmallBanner: true,
      isLoggedIn: true,
    },
    listOptions = [
      {
        icon: Privacy,
        text: "Our Privacy",
      },
      {
        icon: Password,
        text: "Change password",
      },
      {
        icon: Alert,
        text: "Alert manager",
      },
      {
        icon: Feedback,
        text: "Feedback/complaints",
      },
    ],
    cards = [
      {
        title: "Allow My detailed Profile to be viewed by all visitors.",
        content:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Manage Filters",
        content:
          "Allow My detailed Profiles to be viewed only by registered users who pass my filters.",
      },
      {
        title: "Summary profile will also not viewable by any visitor",
        content:
          "Don't show my detailed profile or summary to any user, I will search and contact profiles.",
      },
    ],
    [optionSelected, setOptionSelected] = useState(1);
  return (
    <Layout heroData={heroData} heroImg={Hero}>
      <section className="settings col-lg-10 col-12">
        <Row className="settings__section">
          <div className="settings__section__filter">
            <ListOptions
              options={listOptions}
              active={optionSelected}
              activeChange={setOptionSelected}
            ></ListOptions>
          </div>
          <div className="settings__section__content col-sm-12">
            <div className="settings__section__content__cards">
              {cards.map(({ title, content }) => (
                <Card
                  key={title}
                  className="settings__section__content__cards__card"
                >
                  <p className="settings__section__content__cards__card__title">
                    {title}
                  </p>
                  <hr className="settings__section__content__cards__card__divider" />
                  <p className="settings__section__content__cards__card__content">
                    {content}
                  </p>
                  <button className="settings__section__content__cards__card__submit">
                    Applied
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </Row>
      </section>
    </Layout>
  );
}

export default Account;
