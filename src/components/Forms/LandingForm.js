import React, { useState, useEffect } from "react";
import "./LandingForm.scss";
import { Form, Col, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getOptions, saveFilter } from "../../services/profile";
import { isAuthenticated } from "../../services/api";
import Dialog from "../Dialog/Dialog";

function LandingForm() {
  const [searchData, setSearchData] = useState({}),
    [modal, setModal] = useState(""),
    history = useHistory(),
    { data, isSuccess: optionsSuccess } = useQuery("getOptions", getOptions, {
      refetchOnWindowFocus: false
    }),
    handleChange = ({ target: { name, value } }) => {
      setSearchData({ ...searchData, [name]: value });
    },
    handleModal = (form = "") => {
      setModal(form);
    },
    initializeDefaults = () => {
      setSearchData({
        location: data.results.location[0].key,
        marital_status: data.results.marital_status[0].key,
        gender: data.results.gender[0].key,
        religion: data.results.religion[0].value,
        mother_tongue: data.results.mother_tongue[0].key,
        occupation: data.results.occupation[0].key,
        qualification: data.results.qualification[0].key,
        age: {
          from: 18,
          to: 18
        }
      });
    },
    handleSubmit = e => {
      e.preventDefault();
      saveFilter({
        gender: searchData.gender,
        occupation: [searchData.occupation],
        qualification: [searchData.qualification],
        income: data?.results?.income.filter(v => v.key),
        age: {
          from: +searchData.age.from,
          to: +searchData.age.to
        },
        location: [searchData.location],
        height: {
          from: 4.5,
          to: 5.5
        },
        marital_status: [searchData.marital_status],
        mother_tongue: [searchData.mother_tongue],
        religion: data?.results?.religion?.filter(
          val => val.value === searchData.religion
        )[0]?.key,
        caste: data?.results?.caste[searchData.religion].filter(v => v.key)
      });
      isAuthenticated() ? history.push("/searchresults") : setModal("LOGIN");
    };

  useEffect(() => {
    optionsSuccess && initializeDefaults();
  }, [optionsSuccess]);

  return (
    <div className="landing__form col-lg-6 d-none d-lg-block">
      <Form onSubmit={handleSubmit}>
        <p className="landing__form__title">
          <span className="landing__form__title__highlight">LOREM IPSUM</span>{" "}
          IS SIMPLY
        </p>
        <Form.Row>
          <Form.Group as={Col} controlId="looking">
            <Form.Label className="landing__form__label">
              I am looking for a
            </Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="gender"
              onChange={handleChange}
            >
              {data?.results?.gender.map(opt => (
                <option key={opt?.key} value={opt.key}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="mothertongue">
            <Form.Label className="landing__form__label">
              Mother Tongue
            </Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="mother_tongue"
              onChange={handleChange}
            >
              {data?.results?.mother_tongue.map(opt => (
                <option key={opt?.key} value={opt?.value}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Row className="col">
            <Form.Group as={Col} controlId="agefrom">
              <Form.Label className="landing__form__label">From age</Form.Label>
              <Form.Control
                className="landing__form__control"
                name="from"
                min={18}
                value={searchData?.age?.from}
                type="number"
                onChange={({ target: { name, value } }) =>
                  handleChange({
                    target: {
                      name: "age",
                      value: { ...searchData?.age, [name]: value }
                    }
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="ageto">
              <Form.Label className="landing__form__label">To age</Form.Label>
              <Form.Control
                className="landing__form__control"
                name="to"
                min={18}
                value={searchData?.age?.to}
                type="number"
                onChange={({ target: { name, value } }) =>
                  handleChange({
                    target: {
                      name: "age",
                      value: { ...searchData?.age, [name]: value }
                    }
                  })
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="religion">
            <Form.Label className="landing__form__label">Religion</Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="religion"
              onChange={handleChange}
            >
              {data?.results?.religion.map(opt => (
                <option key={opt?.key} value={opt?.value}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="marital_status">
            <Form.Label className="landing__form__label">
              Marital Status
            </Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="marital_status"
              onChange={handleChange}
            >
              {data?.results?.marital_status.map(opt => (
                <option key={opt?.key} value={opt?.key}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="location">
            <Form.Label className="landing__form__label">Place</Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="location"
              onChange={handleChange}
            >
              {data?.results?.location?.map(opt => (
                <option key={opt?.key} value={opt?.key}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="qualification">
            <Form.Label className="landing__form__label">Education</Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="qualification"
              onChange={handleChange}
            >
              {data?.results?.qualification?.map(opt => (
                <option key={opt?.key} value={opt?.key}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="occupation">
            <Form.Label className="landing__form__label">Occupation</Form.Label>
            <Form.Control
              as="select"
              className="landing__form__control"
              name="occupation"
              onChange={handleChange}
            >
              {data?.results?.occupation?.map(opt => (
                <option key={opt?.key} value={opt?.key}>
                  {opt?.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className="landing__form__submit">
          Let's Begin
        </Button>
        <p className="landing__form__postscript">
          Lorem ipsum is simply a dummy text of printing.
        </p>
        <p className="landing__form__links">
          <a href="javascript:void(0)" className="landing__form__links__terms">
            Terms of Use
          </a>
          and
          <a
            href="javascript:void(0)"
            className="landing__form__links__privacy"
          >
            Privacy Policy
          </a>
        </p>
      </Form>
      <Dialog
        show={!!modal}
        onHide={handleModal}
        type={modal}
        data={{ url: "/searchresults" }}
      />
    </div>
  );
}

export default LandingForm;
