import React from "react";
import { Layout } from "../../components";
import "./Search.scss";

import Hero from "../../assets/images/Search/hero.png";
import { Form, Image, Button } from "react-bootstrap";
import SaveSearch from "../../assets/icons/svg icon/search-interface-symbol.svg";
import Save from "../../assets/icons/svg icon/save-file.svg";
import { useHistory } from "react-router-dom";

function Search() {
  const heroData = {
    title: "Search Now",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isLoggedIn: true,
    isSmallBanner: true,
  },
  history = useHistory();
  return (
    <Layout heroImg={Hero} heroData={heroData}>
      <section className="search col-lg-9 col-md-12 col-sm-12">
        <div className="search__header">
          <p className="search__header__title">Lorem Ipsum is simply dummy</p>
          <p className="search__header__subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="search__form">
          <Form>
            <div className="search__form__controls">
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Looking For
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  />
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Age
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {[25, 26, 27, 28, 29].map((age) => (
                      <option key={age}>{age} Years</option>
                    ))}
                  </Form.Control>
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {[25, 26, 27, 28, 29].map((age) => (
                      <option key={age}>{age} Years</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Location
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  />
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Height
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {[
                      "4'9\"",
                      "4'10\"",
                      "4'11\"",
                      "5'9\"",
                      "5'10\"",
                      "5'11\"",
                    ].map((height) => (
                      <option key={height}>{height}</option>
                    ))}
                  </Form.Control>
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {[
                      "4'9\"",
                      "4'10\"",
                      "4'11\"",
                      "5'9\"",
                      "5'10\"",
                      "5'11\"",
                    ].map((height) => (
                      <option key={height}>{height}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Marital Status
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["Never Married", "Divorced"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Religion
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["Hindu", "Muslim", "Christian"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Caste
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["Any", "No"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Mother Tongue
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["Tamil", "Other"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Occupation
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["Government Sector", "Private Sector"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Qualification
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["B.E/B.Tech", "B.Com", "MBA"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="search__form__controls__group">
                <Form.Label className="search__form__controls__group__label">
                  Income
                </Form.Label>
                <div className="search__form__controls__group__wrapper">
                  <Form.Control
                    as="select"
                    className="search__form__controls__group__wrapper__control"
                    placeholder="Lorem Ipsum is simply dummy text"
                  >
                    {["5-8 lakhs", "7-10 lakhs"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
            </div>
            <div className="search__form__actions">
              <Button className="search__form__actions__search" variant="" onClick={() => history.push('/searchresults')}>
                <Image src={SaveSearch} alt="save and search" height={22} />
                SAVE AND SEARCH
              </Button>
              <Button className="search__form__actions__save" variant="">
                <Image src={Save} alt="save" height={20} />
                SAVE
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </Layout>
  );
}

export default Search;
