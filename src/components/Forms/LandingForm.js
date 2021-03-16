import React from "react";
import "./LandingForm.scss";
import { Form, Col, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { getOptions } from "../../services/profile";

function LandingForm() {
  const { data } = useQuery("getOptions", getOptions, {
    refetchOnWindowFocus: false
  });
  return (
    <div className="landing__form col-lg-6">
      <Form>
        <p className="landing__form__title">
          <span className="landing__form__title__highlight">LOREM IPSUM</span>{" "}
          IS SIMPLY
        </p>
        <Form.Row>
          <Form.Group as={Col} controlId="looking">
            <Form.Label className="landing__form__label">
              I am looking for a
            </Form.Label>
            <Form.Control as="select" className="landing__form__control">
              <option></option>
              <option>Man</option>
              <option>Woman</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="mothertongue">
            <Form.Label className="landing__form__label">
              Mother Tongue
            </Form.Label>
            <Form.Control as="select" className="landing__form__control">
              <option></option>
              {data?.results?.mother_tongue.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Row className="col">
            <Form.Group as={Col} controlId="agefrom">
              <Form.Label className="landing__form__label">By age</Form.Label>
              <Form.Control as="select" className="landing__form__control">
                <option></option>
                {data?.results?.age?.map(age => (
                  <option key={age.key}>{age.value}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="ageto">
              <Form.Label className="landing__form__label">By age</Form.Label>
              <Form.Control as="select" className="landing__form__control">
                <option></option>
                {data?.results?.age?.map(age => (
                  <option key={age.key}>{age.value}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="religion">
            <Form.Label className="landing__form__label">Religion</Form.Label>
            <Form.Control as="select" className="landing__form__control">
              <option></option>
              {data?.results?.religion.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="looking">
            <Form.Label className="landing__form__label">
              Marital Status
            </Form.Label>
            <Form.Control as="select" className="landing__form__control">
              <option></option>
              {data?.results?.marital_status.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="mothertongue">
            <Form.Label className="landing__form__label">Place</Form.Label>
            <Form.Control as="select" className="landing__form__control">
              <option></option>
              {data?.results?.location?.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="looking">
            <Form.Label className="landing__form__label">Education</Form.Label>
            <Form.Control
              as="select"
              placeholder="Lorem ipsum is simply dummy text"
              className="landing__form__control"
            >
              <option></option>
              {data?.results?.qualification?.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="looking">
            <Form.Label className="landing__form__label">Occupation</Form.Label>
            <Form.Control
              as="select"
              placeholder="Lorem ipsum is simply dummy text"
              className="landing__form__control"
            >
              <option></option>
              {data?.results?.occupation?.map(opt => (
                <option key={opt?.key}>{opt?.value}</option>
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
    </div>
  );
}

export default LandingForm;
