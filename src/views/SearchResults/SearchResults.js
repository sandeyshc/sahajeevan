import React, { useState } from "react";
import { Image, Row } from "react-bootstrap";
import { Layout, ProfileCard, ListOptions, Filter } from "../../components";
import "./SearchResults.scss";

import heroImg from "../../assets/images/SearchResults/hero.png";
import profileImage1 from "../../assets/images/demo2.png";

import AcceptedByMe from "../../assets/icons/svg icon/Accepted by me.svg";
import DeclinedRequest from "../../assets/icons/svg icon/declined request_.svg";
import ViewAll from "../../assets/icons/svg icon/view all.svg";
import { getFilter } from "../../services/profile";

function SearchResults() {
  const [profiles, setProfiles] = useState([]),
    heroData = {
      subtitle:
        "Lorem Ipsum is simply the dummy text for printing and typesetting industry.",
      title: "Search Results",
      isSmallBanner: true,
      isLoggedIn: true
    },
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
      total_photos: 9
    };
  return (
    <Layout heroImg={heroImg} heroData={heroData}>
      <section className="results col-lg-10 col-12">
        <Row className="results__section m-0">
          <div className="results__section__filter d-none d-xl-block">
            <Filter data={getFilter()} setProfiles={setProfiles} />
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
              {profiles?.map(profile => (
                <ProfileCard card={profile} />
              ))}
            </div>
          </div>
        </Row>
      </section>
    </Layout>
  );
}

export default SearchResults;
