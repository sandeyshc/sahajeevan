import React from 'react'
import "./LandingForm.scss"
import { Form, Col, Button } from "react-bootstrap";

function LandingForm() {
    return (
        <div className="landing__form col-lg-6">
          <Form>
            <p className="landing__form__title">
              <span className="landing__form__title__highlight">
                LOREM IPSUM
              </span>{" "}
              IS SIMPLY
            </p>
            <Form.Row>
              <Form.Group as={Col} controlId="looking">
                <Form.Label className="landing__form__label">
                  I am looking for a
                </Form.Label>
                <Form.Control as="select" className="landing__form__control">
                  <option>Man</option>
                  <option>Woman</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="mothertongue">
                <Form.Label className="landing__form__label">
                  Mother Tongue
                </Form.Label>
                <Form.Control as="select" className="landing__form__control">
                  <option>Tamil</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                  <option>Malayalam</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Row className="col">
                <Form.Group as={Col} controlId="agefrom">
                  <Form.Label className="landing__form__label">
                    By age
                  </Form.Label>
                  <Form.Control as="select" className="landing__form__control">
                    {[20, 21, 22, 23, 24, 25].map((age) => (
                      <option key={age}>{age}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="ageto">
                  <Form.Label className="landing__form__label">
                    By age
                  </Form.Label>
                  <Form.Control as="select" className="landing__form__control">
                    {[20, 21, 22, 23, 24, 25].map((age) => (
                      <option key={age}>{age}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group as={Col} controlId="caste">
                <Form.Label className="landing__form__label">Caste</Form.Label>
                <Form.Control as="select" className="landing__form__control">
                  <option>Rajput</option>
                  <option>Rayaar</option>
                  <option>Marathi</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="looking">
                <Form.Label className="landing__form__label">
                  Marital Status
                </Form.Label>
                <Form.Control as="select" className="landing__form__control">
                  <option>Single</option>
                  <option>Divorced</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="mothertongue">
                <Form.Label className="landing__form__label">Place</Form.Label>
                <Form.Control as="select" className="landing__form__control">
                  <option>Delhi</option>
                  <option>Telangana</option>
                  <option>TamilNadu</option>
                  <option>Kerala</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="looking">
                <Form.Label className="landing__form__label">
                  Education
                </Form.Label>
                <Form.Control
                  placeholder="Lorem ipsum is simply dummy text"
                  className="landing__form__control"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="looking">
                <Form.Label className="landing__form__label">
                  Occupation
                </Form.Label>
                <Form.Control
                  placeholder="Lorem ipsum is simply dummy text"
                  className="landing__form__control"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit" className="landing__form__submit">
              Let's Begin
            </Button>
            <p className="landing__form__postscript">
              Lorem ipsum is simply a dummy text of printing.
            </p>
            <p className="landing__form__links">
              <a
                href="javascript:void(0)"
                className="landing__form__links__terms"
              >
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
    )
}

export default LandingForm
